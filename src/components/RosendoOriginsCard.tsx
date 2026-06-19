import { useCallback, useState } from "react";
import { Sprite } from "../forge/sprites";

/**
 * "Rosendo" — Mythic, Forge: Origins-styled resume card.
 *
 * Mirrors the visual language of the Forge: Origins card (gold rarity
 * frame, navy gradient inner, Bebas headlines, gold-keyed stats, foil
 * overlays) on BOTH faces. The front is the in-set card. The back is
 * a resume "dossier" in the same chrome.
 *
 * Flips on click. Hover-tracked foil + tilt. Hidden off-screen export
 * copies expose front/back to html-to-image so the parent can download
 * either face cleanly without dealing with the rotateY(180deg) face.
 */

const RARITY_COLOR = "#f5d65a";
const RARITY_RING = "#7a5a0e";
const BG_FROM = "#1e2a4a";
const BG_TO = "#06091c";
const BG_TINT = "#3a4e80";

const CARD_SIZE_CSS = "width: min(360px, 88vw); aspect-ratio: 5 / 7;";

const styles = `
  /* ============================================================
     Stage + flip
     ============================================================ */
  .roc-stage {
    perspective: 1600px;
    ${CARD_SIZE_CSS}
    cursor: pointer;
    position: relative;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    animation: roc-float 5.5s ease-in-out infinite;
  }
  @keyframes roc-float {
    0%   { translate: 0 0px;   rotate: -0.7deg; }
    50%  { translate: 0 -10px; rotate: 0.7deg; }
    100% { translate: 0 0px;   rotate: -0.7deg; }
  }
  .roc-stage:focus-visible { outline: none; }
  .roc-stage:focus-visible .roc-flip::before {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 22px;
    border: 2px solid ${RARITY_COLOR};
    pointer-events: none;
    z-index: 50;
  }

  .roc-flip {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    transform: rotateY(var(--flip, 0deg));
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .roc-stage.flipped .roc-flip { --flip: 180deg; }

  .roc-tilt {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
    will-change: transform;
  }

  .roc-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 18px;
    overflow: hidden;
    /* Safari (and some Chromium versions on iOS) don't reliably honor
       backface-visibility when a face has compositing children — the
       back's content can bleed through the front during/around the
       flip. Belt-and-suspenders: snap the *non-visible* face to opacity 0
       with a delayed step transition (no fade), swapping exactly at the
       flip midpoint (50% of 600ms = 300ms). Same pattern TcgCard uses
       on the vertical name. */
    opacity: 1;
    transition: opacity 0s linear 0.3s;
    /* Force its own compositing layer so Safari isolates rendering. */
    transform: translateZ(0);
  }
  .roc-face.back { transform: rotateY(180deg) translateZ(0); }
  .roc-stage:not(.flipped) .roc-face.back { opacity: 0; }
  .roc-stage.flipped .roc-face:not(.back) { opacity: 0; }

  /* ============================================================
     The frame + inner — shared by front, back, and hidden export
     copies. Mirrors ForgePage's .forge-card frame/inner.
     ============================================================ */
  .roc-frame {
    position: absolute;
    inset: 0;
    padding: 4px;
    border-radius: 18px;
    background: linear-gradient(160deg, ${RARITY_COLOR} 0%, ${RARITY_RING} 100%);
    overflow: hidden;
  }
  .roc-inner {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: linear-gradient(170deg, ${BG_FROM} 0%, ${BG_TO} 100%);
    color: #f5f1e8;
    font-family: 'Inter', system-ui, sans-serif;
  }

  /* ============================================================
     Shared head row — used on front + back, identical chrome.
     ============================================================ */
  .roc-head {
    flex-shrink: 0;
    padding: 10px 14px 8px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .roc-head-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }
  .roc-sub {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(245, 241, 232, 0.7);
  }
  .roc-rarity-row {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .roc-foil-mark {
    font-size: 14px;
    line-height: 1;
    color: ${RARITY_COLOR};
    text-shadow: 0 0 8px rgba(245, 214, 90, 0.6);
  }
  .roc-rarity {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.18em;
    padding: 3px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    background: ${RARITY_COLOR};
    color: #0a0c14;
  }
  .roc-name {
    font-family: 'Bebas Neue', 'Inter', sans-serif;
    font-size: 22px;
    line-height: 1;
    letter-spacing: 0.02em;
    color: #ffffff;
    text-shadow: 0 2px 6px rgba(0,0,0,0.55);
  }

  /* Foot — shared chrome between front + back */
  .roc-foot {
    padding: 8px 14px 10px;
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex-shrink: 0;
  }
  .roc-foot-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(245, 241, 232, 0.55);
  }

  /* ============================================================
     FRONT-specific
     ============================================================ */
  .roc-art {
    position: relative;
    flex: 1;
    margin: 10px 12px;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .roc-art-aura {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: radial-gradient(circle at center, ${BG_TINT} 0%, transparent 65%);
    mix-blend-mode: screen;
    opacity: 0.85;
  }
  .roc-art-sprite {
    position: relative;
    z-index: 2;
    width: 86%;
    height: 86%;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 6px 10px rgba(0,0,0,0.5));
  }
  .roc-art-sprite svg { width: 100%; height: 100%; }

  .roc-stats {
    padding: 0 14px 4px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex-shrink: 0;
  }
  .roc-stat {
    display: grid;
    grid-template-columns: 56px 1fr 30px;
    align-items: center;
    gap: 8px;
    font-size: 10px;
  }
  .roc-stat-label {
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${RARITY_COLOR};
  }
  .roc-stat-bar {
    height: 6px;
    background: rgba(255,255,255,0.08);
    border-radius: 999px;
    overflow: hidden;
  }
  .roc-stat-fill {
    height: 100%;
    background: linear-gradient(90deg, ${RARITY_RING}, ${RARITY_COLOR});
    border-radius: 999px;
  }
  .roc-stat-value {
    font-size: 11px;
    font-weight: 700;
    color: #ffffff;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }
  .roc-flavor {
    font-size: 10.5px;
    line-height: 1.4;
    font-style: italic;
    color: rgba(245, 241, 232, 0.78);
  }

  /* ============================================================
     BACK-specific — resume dossier in matching chrome
     ============================================================ */
  .roc-back-body {
    flex: 1;
    padding: 8px 12px 4px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    min-height: 0;
    overflow: hidden;
  }
  .roc-bio {
    font-size: 9px;
    line-height: 1.45;
    color: rgba(245, 241, 232, 0.82);
  }
  .roc-bio em {
    font-style: normal;
    color: ${RARITY_COLOR};
    font-weight: 700;
  }

  /* Metrics — gold-keyed like front stats, but read as KPIs */
  .roc-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
  }
  .roc-metric {
    border: 1px solid rgba(245, 214, 90, 0.25);
    background: rgba(245, 214, 90, 0.05);
    border-radius: 6px;
    padding: 5px 7px;
    text-align: center;
  }
  .roc-metric-value {
    font-family: 'Bebas Neue', 'Inter', sans-serif;
    font-size: 20px;
    line-height: 1;
    color: #ffffff;
    letter-spacing: 0.02em;
  }
  .roc-metric-label {
    font-size: 7.5px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${RARITY_COLOR};
    margin-top: 2px;
    line-height: 1.2;
  }

  /* Section heading style — reused for "Builds With", "Forged At", etc. */
  .roc-section-title {
    font-size: 8.5px;
    font-weight: 800;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: ${RARITY_COLOR};
    margin-bottom: -2px;
  }

  /* Stats strip — two-column key/value mini grid */
  .roc-keyvals {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px 10px;
    font-size: 9px;
  }
  .roc-kv { line-height: 1.3; color: rgba(245, 241, 232, 0.78); }
  .roc-kv.wide { grid-column: 1 / -1; }
  .roc-kv-k {
    font-weight: 800;
    letter-spacing: 0.04em;
    color: ${RARITY_COLOR};
  }

  /* Project pill — gold-bordered like the front rarity badge family */
  .roc-project {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    background: rgba(245, 214, 90, 0.08);
    border: 1px solid rgba(245, 214, 90, 0.35);
    border-radius: 7px;
    text-decoration: none;
    color: inherit;
    transition: background 0.18s, border-color 0.18s;
  }
  .roc-project:hover {
    background: rgba(245, 214, 90, 0.16);
    border-color: rgba(245, 214, 90, 0.6);
  }
  .roc-project-logo {
    width: 22px;
    height: 22px;
    object-fit: contain;
    flex-shrink: 0;
  }
  .roc-project-meta { flex: 1; min-width: 0; line-height: 1.15; }
  .roc-project-name {
    font-size: 11px;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: 0.02em;
  }
  .roc-project-url {
    font-size: 8.5px;
    font-weight: 600;
    color: ${RARITY_COLOR};
    margin-top: 1px;
  }
  .roc-project-arrow {
    color: ${RARITY_COLOR};
    font-size: 12px;
    font-weight: 700;
    flex-shrink: 0;
  }

  .roc-logos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .roc-logo {
    height: 18px;
    width: auto;
    max-width: 52px;
    object-fit: contain;
    opacity: 0.92;
  }

  .roc-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px 12px;
    font-size: 9px;
    font-weight: 600;
    color: #f5f1e8;
  }
  .roc-contact a {
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .roc-contact a:hover { text-decoration: underline; color: ${RARITY_COLOR}; }
  .roc-contact-icon { color: ${RARITY_COLOR}; flex-shrink: 0; }

  /* ============================================================
     Foil overlays — Mythic strength (1.0), same recipe as ForgePage
     ============================================================ */
  .roc-foil {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    z-index: 5;
    opacity: 1;
  }
  .roc-foil-rainbow {
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
    opacity: 0.45;
    animation: roc-foil-shimmer 6s ease-in-out infinite alternate;
  }
  @keyframes roc-foil-shimmer {
    0%   { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
  }
  .roc-foil-scratch {
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
    opacity: 0.5;
  }
  .roc-foil-glare {
    background: radial-gradient(
      circle 220px at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.1) 30%,
      transparent 60%
    );
    mix-blend-mode: overlay;
    opacity: 0.6;
  }

  /* ============================================================
     Off-screen export copies — same DOM/CSS, no flip transform,
     rendered as full-sized blocks the parent can pass to
     html-to-image.

     Hidden via a 0x0 overflow:hidden container at (0,0) (see the
     .roc-export-stash wrapper in markup) instead of negative-offset
     positioning. html-to-image reads getBoundingClientRect to size
     the foreignObject; off-screen positioning (top: -10000px) was
     producing zero-content PNGs. The wrappers themselves are laid
     out at full 360x504 in their own coordinate frame and get
     clipped visually by the 0x0 ancestor.
     ============================================================ */
  .roc-export-stash {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
  }
  .roc-export {
    position: relative;
    width: 360px;
    height: 504px;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .roc-stage { animation: none; }
    .roc-flip { transition: none; }
    .roc-tilt { transform: none !important; }
    .roc-foil-rainbow { animation: none; }
  }
`;

/** Stable, hand-tuned values that match what the Forge generator would
 *  pick for a Mythic "Ro" pull. Same flavor + same realm/klass strings.
 *  Kept in one place so the front + back stay in sync. */
const ROSENDO = {
  klass: "Systems Engineer",
  realm: "The Cache Eternal",
  flavor:
    "Won't pour a shot if the grind isn't dialed in by the second second.",
  power: 92,
  speed: 95,
  skill: 98,
  cardNumber: 1,
  setCode: "ORG",
  base: import.meta.env.BASE_URL,
};
const ROSENDO_TOTAL = ROSENDO.power + ROSENDO.speed + ROSENDO.skill;

function CardFrontInner() {
  return (
    <div className="roc-frame">
      <div className="roc-inner">
        <div className="roc-head">
          <div className="roc-head-row">
            <div className="roc-sub">
              {ROSENDO.klass} · {ROSENDO.realm}
            </div>
            <div className="roc-rarity-row">
              <span className="roc-foil-mark" title="Foil">
                ✦
              </span>
              <div className="roc-rarity">Mythic</div>
            </div>
          </div>
          <div className="roc-name">ROSENDO INZUNZA</div>
        </div>

        <div className="roc-art">
          <div className="roc-art-aura" />
          <div className="roc-art-sprite">
            {/* Index 3 in CUSTOM_SPRITES = CustomRo (barista). */}
            <Sprite setId="origins" customIdx={3} />
          </div>
        </div>

        <div className="roc-stats">
          <StatRow label="Power" value={ROSENDO.power} />
          <StatRow label="Speed" value={ROSENDO.speed} />
          <StatRow label="Skill" value={ROSENDO.skill} />
        </div>

        <div className="roc-foot">
          <div className="roc-flavor">"{ROSENDO.flavor}"</div>
          <div className="roc-foot-row">
            <span>
              {ROSENDO.setCode} · {String(ROSENDO.cardNumber).padStart(4, "0")} / 0001
            </span>
            <span>Total {ROSENDO_TOTAL}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardBackInner() {
  return (
    <div className="roc-frame">
      <div className="roc-inner">
        <div className="roc-head">
          <div className="roc-head-row">
            <div className="roc-sub">California, US</div>
            <div className="roc-rarity-row">
              <span className="roc-foil-mark" title="Foil">
                ✦
              </span>
              <div className="roc-rarity">Mythic</div>
            </div>
          </div>
          <div className="roc-name">PROFILE</div>
        </div>

        <div className="roc-back-body">
          <p className="roc-bio">
            Six years shipping <em>infrastructure</em> and systems engineering,
            most recently at <em>Cloudflare</em> and <em>TikTok</em>. Sets
            technical direction for control planes, ML training systems, and
            distributed tooling at global scale. Founded and shipped{" "}
            <em>SideQuest</em>, a live iOS marketplace, solo.
          </p>

          <div className="roc-metrics">
            <div className="roc-metric">
              <div className="roc-metric-value">6</div>
              <div className="roc-metric-label">Years Shipping</div>
            </div>
            <div className="roc-metric">
              <div className="roc-metric-value">10×</div>
              <div className="roc-metric-label">Faster APIs</div>
            </div>
            <div className="roc-metric">
              <div className="roc-metric-value">1</div>
              <div className="roc-metric-label">iOS App Live</div>
            </div>
          </div>

          <div className="roc-section-title">Loadout</div>
          <div className="roc-keyvals">
            <div className="roc-kv">
              <span className="roc-kv-k">BUILDS:</span> Rust + Python
            </div>
            <div className="roc-kv">
              <span className="roc-kv-k">FUEL:</span> Oat cortado
            </div>
            <div className="roc-kv wide">
              <span className="roc-kv-k">HOBBIES:</span> MTG · Gaming · Running
            </div>
          </div>

          <div className="roc-section-title">Active Project</div>
          <a
            href="https://www.sidequestapp.io"
            target="_blank"
            rel="noopener noreferrer"
            className="roc-project"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${ROSENDO.base}icons/wordmark.png`}
              alt=""
              className="roc-project-logo"
            />
            <div className="roc-project-meta">
              <div className="roc-project-name">SideQuest</div>
              <div className="roc-project-url">sidequestapp.io</div>
            </div>
            <span className="roc-project-arrow" aria-hidden>
              ↗
            </span>
          </a>

          <div className="roc-section-title">Forged At</div>
          <div className="roc-logos">
            <img
              src={`${ROSENDO.base}Cloudflare.png`}
              alt="Cloudflare"
              className="roc-logo"
            />
            <img
              src={`${ROSENDO.base}icons/tiktok-logo-tikok-icon-transparent-tikok-app-logo-free-png.webp`}
              alt="TikTok"
              className="roc-logo"
            />
            <img
              src={`${ROSENDO.base}digital_force_technologies.jpg`}
              alt="DFT"
              className="roc-logo"
            />
            <img
              src={`${ROSENDO.base}icons/CoreLogic_logo.svg.png`}
              alt="CoreLogic"
              className="roc-logo"
            />
          </div>
        </div>

        <div className="roc-foot">
          <div className="roc-contact">
            <a
              href="mailto:rosendoinzunza@gmail.com"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                viewBox="0 0 24 24"
                width="11"
                height="11"
                aria-hidden
                className="roc-contact-icon"
              >
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              rosendoinzunza@gmail.com
            </a>
            <a
              href="https://github.com/roinzunza"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                viewBox="0 0 24 24"
                width="11"
                height="11"
                aria-hidden
                className="roc-contact-icon"
              >
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              roinzunza
            </a>
          </div>
          <div className="roc-foot-row">
            <span>
              {ROSENDO.setCode} · {String(ROSENDO.cardNumber).padStart(4, "0")} / 0001
            </span>
            <span>Founders Print</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: number }) {
  const pct = Math.min(100, Math.max(0, value));
  return (
    <div className="roc-stat">
      <span className="roc-stat-label">{label}</span>
      <div className="roc-stat-bar">
        <div className="roc-stat-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="roc-stat-value">{value}</span>
    </div>
  );
}

export interface RosendoOriginsCardProps {
  /** Off-screen capture target for "Export front PNG". */
  frontExportRef?: React.RefObject<HTMLDivElement | null>;
  /** Off-screen capture target for "Export back PNG". */
  backExportRef?: React.RefObject<HTMLDivElement | null>;
}

export default function RosendoOriginsCard({
  frontExportRef,
  backExportRef,
}: RosendoOriginsCardProps) {
  const [flipped, setFlipped] = useState(false);

  const toggle = useCallback(() => setFlipped((f) => !f), []);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  // Cursor → tilt + foil position. Direct DOM writes (no React state)
  // so it never causes a re-render. Mirror sign + X position when the
  // back is up so the interaction feels identical on both faces.
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const stage = e.currentTarget;
    const tilt = stage.querySelector(".roc-tilt") as HTMLDivElement | null;
    if (!tilt) return;
    const rect = stage.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const sign = flipped ? -1 : 1;
    const tiltX = (0.5 - py) * 18 * sign;
    const tiltY = (px - 0.5) * 18 * sign;
    tilt.style.setProperty("--tilt-x", `${tiltX}deg`);
    tilt.style.setProperty("--tilt-y", `${tiltY}deg`);
    const mx = flipped ? 1 - px : px;
    stage.style.setProperty("--mouse-x", `${mx * 100}%`);
    stage.style.setProperty("--mouse-y", `${py * 100}%`);
  };

  const onPointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    const stage = e.currentTarget;
    const tilt = stage.querySelector(".roc-tilt") as HTMLDivElement | null;
    if (tilt) {
      tilt.style.setProperty("--tilt-x", `0deg`);
      tilt.style.setProperty("--tilt-y", `0deg`);
    }
    stage.style.setProperty("--mouse-x", `50%`);
    stage.style.setProperty("--mouse-y", `50%`);
  };

  return (
    <>
      <style>{styles}</style>

      <div
        className={`roc-stage ${flipped ? "flipped" : ""}`}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`Rosendo Mythic card. ${flipped ? "Showing back. " : "Showing front. "}Press Enter to flip.`}
        onClick={toggle}
        onKeyDown={onKey}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <div className="roc-flip">
          <div className="roc-tilt">
            <div className="roc-face">
              <CardFrontInner />
              <div className="roc-foil roc-foil-scratch" />
              <div className="roc-foil roc-foil-rainbow" />
              <div className="roc-foil roc-foil-glare" />
            </div>
            <div className="roc-face back">
              <CardBackInner />
              <div className="roc-foil roc-foil-scratch" />
              <div className="roc-foil roc-foil-rainbow" />
              <div className="roc-foil roc-foil-glare" />
            </div>
          </div>
        </div>

      </div>

      {/* Off-screen full-size copies for clean PNG export. Same DOM as
          the visible faces — html-to-image captures these without
          needing to fight the rotateY(180deg) backface. They sit in a
          0×0 overflow:hidden stash at (0,0) so the exports themselves
          have positive, in-viewport bounding rects (which html-to-image
          uses to size the canvas) while staying visually invisible. */}
      <div className="roc-export-stash" aria-hidden>
        <div className="roc-export" ref={frontExportRef}>
          <CardFrontInner />
        </div>
        <div className="roc-export" ref={backExportRef}>
          <CardBackInner />
        </div>
      </div>
    </>
  );
}
