import { ImageResponse } from "next/og";

/**
 * Social sharing image placeholder (generated, 1200x630).
 * To use your own artwork instead, delete this file and add
 * src/app/opengraph-image.png (1200x630).
 */
export const alt = "Lamisa | Digital Marketing Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #5A2DE0 0%, #3F5FE8 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          Digital Marketing Specialist
        </div>
        <div style={{ display: "flex", fontSize: 150, fontWeight: 700, marginTop: 16 }}>
          Lamisa
        </div>
        <div style={{ display: "flex", fontSize: 38, marginTop: 24, maxWidth: 900, lineHeight: 1.3 }}>
          Genuine organic growth for artists, brands, and organizations.
        </div>
        <div
          style={{
            display: "flex",
            width: 120,
            height: 10,
            borderRadius: 10,
            background: "#FF6B75",
            marginTop: 48,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
