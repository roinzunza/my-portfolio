import { useCallback, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import RosendoOriginsCard from "../components/RosendoOriginsCard";

/**
 * Landing page hosting the Forge: Origins-styled Rosendo Mythic card.
 *
 * Visually paired with /forge — same cold-navy background gradient,
 * noise overlay, cursor spotlight, and gold-foil-pill action row.
 * Two export buttons capture the hidden front/back full-size copies
 * the card exposes via refs.
 */

const styles = `
  .roc-page {
    position: relative;
    min-height: 100svh;
    min-height: 100dvh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:
      max(28px, env(safe-area-inset-top, 0px))
      16px
      calc(120px + env(safe-area-inset-bottom, 0px));
    background: #0a0a0c;
    font-family: 'Inter', system-ui, sans-serif;
    gap: 24px;
  }
  @media (max-width: 420px) {
    .roc-page { padding-top: 16px; padding-bottom: calc(110px + env(safe-area-inset-bottom, 0px)); gap: 18px; }
  }

  /* Cold navy glow + noise — matches ForgePage / HomePage chrome. */
  .roc-page::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 30%, rgba(58, 78, 128, 0.22) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(30, 42, 74, 0.18) 0%, transparent 50%),
      linear-gradient(180deg, #050608 0%, #0a0c14 100%);
    pointer-events: none;
  }
  .roc-page::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    opacity: 0.32;
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  .roc-spotlight {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      circle 700px at var(--spot-x, 50%) var(--spot-y, 50%),
      rgba(245, 214, 90, 0.12) 0%,
      rgba(245, 214, 90, 0.05) 25%,
      transparent 55%
    );
    mix-blend-mode: screen;
    z-index: 0;
  }

  .roc-card-wrap {
    position: relative;
    z-index: 1;
    animation: roc-drop-in 1200ms cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  }
  @keyframes roc-drop-in {
    0%   { opacity: 0; translate: 0 -80px; }
    50%  { opacity: 1; }
    100% { opacity: 1; translate: 0 0; }
  }
  .roc-card-shadow {
    position: absolute;
    bottom: -36px;
    left: 50%;
    width: 72%;
    height: 28px;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.25) 40%,
      transparent 70%
    );
    filter: blur(12px);
    translate: -50% 0;
    pointer-events: none;
    animation: roc-floor-shadow 5.5s ease-in-out infinite;
  }
  @keyframes roc-floor-shadow {
    0%, 100% { width: 72%; opacity: 0.9; }
    50%      { width: 96%; opacity: 0.45; }
  }

  .roc-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 1;
  }
  .roc-btn {
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
  .roc-btn:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255,255,255,0.28);
  }
  .roc-btn:active { transform: scale(0.97); }
  .roc-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .roc-btn.primary {
    background: linear-gradient(180deg, #f7df72 0%, #e8c14a 100%);
    color: #0a1430;
    border-color: rgba(0,0,0,0.18);
  }
  .roc-btn.primary:hover { background: linear-gradient(180deg, #f9e388 0%, #ecc855 100%); }

  @media (prefers-reduced-motion: reduce) {
    .roc-card-wrap,
    .roc-card-shadow { animation: none; }
  }
`;

export default function RosendoOriginsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState<"front" | "back" | null>(null);

  useEffect(() => {
    document.title = "Rosendo · Origins";
  }, []);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = pageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--spot-x", `${x}%`);
    el.style.setProperty("--spot-y", `${y}%`);
  };

  const exportFace = useCallback(async (face: "front" | "back") => {
    const node = (face === "front" ? frontRef : backRef).current;
    if (!node) return;
    setExporting(face);
    try {
      const dataUrl = await toPng(node, {
        pixelRatio: 3,
        cacheBust: true,
        backgroundColor: "#1e2a4a",
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `rosendo-origins-${face}.png`;
      a.click();
    } catch (err) {
      console.error("Export failed", err);
      alert("Export failed. Check console.");
    } finally {
      setExporting(null);
    }
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="roc-page" ref={pageRef} onPointerMove={onPointerMove}>
        <div className="roc-spotlight" />

        <div className="roc-card-wrap">
          <div className="roc-card-shadow" />
          <RosendoOriginsCard
            frontExportRef={frontRef}
            backExportRef={backRef}
          />
        </div>

        <div className="roc-actions">
          <button
            className="roc-btn primary"
            onClick={() => exportFace("front")}
            disabled={exporting !== null}
          >
            <DownloadIcon />
            {exporting === "front" ? "Exporting…" : "Export front"}
          </button>
          <button
            className="roc-btn"
            onClick={() => exportFace("back")}
            disabled={exporting !== null}
          >
            <DownloadIcon />
            {exporting === "back" ? "Exporting…" : "Export back"}
          </button>
        </div>
      </div>
    </>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
    </svg>
  );
}
