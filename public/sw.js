// Culture — offline service worker.
// Pages: network-first with cache fallback (visited pages keep working offline).
// Hashed build assets: cache-first. Wikimedia images: stale-while-revalidate, capped.
const VERSION = "v1";
const PAGE_CACHE = `pages-${VERSION}`;
const ASSET_CACHE = `assets-${VERSION}`;
const IMAGE_CACHE = `images-${VERSION}`;
const IMAGE_CACHE_LIMIT = 400;

const PRECACHE_PAGES = ["/", "/tout", "/quiz", "/favoris"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGE_CACHE)
      .then((cache) => cache.addAll(PRECACHE_PAGES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  const keep = new Set([PAGE_CACHE, ASSET_CACHE, IMAGE_CACHE]);
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => !keep.has(key)).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  await Promise.all(keys.slice(0, keys.length - maxEntries).map((key) => cache.delete(key)));
}

async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request, { ignoreSearch: request.mode === "navigate" });
    if (cached) return cached;
    if (request.mode === "navigate") {
      const home = await cache.match("/");
      if (home) return home;
    }
    throw new Error("offline");
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request, cacheName, limit) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response.ok || response.type === "opaque") {
        cache.put(request, response.clone());
        if (limit) trimCache(cacheName, limit);
      }
      return response;
    })
    .catch(() => undefined);
  return cached || network.then((response) => response || Promise.reject(new Error("offline")));
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);

  // page navigations
  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, PAGE_CACHE));
    return;
  }

  // hashed, immutable build assets
  if (url.origin === self.location.origin && url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request, ASSET_CACHE));
    return;
  }

  // wikimedia portraits
  if (url.hostname === "upload.wikimedia.org" || url.hostname === "commons.wikimedia.org") {
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE, IMAGE_CACHE_LIMIT));
    return;
  }

  // other same-origin static files (manifest, icons…)
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request, ASSET_CACHE));
  }
});
