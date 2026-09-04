const layers = [
  { label: "Application", detail: "Interfaces · wallets · operations" },
  { label: "Protocol", detail: "Contracts · permissions · upgrades" },
  { label: "Settlement", detail: "Ethereum · Polygon · Solana" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 rounded-[2rem] bg-pine/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-card/80 p-6 shadow-[0_0_0_1px_rgba(31,168,122,0.08)]">
        <div className="mb-6 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
            Infrastructure stack
          </p>
          <span className="rounded-full border border-pine/30 bg-pine/10 px-2.5 py-0.5 font-mono text-[10px] text-pine">
            Multi-chain
          </span>
        </div>

        <div className="space-y-3">
          {layers.map((layer, index) => (
            <div
              key={layer.label}
              className="rounded-xl border border-line bg-elevated/80 px-4 py-3.5"
              style={{ marginLeft: `${index * 10}px` }}
            >
              <p className="font-display text-sm font-semibold text-ink">
                {layer.label}
              </p>
              <p className="mt-1 text-xs text-muted">{layer.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-line pt-5">
          {["RWA", "DeFi", "DAO"].map((item) => (
            <div
              key={item}
              className="rounded-md border border-line py-2 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
