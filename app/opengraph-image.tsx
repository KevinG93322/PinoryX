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
          background: "#F4F6F8",
          padding: 72,
          color: "#0F1728",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          Pinery<span style={{ color: "#0B4F8A" }}>X</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
          <div style={{ fontSize: 52, lineHeight: 1.15, fontWeight: 600 }}>
            Blockchain products and infrastructure, engineered to last.
          </div>
          <div style={{ marginTop: 24, fontSize: 22, color: "#5C6774" }}>
            RWA · DeFi · DAO · Tokenization · Smart contracts
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#0B4F8A" }}>
          Ethereum · Polygon · Solana · and beyond
        </div>
      </div>
    ),
    { ...size },
  );
}
