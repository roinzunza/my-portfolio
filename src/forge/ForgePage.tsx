import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Sprite } from "./sprites";
import { decodeSeed, generate, getSetMeta, randomSeed, RARITIES, SETS, type SetId } from "./generator";

const STORAGE_KEY = "forge-seed-v1";
const SET_STORAGE_KEY = "forge-set-v1";

const styles = `
  .forge-page {
    position: relative;
    min-height: 100svh;
    min-height: 100dvh;
    padding: calc(40px + env(safe-area-inset-top, 0px)) 16px calc(120px + env(safe-area-inset-bottom, 0px));
    background:
      radial-gradient(circle at 30% 20%, rgba(58, 78, 128, 0.22) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(30, 42, 74, 0.18) 0%, transparent 50%),
      linear-gradient(180deg, #050608 0%, #0a0c14 100%);
    color: #f5f1e8;
    font-family: 'Inter', system-ui, sans-serif;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .forge-page::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    opacity: 0.28;
    mix-blend-mode: overlay;
  }

  .forge-eyebrow {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: #f5d65a;
    z-index: 1;
  }
  .forge-headline {
    font-family: 'Bebas Neue', 'Inter', sans-serif;
    font-size: clamp(36px, 6vw, 56px);
    letter-spacing: 0.04em;
    color: #ffffff;
    text-align: center;
    margin: 0;
    line-height: 1;
    z-index: 1;
  }
  .forge-sub {
    font-size: 13px;
    color: #c4c8d4;
    text-align: center;
    max-width: 480px;
    margin-top: -6px;
    z-index: 1;
  }

  /* === The card === */
  .forge-card {
    position: relative;
    width: min(360px, 88vw);
    aspect-ratio: 5 / 7;
    border-radius: 18px;
    overflow: hidden;
    box-shadow:
      0 30px 60px -20px rgba(0,0,0,0.7),
      0 18px 36px -18px rgba(0,0,0,0.55);
    z-index: 1;
    transform-origin: center;
    animation: forge-reveal 700ms cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  @keyframes forge-reveal {
    0%   { opacity: 0; transform: scale(0.4) rotate(-6deg); }
    60%  { opacity: 1; }
    100% { opacity: 1; transform: scale(1) rotate(0); }
  }

  .forge-card-frame {
    position: absolute;
    inset: 0;
    padding: 4px;
    border-radius: 18px;
  }
  .forge-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  /* Top header bar */
  .forge-card-head {
    flex-shrink: 0;
    padding: 10px 14px 8px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .forge-card-name {
    font-family: 'Bebas Neue', 'Inter', sans-serif;
    font-size: 22px;
    line-height: 1;
    letter-spacing: 0.02em;
    color: #ffffff;
    text-shadow: 0 2px 6px rgba(0,0,0,0.55);
  }
  .forge-card-sub {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(245, 241, 232, 0.7);
  }
  .forge-card-rarity {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.18em;
    padding: 3px 8px;
    border-radius: 4px;
    text-transform: uppercase;
  }
  .forge-card-rarity-row {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .forge-card-foil-mark {
    font-size: 14px;
    line-height: 1;
    color: #f5d65a;
    text-shadow: 0 0 8px rgba(245, 214, 90, 0.6);
  }
  .forge-card-foil-mark.dim {
    color: rgba(245, 214, 90, 0.5);
    text-shadow: none;
  }
  .forge-card-head-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }

  /* Art panel */
  .forge-art {
    position: relative;
    flex: 1;
    margin: 10px 12px;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .forge-art-aura {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: radial-gradient(circle at center, var(--aura) 0%, transparent 65%);
    mix-blend-mode: screen;
    opacity: 0.85;
  }
  .forge-art-sprite {
    position: relative;
    z-index: 2;
    width: 78%;
    height: 78%;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 6px 10px rgba(0,0,0,0.5));
  }
  .forge-art-sprite svg { width: 100%; height: 100%; }

  /* === Rainbow foil (Rare+) === */
  .forge-foil {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    opacity: var(--foil-strength, 0);
    z-index: 5;
  }
  .forge-foil-rainbow {
    background:
      linear-gradient(
        115deg,
        transparent 8%,
        rgba(255, 119, 196, 0.55) 25%,
        rgba(255, 215, 119, 0.55) 35%,
        rgba(159, 255, 197, 0.55) 45%,
        rgba(119, 197, 255, 0.55) 55%,
        rgba(204, 159, 255, 0.55) 65%,
        rgba(255, 119, 196, 0.55) 75%,
        transparent 92%
      );
    background-size: 240% 240%;
    background-position: var(--mouse-x, 50%) var(--mouse-y, 50%);
    mix-blend-mode: color-dodge;
    animation: forge-foil-shimmer 6s ease-in-out infinite alternate;
  }
  @keyframes forge-foil-shimmer {
    0%   { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
  }
  .forge-foil-scratch {
    background:
      repeating-linear-gradient(
        115deg,
        rgba(255, 255, 255, 0.08) 0px,
        rgba(255, 255, 255, 0.08) 1px,
        transparent 1px,
        transparent 5px
      ),
      repeating-linear-gradient(
        65deg,
        rgba(255, 255, 255, 0.06) 0px,
        rgba(255, 255, 255, 0.06) 1px,
        transparent 1px,
        transparent 6px
      );
    mix-blend-mode: overlay;
  }
  .forge-foil-glare {
    background: radial-gradient(
      circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.1) 30%,
      transparent 60%
    );
    mix-blend-mode: overlay;
  }

  /* Stats */
  .forge-stats {
    padding: 0 14px 4px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex-shrink: 0;
  }
  .forge-stat {
    display: grid;
    grid-template-columns: 56px 1fr 30px;
    align-items: center;
    gap: 8px;
    font-size: 10px;
  }
  .forge-stat-label {
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--rarity);
  }
  .forge-stat-bar {
    height: 6px;
    background: rgba(255,255,255,0.08);
    border-radius: 999px;
    overflow: hidden;
    position: relative;
  }
  .forge-stat-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--rarity-soft), var(--rarity));
    border-radius: 999px;
  }
  .forge-stat-value {
    font-size: 11px;
    font-weight: 700;
    color: #ffffff;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  /* Footer */
  .forge-card-foot {
    padding: 8px 14px 10px;
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex-shrink: 0;
  }
  .forge-flavor {
    font-size: 10.5px;
    line-height: 1.4;
    font-style: italic;
    color: rgba(245, 241, 232, 0.78);
  }
  .forge-foot-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(245, 241, 232, 0.55);
  }

  /* Actions */
  .forge-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 1;
    margin-top: 4px;
  }
  .forge-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 11px 22px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.16);
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    cursor: pointer;
    font-family: inherit;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
    transition: background 0.18s, transform 0.12s, border-color 0.18s;
  }
  .forge-btn:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255,255,255,0.28);
  }
  .forge-btn:active { transform: scale(0.97); }
  .forge-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .forge-btn.primary {
    background: linear-gradient(180deg, #f7df72 0%, #e8c14a 100%);
    color: #0a1430;
    border-color: rgba(0,0,0,0.18);
  }
  .forge-btn.primary:hover { background: linear-gradient(180deg, #f9e388 0%, #ecc855 100%); }

  /* ===== Set picker ===== */
  .forge-set-picker {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 5px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.14);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.22),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    z-index: 1;
  }
  .forge-set-btn {
    padding: 9px 18px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.06em;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.7);
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.15s, color 0.15s;
  }
  .forge-set-btn:hover { color: #ffffff; background: rgba(255, 255, 255, 0.05); }
  .forge-set-btn.active {
    color: #ffffff;
    background:
      radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.22) 0%, transparent 65%),
      rgba(255, 255, 255, 0.14);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.12),
      0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .forge-meta {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(245, 241, 232, 0.5);
    z-index: 1;
  }

  /* ===== Rarity legend ===== */
  .forge-legend {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    z-index: 1;
    padding: 14px 18px;
    border-radius: 16px;
    background: rgba(20, 24, 36, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.08);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4);
    max-width: min(560px, 100%);
  }
  .forge-legend-title {
    font-size: 10px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(245, 241, 232, 0.7);
    font-weight: 700;
  }
  .forge-legend-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 7px;
  }
  .forge-legend-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 13px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.07);
    font-size: 12px;
    font-family: inherit;
  }
  .forge-legend-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    flex-shrink: 0;
    box-shadow: 0 0 8px var(--dot-glow, transparent);
  }
  .forge-legend-label {
    font-weight: 700;
    letter-spacing: 0.03em;
    color: #ffffff;
  }
  .forge-legend-pct {
    font-size: 11px;
    font-weight: 700;
    color: rgba(245, 241, 232, 0.7);
    font-variant-numeric: tabular-nums;
  }
  .forge-legend-foil {
    color: #f5d65a;
    font-size: 11px;
    text-shadow: 0 0 8px rgba(245, 214, 90, 0.5);
  }
  .forge-legend-foil.maybe { color: rgba(245, 214, 90, 0.55); text-shadow: none; }
  .forge-legend-foot {
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(245, 241, 232, 0.65);
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .forge-legend-foot span.full { color: #f5d65a; font-size: 12px; }
  .forge-legend-foot span.dim  { color: rgba(245, 214, 90, 0.55); font-size: 12px; margin-left: 10px; }

  @media (prefers-reduced-motion: reduce) {
    .forge-card { animation: none; }
    .forge-foil-rainbow { animation: none; }
  }
`;

/** Foil-eligibility per rarity tier. Display-only mapping for the legend. */
const FOIL_LABEL: Record<string, "none" | "maybe" | "yes"> = {
  Common: "none",
  Uncommon: "none",
  Rare: "maybe",   // 50% chance per pull
  Epic: "yes",
  Legendary: "yes",
  Mythic: "yes",
};

function formatPct(w: number) {
  return w >= 1 ? `${w}%` : `${w.toFixed(1)}%`;
}

export default function ForgePage() {
  // Set + seed are both URL-shareable. Set persists separately so the
  // user's last choice is remembered across visits.
  const [setId, setSetIdState] = useState<SetId>(() => {
    if (typeof window === "undefined") return "origins";
    const url = new URLSearchParams(location.search);
    const fromUrl = url.get("set") as SetId | null;
    if (fromUrl && SETS.some((s) => s.id === fromUrl)) return fromUrl;
    try {
      const stored = localStorage.getItem(SET_STORAGE_KEY) as SetId | null;
      if (stored && SETS.some((s) => s.id === stored)) return stored;
    } catch { /* ignore */ }
    return "origins";
  });

  // Seed source priority: ?s= URL param > localStorage > fresh random.
  const [seed, setSeed] = useState<number>(() => {
    if (typeof window === "undefined") return 1;
    const url = new URLSearchParams(location.search);
    const fromUrl = decodeSeed(url.get("s"));
    if (fromUrl !== null) return fromUrl;
    try {
      const stored = decodeSeed(localStorage.getItem(STORAGE_KEY));
      if (stored !== null) return stored;
    } catch { /* ignore */ }
    return randomSeed();
  });
  const [exporting, setExporting] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  // Recompute the card whenever the seed or set changes. Deterministic.
  const card = useMemo(() => generate(seed, setId), [seed, setId]);
  const setMeta = getSetMeta(setId);

  useEffect(() => {
    document.title = `Forge · ${card.name}`;
  }, [card.name]);

  // Persist seed so revisits show the same card unless the user forges again.
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, String(seed)); } catch { /* ignore */ }
  }, [seed]);

  useEffect(() => {
    try { localStorage.setItem(SET_STORAGE_KEY, setId); } catch { /* ignore */ }
  }, [setId]);

  const setActiveSet = useCallback((next: SetId) => {
    setSetIdState(next);
    // Also reroll on set switch so users see a fresh card from the new set.
    setSeed(randomSeed());
    const params = new URLSearchParams(location.search);
    params.delete("s");
    params.delete("set");
    history.replaceState(null, "", `${location.pathname}${params.toString() ? "?" + params : ""}`);
  }, []);

  const forgeAgain = useCallback(() => {
    setSeed(randomSeed());
    // Clear ?s= so the URL reflects the new random pull.
    const next = new URLSearchParams(location.search);
    next.delete("s");
    history.replaceState(null, "", `${location.pathname}${next.toString() ? "?" + next : ""}`);
  }, []);

  const exportFront = useCallback(async () => {
    const node = cardRef.current;
    if (!node) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(node, {
        pixelRatio: 3,           // retina/print quality
        cacheBust: true,
        backgroundColor: card.background.from,
      });
      const slug = card.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `${slug}-${card.seedStr}.png`;
      a.click();
    } catch (err) {
      console.error("Export failed", err);
      alert("Export failed. Check console.");
    } finally {
      setExporting(false);
    }
  }, [card]);

  return (
    <>
      <style>{styles}</style>
      <div className="forge-page">

        <div className="forge-eyebrow">{setMeta.name} · Card Lab</div>
        <h1 className="forge-headline">You Forged…</h1>
        <p className="forge-sub">
          Every visit forges a new layered sprite from thousands of combinations. Higher rarities get
          rainbow foil.
        </p>

        <SetPicker setId={setId} onSetChange={setActiveSet} />

        <RarityLegend />

        <CardArt ref={cardRef} card={card} />

        <div className="forge-actions">
          <button className="forge-btn primary" onClick={forgeAgain}>
            <SparkIcon /> Forge again
          </button>
          <button className="forge-btn" onClick={exportFront} disabled={exporting}>
            <DownloadIcon /> {exporting ? "Exporting…" : "Export PNG"}
          </button>
        </div>

        <div className="forge-meta">
          Seed · {card.seedStr.toUpperCase()}
        </div>
      </div>
    </>
  );
}

function SetPicker({ setId, onSetChange }: { setId: SetId; onSetChange: (id: SetId) => void }) {
  return (
    <div className="forge-set-picker" role="tablist" aria-label="Card set">
      {SETS.map((s) => (
        <button
          key={s.id}
          role="tab"
          aria-selected={setId === s.id}
          className={`forge-set-btn ${setId === s.id ? "active" : ""}`}
          onClick={() => onSetChange(s.id)}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}

function RarityLegend() {
  return (
    <div className="forge-legend">
      <div className="forge-legend-title">Rarity Drop Rates</div>
      <div className="forge-legend-grid">
        {RARITIES.map((r) => {
          const foil = FOIL_LABEL[r.label];
          return (
            <div
              key={r.label}
              className="forge-legend-pill"
              style={{ ["--dot-glow" as string]: r.color }}
            >
              <span className="forge-legend-dot" style={{ background: r.color }} />
              <span className="forge-legend-label">{r.label}</span>
              <span className="forge-legend-pct">{formatPct(r.weight)}</span>
              {foil === "yes" && <span className="forge-legend-foil" title="Always foil">✦</span>}
              {foil === "maybe" && <span className="forge-legend-foil maybe" title="50% chance of foil">✧</span>}
            </div>
          );
        })}
      </div>
      <div className="forge-legend-foot">
        <span className="full">✦</span> always foil
        <span className="dim">✧</span> chance of foil
      </div>
    </div>
  );
}

const CardArt = ({ ref, card }: { ref?: React.RefObject<HTMLDivElement | null>; card: ReturnType<typeof generate> }) => {
  const { hasFoil, foilStrength } = card;

  // Rarity drives the card frame color, the stat fill, and the art aura.
  // Use CSS variables so all the keyed pieces stay in sync without prop drilling.
  const style = {
    "--rarity": card.rarity.color,
    "--rarity-soft": card.rarity.ringColor,
    "--aura": card.background.tint,
    "--foil-strength": foilStrength,
  } as React.CSSProperties;

  const frameStyle = {
    background: `linear-gradient(160deg, ${card.rarity.color} 0%, ${card.rarity.ringColor} 100%)`,
  };

  const innerStyle = {
    background: `linear-gradient(170deg, ${card.background.from} 0%, ${card.background.to} 100%)`,
  };

  // Track cursor position for the foil — direct DOM write so it's snappy.
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!hasFoil) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <div className="forge-card" style={style} ref={ref} onPointerMove={onPointerMove}>
      <div className="forge-card-frame" style={frameStyle}>
        <div className="forge-card-inner" style={innerStyle}>

          {/* HEAD */}
          <div className="forge-card-head">
            <div className="forge-card-head-row">
              <div className="forge-card-sub">{card.klass} · {card.realm}</div>
              <div className="forge-card-rarity-row">
                {/* Foil indicator matches the legend glyphs:
                    ✦ = this card has foil; ✧ = could have but didn't (Rare only). */}
                {card.hasFoil && <span className="forge-card-foil-mark" title="Foil">✦</span>}
                {!card.hasFoil && card.rarity.label === "Rare" && (
                  <span className="forge-card-foil-mark dim" title="No foil this pull">✧</span>
                )}
                <div
                  className="forge-card-rarity"
                  style={{ background: card.rarity.color, color: "#0a0c14" }}
                >
                  {card.rarity.label}
                </div>
              </div>
            </div>
            <div className="forge-card-name">{card.name}</div>
          </div>

          {/* ART */}
          <div className="forge-art">
            <div className="forge-art-aura" />
            <div className="forge-art-sprite">
              <Sprite
                setId={card.setId}
                indices={card.sprite}
                palette={card.palette}
                customIdx={card.customSpriteIdx}
                teamIdx={card.teamIdx}
                pose={card.pose}
                jerseyNumber={card.jerseyNumber}
              />
            </div>
          </div>

          {/* STATS */}
          <div className="forge-stats">
            <StatRow label="Power" value={card.power} />
            <StatRow label="Speed" value={card.speed} />
            <StatRow label="Skill" value={card.skill} />
          </div>

          {/* FOOT */}
          <div className="forge-card-foot">
            <div className="forge-flavor">"{card.flavor}"</div>
            <div className="forge-foot-row">
              <span>{getSetMeta(card.setId).code} · {String(card.cardNumber).padStart(4, "0")} / 9999</span>
              <span>Total {card.total}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Foil overlays — only mounted when there's rarity to show off. */}
      {hasFoil && (
        <>
          <div className="forge-foil forge-foil-scratch" />
          <div className="forge-foil forge-foil-rainbow" />
          <div className="forge-foil forge-foil-glare" />
        </>
      )}
    </div>
  );
};

function StatRow({ label, value }: { label: string; value: number }) {
  const pct = Math.min(100, Math.max(0, value));
  return (
    <div className="forge-stat">
      <span className="forge-stat-label">{label}</span>
      <div className="forge-stat-bar">
        <div className="forge-stat-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="forge-stat-value">{value}</span>
    </div>
  );
}

function SparkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
    </svg>
  );
}
