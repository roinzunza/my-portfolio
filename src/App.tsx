import { useEffect } from "react";
import TcgCard, { type TcgCardProps } from "./components/TcgCard";

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
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px 16px;
    background: #0a0a0c;
    font-family: 'Inter', system-ui, sans-serif;
  }

  /* cold navy glow behind the card — pulls from the back palette so the
     stage and the card read as the same world. */
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
    /* subtle noise — pure SVG so no asset to load */
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    opacity: 0.35;
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  .tcg-landing-card-wrap {
    position: relative;
    z-index: 1;
  }
`;

export default function App() {
  useEffect(() => {
    document.title = "Rosendo Inzunza | Portfolio";
  }, []);

  return (
    <>
      <style>{landingStyles}</style>
      <div className="tcg-landing">
        <div className="tcg-landing-card-wrap">
          <TcgCard {...cardConfig} />
        </div>
      </div>
    </>
  );
}
