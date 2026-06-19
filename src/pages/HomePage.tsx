import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RosendoOriginsCard from "../components/RosendoOriginsCard";

const landingStyles = `
  .tcg-landing {
    position: relative;
    min-height: 100svh;            /* small-viewport height — accounts for mobile browser chrome */
    min-height: 100dvh;            /* prefer dynamic viewport height when supported */
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
    /* Top padding small (no top nav). Bottom padding clears the floating
       bottom nav + iOS home indicator. */
    padding:
      max(28px, env(safe-area-inset-top, 0px))
      16px
      calc(96px + env(safe-area-inset-bottom, 0px));
    background: #0a0a0c;
    font-family: 'Inter', system-ui, sans-serif;
  }

  @media (max-width: 420px) {
    .tcg-landing { padding-top: 16px; padding-bottom: calc(88px + env(safe-area-inset-bottom, 0px)); }
  }

  /* Cold navy glow behind the card. */
  .tcg-landing::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 30%, rgba(58, 78, 128, 0.22) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(30, 42, 74, 0.18) 0%, transparent 50%),
      linear-gradient(180deg, #050608 0%, #0a0c14 100%);
    pointer-events: none;
  }

  .tcg-landing::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    opacity: 0.35;
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  /* Cursor-following ambient spotlight. Soft gold radial that paints
     wherever the pointer is, blended via screen so it only lifts
     (never darkens) the underlying gradient. */
  .tcg-spotlight {
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

  /* Drop-in: the card translates down from above the viewport with a
     slight overshoot bounce on every mount of HomePage. Fill: backwards
     keeps the initial state applied before the animation starts. */
  .tcg-landing-card-wrap {
    position: relative;
    z-index: 1;
    animation: tcg-drop-in 1200ms cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  }
  @keyframes tcg-drop-in {
    0%   { opacity: 0; translate: 0 -100px; }
    50%  { opacity: 1; }
    100% { opacity: 1; translate: 0 0; }
  }

  /* Floor shadow that breathes with the card float. Synced 5.5s loop —
     when the card is lifted (50%), the shadow widens and softens; when
     it lands (0% / 100%), the shadow tightens and darkens. */
  .tcg-card-shadow {
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
    animation: tcg-floor-shadow 5.5s ease-in-out infinite;
  }
  @keyframes tcg-floor-shadow {
    0%, 100% { width: 72%; opacity: 0.9; }
    50%      { width: 96%; opacity: 0.45; }
  }

  @media (prefers-reduced-motion: reduce) {
    .tcg-landing-card-wrap,
    .tcg-card-shadow { animation: none; }
  }

  /* === Recruiter framing: eyebrow + action row =============== */
  .tcg-eyebrow {
    position: relative;
    z-index: 1;
    font-size: 10.5px;
    font-weight: 800;
    letter-spacing: 0.42em;
    text-transform: uppercase;
    color: #f5d65a;
    text-shadow: 0 0 12px rgba(245, 214, 90, 0.35);
    text-align: center;
    /* breathe in slightly after the card drops */
    animation: tcg-fade-up 900ms 200ms ease-out backwards;
  }
  .tcg-subhead {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: rgba(245, 241, 232, 0.65);
    margin-top: 6px;
    text-transform: none;
  }

  .tcg-actions {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    animation: tcg-fade-up 900ms 400ms ease-out backwards;
  }
  @keyframes tcg-fade-up {
    0%   { opacity: 0; translate: 0 10px; }
    100% { opacity: 1; translate: 0 0; }
  }
  .tcg-btn {
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
    text-decoration: none;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
    transition: background 0.18s, transform 0.12s, border-color 0.18s;
  }
  .tcg-btn:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255,255,255,0.28);
  }
  .tcg-btn:active { transform: scale(0.97); }
  .tcg-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .tcg-btn.primary {
    background: linear-gradient(180deg, #f7df72 0%, #e8c14a 100%);
    color: #0a1430;
    border-color: rgba(0,0,0,0.18);
  }
  .tcg-btn.primary:hover { background: linear-gradient(180deg, #f9e388 0%, #ecc855 100%); }

  @media (prefers-reduced-motion: reduce) {
    .tcg-eyebrow,
    .tcg-actions { animation: none; }
  }
`;

export default function HomePage() {
  const landingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Rosendo Inzunza | Portfolio";
  }, []);

  // Track pointer position as percentage of the landing — drives the
  // CSS spotlight gradient. Direct DOM write (no React state) so it
  // never triggers a re-render and stays butter-smooth on move.
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = landingRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--spot-x", `${x}%`);
    el.style.setProperty("--spot-y", `${y}%`);
  };

  return (
    <>
      <style>{landingStyles}</style>
      <div className="tcg-landing" ref={landingRef} onPointerMove={onPointerMove}>
        <div className="tcg-spotlight" />

        <div className="tcg-eyebrow">
          Interactive Resume
          <div className="tcg-subhead">Tap the card to flip</div>
        </div>

        <div className="tcg-landing-card-wrap">
          <div className="tcg-card-shadow" />
          <RosendoOriginsCard />
        </div>

        <div className="tcg-actions">
          <Link to="/resume" className="tcg-btn primary">
            <DocIcon /> View full resume
          </Link>
        </div>
      </div>
    </>
  );
}

function DocIcon() {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M8 13h8M8 17h5" />
    </svg>
  );
}
