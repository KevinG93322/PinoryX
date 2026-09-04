import { ImageResponse } from "next/og";

export const alt = "PineryX — Blockchain products and infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070B09",
          padding: 72,
          color: "#F3F1EA",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: -0.5,
          }}
        >
          Pinery<span style={{ color: "#1FA87A" }}>X</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 56, lineHeight: 1.15, fontWeight: 600 }}>
            Blockchain products and infrastructure, engineered to last.
          </div>
          <div style={{ marginTop: 24, fontSize: 24, color: "#9AABA3" }}>
            RWA · DeFi · DAO · Tokenization · Smart contracts
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#C6B07A" }}>
          Ethereum · Polygon · Solana · and beyond
        </div>
      </div>
    ),
    { ...size },
  );
}
