import { ImageResponse } from "next/og";

// Shared app icon template (📚 on the app's dark background).
// maskable: full-bleed with safe-zone padding for Android adaptive icons.
export function appIcon(size: number, options?: { maskable?: boolean }) {
  const emojiSize = options?.maskable ? size * 0.5 : size * 0.62;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090b 0%, #26262b 100%)",
          fontSize: emojiSize,
        }}
      >
        📚
      </div>
    ),
    { width: size, height: size, emoji: "twemoji" }
  );
}
