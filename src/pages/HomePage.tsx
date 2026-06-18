import { useEffect, useRef } from "react";
import TcgCard, { type TcgCardProps } from "../components/TcgCard";

const base = import.meta.env.BASE_URL;

// Single source of truth for the card content. Edit me to swap text/numbers/logos
// without touching the component layout.
const cardConfig: TcgCardProps = {
  name: "ROSENDO",
  photoUrl: `${base}me.png`,
  profilePicUrl: `${base}ro.jpg`,

  displayName: "Rosendo Inzunza",
  subtitle: "Systems Engineer",

  github: "https://github.com/roinzunza",

  stats: [
    { label: "Based In", value: "California, US" },
    { label: "Builds With", value: "Rust + Python" },
    { label: "Fuel", value: "Oat milk cortado" },
    { label: "Hobbies", value: "MTG · Gaming · Running", wide: true },
  ],

  bio:
    "Systems engineer with 6 years in infrastructure and systems engineering, most recently at Cloudflare and TikTok. Set technical direction for control planes, ML training systems, and distributed tooling at global scale. Strength is driving architectural changes that span multiple teams, from RFC and stakeholder alignment through production delivery, and unblocking initiatives stalled by scale or blast-radius risk. Also founded and shipped SideQuest, a live iOS marketplace, solo.",

  metrics: [
    { value: "6", label: "Years Shipping" },
    { value: "10×", label: "Faster APIs" },
    { value: "1", label: "iOS App Live" },
  ],

  project: {
    name: "SideQuest",
    url: "https://www.sidequestapp.io",
    logoUrl: `${base}icons/wordmark.png`,
  },

  logosHeading: "Built At",
  logos: [
    { name: "Cloudflare", src: `${base}Cloudflare.png` },
    { name: "TikTok", src: `${base}icons/tiktok-logo-tikok-icon-transparent-tikok-app-logo-free-png.webp` },
    { name: "DFT", src: `${base}digital_force_technologies.jpg` },
    { name: "CoreLogic", src: `${base}icons/CoreLogic_logo.svg.png` },
  ],

  contact: "rosendoinzunza@gmail.com",

  rarity: "★ Mythic",
  collectorNumber: "001 / 001 · Founders",
};

const landingStyles = `
  .tcg-landing {
    position: relative;
    min-height: 100svh;            /* small-viewport height — accounts for mobile browser chrome */
    min-height: 100dvh;            /* prefer dynamic viewport height when supported */
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
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
        <div className="tcg-landing-card-wrap">
          <div className="tcg-card-shadow" />
          <TcgCard {...cardConfig} />
        </div>
      </div>
    </>
  );
}
