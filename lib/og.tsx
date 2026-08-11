import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

interface SubjectOgProps {
  emoji: string;
  title: string;
  description: string;
  count?: number;
}

// Shared Open Graph card used by the home page and every subject page
export function subjectOgImage({ emoji, title, description, count }: SubjectOgProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090b 0%, #1c1c1f 100%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 120, marginBottom: 24 }}>{emoji}</div>
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>{title}</div>
        <div style={{ fontSize: 32, color: "#a1a1aa", marginTop: 16 }}>{description}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 48,
            fontSize: 24,
            color: "#71717a",
          }}
        >
          <div>{"📚 Culture"}</div>
          {count ? <div>{`· ${count} fiches`}</div> : null}
          <div>{"· Frises chronologiques interactives"}</div>
        </div>
      </div>
    ),
    { ...ogSize, emoji: "twemoji" }
  );
}
