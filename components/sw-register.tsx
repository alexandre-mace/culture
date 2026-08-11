"use client";

import { useEffect } from "react";

// Registers the offline service worker (production only — it would fight
// against hot reload in dev)
export function SwRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // offline support is progressive enhancement; ignore registration failures
    });
  }, []);

  return null;
}
