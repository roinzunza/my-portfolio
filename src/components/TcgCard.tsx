import { useEffect, useRef, useState, useCallback } from "react";

export type Stat = { label: string; value: string; wide?: boolean };
export type Metric = { value: string; label: string };
export type Logo = { name: string; src?: string };
export type Project = { name: string; url: string; logoUrl: string };

export interface TcgCardProps {
  /** Single-word name extruded vertically up the front. ALL CAPS reads best. */
  name: string;
  /** Front-face full-bleed photo. */
  photoUrl: string;
  /** Back-face small circular profile photo. */
  profilePicUrl: string;
  /** Display name shown in the header. */
  displayName: string;
  /** Subtitle / tagline (optional). */
  subtitle?: string;
  /** Stats strip — 4–5 entries fits cleanly. */
  stats: Stat[];
  /** Short bio paragraph. */
  bio: string;
  /** Three headline metrics. */
  metrics: Metric[];
  /** Featured project — rendered as a clickable row under "Projects". */
  project?: Project;
  /** Logos row — `src` falls back to a label tile if missing. */
  logos: Logo[];
  /** Contact email at the bottom. */
  contact: string;
  /** Optional GitHub URL rendered next to the contact. */
  github?: string;
  /** Section heading above the logos row. */
  logosHeading?: string;
  /** Small rarity stamp in the top-right of the back, e.g. "★ MYTHIC". */
  rarity?: string;
  /** Small collector number in the bottom-left of the back, e.g. "001 / 001". */
  collectorNumber?: string;
}

const styles = `
  .tcg-stage {
    /* perspective: deeper number = subtler 3D, shallower = more dramatic */
    perspective: 1600px;
    width: min(420px, 90vw);
    aspect-ratio: 5 / 7;
    cursor: pointer;
    position: relative;
    /* Mobile UX: no native double-tap zoom on the card; no blue/grey tap
       highlight flashing on flip; touch tilt doesn't trigger pull-to-refresh. */
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    /* Ambient floating idle. Uses the standalone translate + rotate
       properties so they compose with the perspective transform AND the
       JS-driven tilt on the inner .tcg-tilt layer without overriding
       either. */
    animation: tcg-float 5.5s ease-in-out infinite;
  }

  @keyframes tcg-float {
    0%   { translate: 0 0px;   rotate: -0.7deg; }
    50%  { translate: 0 -10px; rotate: 0.7deg; }
    100% { translate: 0 0px;   rotate: -0.7deg; }
  }

  @media (prefers-reduced-motion: reduce) {
    .tcg-stage { animation: none; }
  }

  .tcg-stage:focus-visible {
    outline: none;
  }
  .tcg-stage:focus-visible .tcg-flip::before {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 22px;
    border: 2px solid #f5d65a;
    pointer-events: none;
    z-index: 50;
  }

  /* OUTER flip layer: animates the 0->180deg flip with a transition.
     INNER tilt layer: tracks the cursor with no transition for responsiveness. */
  .tcg-flip {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    transform: rotateY(var(--flip, 0deg));
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .tcg-stage.flipped .tcg-flip { --flip: 180deg; }

  .tcg-tilt {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
    will-change: transform;
  }

  .tcg-face {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow: hidden;
    box-shadow:
      0 30px 60px -20px rgba(0,0,0,0.6),
      0 18px 36px -18px rgba(0,0,0,0.5),
      0 2px 4px rgba(0,0,0,0.2);
  }

  .tcg-face.back {
    transform: rotateY(180deg);
  }

  /* ====== FRONT ====== */
  /* No metallic frame — the photo runs edge-to-edge so the lettering
     has the whole card width to breathe. */
  .tcg-front {
    background: #1a1a1a;
    padding: 0;
  }

  .tcg-front-inner {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
    background: #1a1a1a;
  }

  .tcg-photo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .tcg-photo-vignette {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%);
    pointer-events: none;
  }

  /* Vertical name running up the left edge — sideways-lr does the
     "vertical sign" layout entirely via writing-mode (no rotate
     transform), so the lettering stays in the same paint layer as
     the front face. backface-visibility is hidden as defense-in-depth
     against iOS flip-bleed; the opacity snap at 50% of the flip
     duration is the *actual* fix — iOS Safari sometimes keeps the
     front content rendered for a frame past 90° rotation, so we
     instantly hide it at the moment the back becomes visible. */
  .tcg-name-vertical {
    position: absolute;
    left: 26px;
    top: 22px;
    bottom: 22px;
    width: 84px;
    writing-mode: sideways-lr;
    font-family: 'Bebas Neue', 'Inter', system-ui, sans-serif;
    font-size: clamp(72px, 17vw, 124px);
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: 0.9;
    color: #ffffff;
    text-shadow:
      0 0 1px rgba(0, 0, 0, 0.5),
      0 2px 6px rgba(0, 0, 0, 0.55),
      0 4px 14px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    opacity: 1;
    /* Instant opacity flip at 50% of the 600ms card flip — no fade. */
    transition: opacity 0s linear 0.3s;
  }
  .tcg-stage.flipped .tcg-name-vertical { opacity: 0; }

  /* ====== HOLO FOIL ====== */
  .tcg-foil {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
  }

  /* SURGE FOIL — the whole card surface gets a holographic shimmer that
     tracks the cursor, mimicking MTG raised/surge foil treatment.

     Three stacked layers all blend onto the card content:
       1) .tcg-foil-rainbow  : a wide cursor-tracked rainbow band
       2) .tcg-foil-pattern  : a diagonal repeating-line "scratch" texture
                               (the literal raised-foil micro-pattern)
       3) .tcg-foil-glare    : a soft white spotlight catching the highlight

     Lower opacity per-layer + soft-light blend keeps the underlying photo
     readable on the front; on the back, the same layers ride on top of the
     navy fill and read as a true foil card sheen. */
  .tcg-foil-rainbow {
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
    background-size: 220% 220%;
    background-position: var(--mouse-x, 50%) var(--mouse-y, 50%);
    mix-blend-mode: soft-light;
    opacity: 0.35;
    transition: opacity 0.3s;
  }

  /* The "scratch" surge-foil micro-pattern. Two thin diagonal repeating
     gradients at slightly different angles cross over each other to make
     the characteristic raised-foil grain. Position shifts subtly with
     the cursor so it catches light. */
  .tcg-foil-pattern {
    background:
      repeating-linear-gradient(
        115deg,
        rgba(255, 255, 255, 0.06) 0px,
        rgba(255, 255, 255, 0.06) 1px,
        transparent 1px,
        transparent 5px
      ),
      repeating-linear-gradient(
        65deg,
        rgba(255, 255, 255, 0.04) 0px,
        rgba(255, 255, 255, 0.04) 1px,
        transparent 1px,
        transparent 6px
      );
    mix-blend-mode: overlay;
    opacity: 0.55;
    background-position: var(--mouse-x, 50%) var(--mouse-y, 50%);
    transition: opacity 0.3s;
  }

  /* Cursor spotlight that catches the foil. Brighter on hover for the
     "tilt the card under a lamp" moment. */
  .tcg-foil-glare {
    background: radial-gradient(
      circle 240px at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255,255,255,0.4) 0%,
      rgba(255,255,255,0.1) 30%,
      rgba(255,255,255,0) 60%
    );
    mix-blend-mode: overlay;
    opacity: 0.6;
    transition: opacity 0.3s;
  }

  .tcg-stage:not(:hover) .tcg-foil-glare   { opacity: 0.2; }
  .tcg-stage:not(:hover) .tcg-foil-rainbow { opacity: 0.2; }
  .tcg-stage:not(:hover) .tcg-foil-pattern { opacity: 0.35; }

  /* Ambient shimmer when reduced motion is preferred (no JS tilt). */
  .tcg-reduced .tcg-foil-rainbow {
    animation: tcg-shimmer 8s ease-in-out infinite;
    background-position: 0% 0%;
  }
  @keyframes tcg-shimmer {
    0%, 100% { background-position: 0% 0%; opacity: 0.35; }
    50%      { background-position: 100% 100%; opacity: 0.55; }
  }

  /* ====== BACK ====== */
  .tcg-back {
    background:
      radial-gradient(ellipse at 30% 0%, #3a4e80 0%, transparent 55%),
      radial-gradient(ellipse at 80% 100%, #0a1430 0%, transparent 60%),
      linear-gradient(160deg, #1e2a4a 0%, #142048 50%, #0a1430 100%);
    color: #f5f1e8;
    padding: 14px 14px 12px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-family: 'Inter', system-ui, sans-serif;
  }

  .tcg-back-grain {
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        45deg,
        rgba(255,255,255,0.04) 0,
        rgba(255,255,255,0.04) 1px,
        transparent 1px,
        transparent 4px
      );
    pointer-events: none;
    mix-blend-mode: overlay;
  }

  /* HEADER row: profile pic + display name */
  .tcg-header {
    display: grid;
    grid-template-columns: 46px 1fr;
    gap: 12px;
    align-items: center;
  }

  .tcg-profile-pic {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #f5d65a;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }

  .tcg-handle-block {
    min-width: 0;
    display: flex;
    align-items: center;
    height: 46px;
  }

  /* No more @handle row — the display name takes the prominent slot */
  .tcg-display-name-large {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.15;
    color: #f5f1e8;
    letter-spacing: -0.2px;
  }
  .tcg-display-name-large svg { flex-shrink: 0; }

  /* Subtitle line */
  .tcg-subtitle {
    background: rgba(245, 214, 90, 0.1);
    border-left: 3px solid #f5d65a;
    padding: 6px 10px;
    font-size: 12px;
    font-weight: 600;
    color: #f5f1e8;
    border-radius: 0 4px 4px 0;
  }

  /* Stats strip */
  .tcg-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 12px;
  }
  .tcg-stat {
    font-size: 10.5px;
    line-height: 1.3;
    color: #c4c8d4;
  }
  .tcg-stat.wide { grid-column: 1 / -1; }
  .tcg-stat-label {
    font-weight: 800;
    letter-spacing: 0.02em;
    color: #f5d65a;
  }
  .tcg-stat-value {
    font-weight: 500;
  }

  /* Bio */
  .tcg-bio {
    font-size: 9.5px;
    line-height: 1.4;
    color: #c4c8d4;
    font-weight: 400;
  }

  /* Big metrics */
  .tcg-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    margin-top: 2px;
  }
  .tcg-metric {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .tcg-metric-value {
    font-size: 24px;
    font-weight: 800;
    line-height: 0.95;
    color: #f5f1e8;
    letter-spacing: -0.02em;
  }
  .tcg-metric-label {
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: #f5d65a;
    margin-top: 2px;
    text-transform: uppercase;
    line-height: 1.2;
  }

  /* Projects row — clickable pill containing logo + name + URL */
  .tcg-project {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    background: rgba(245, 214, 90, 0.08);
    border: 1px solid rgba(245, 214, 90, 0.3);
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: background 0.2s, border-color 0.2s;
    cursor: pointer;
    margin-bottom: 2px;
  }
  .tcg-project:hover {
    background: rgba(245, 214, 90, 0.15);
    border-color: rgba(245, 214, 90, 0.6);
  }
  .tcg-project-logo {
    width: 28px;
    height: 28px;
    object-fit: contain;
    flex-shrink: 0;
  }
  .tcg-project-meta {
    flex: 1;
    min-width: 0;
    line-height: 1.15;
  }
  .tcg-project-name {
    font-size: 13px;
    font-weight: 700;
    color: #f5f1e8;
  }
  .tcg-project-url {
    font-size: 10.5px;
    font-weight: 500;
    color: #f5d65a;
    margin-top: 1px;
  }
  .tcg-project-arrow {
    color: #f5d65a;
    font-size: 14px;
    font-weight: 700;
    flex-shrink: 0;
  }

  /* Logos row */
  .tcg-logos-heading {
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #f5d65a;
    text-align: center;
    text-transform: uppercase;
  }
  .tcg-logos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  /* Transparent-PNG logos — show on the navy with no tile / no filter. */
  .tcg-logo {
    height: 26px;
    width: auto;
    max-width: 64px;
    object-fit: contain;
  }
  .tcg-logo-placeholder {
    height: 26px;
    min-width: 42px;
    padding: 0 8px;
    border: 1px dashed rgba(245, 214, 90, 0.4);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 700;
    color: #f5d65a;
    text-transform: uppercase;
  }

  /* Collector flair — rarity stamp top-right, set number bottom-left.
     Absolutely positioned over the back face so they sit in the corner
     padding outside the flex flow. */
  .tcg-rarity {
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: rgba(245, 214, 90, 0.95);
    background: rgba(245, 214, 90, 0.08);
    border: 1px solid rgba(245, 214, 90, 0.4);
    padding: 3px 7px;
    border-radius: 3px;
    text-transform: uppercase;
    pointer-events: none;
    z-index: 4;
    font-family: 'Inter', sans-serif;
  }
  .tcg-collector {
    position: absolute;
    bottom: 3px;
    left: 8px;
    font-size: 7.5px;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: rgba(245, 214, 90, 0.55);
    text-transform: uppercase;
    pointer-events: none;
    z-index: 4;
    font-family: 'Inter', sans-serif;
  }

  /* Contact — centered row of links (email + github). */
  .tcg-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px 14px;
    font-size: 10.5px;
    font-weight: 600;
    color: #f5f1e8;
    border-top: 1px dashed rgba(245, 214, 90, 0.35);
    padding-top: 8px;
    margin-top: auto;
  }
  .tcg-contact a {
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  .tcg-contact a:hover {
    text-decoration: underline;
    color: #f5d65a;
  }
  .tcg-contact-icon {
    color: #f5d65a;
    flex-shrink: 0;
  }

  /* Flip hint */
  .tcg-hint {
    position: absolute;
    bottom: -28px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 11px;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    pointer-events: none;
    font-family: 'Inter', system-ui, sans-serif;
  }

  /* Reduced motion: no flip transition, no tilt, no rainbow chase */
  @media (prefers-reduced-motion: reduce) {
    .tcg-flip { transition: none; }
    .tcg-tilt { transform: none !important; }
    .tcg-foil-glare { display: none; }
  }
`;

export default function TcgCard(props: TcgCardProps) {
  const {
    name,
    photoUrl,
    profilePicUrl,
    displayName,
    subtitle,
    stats,
    bio,
    metrics,
    project,
    logos,
    contact,
    github,
    logosHeading = "Built At",
    rarity,
    collectorNumber,
  } = props;

  const [flipped, setFlipped] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  // Detect reduced motion preference once + react to changes.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => setFlipped((f) => !f), []);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  // Tilt + holo position: convert pointer-in-card to (-0.5..0.5) and write
  // CSS custom props. Tilt is bounded to ±12° for a believable card-feel.
  // When the card is flipped, the back face is rotateY(180°) relative to the
  // visible orientation, which mirrors both the X tilt axis and the X position
  // of the spotlight. We invert sign + position to keep the interaction
  // feeling identical regardless of which face is up.
  const onPointerMove = (e: React.PointerEvent) => {
    if (reduceMotion || !stageRef.current || !tiltRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const sign = flipped ? -1 : 1;
    const tiltX = (0.5 - py) * 24 * sign;
    const tiltY = (px - 0.5) * 24 * sign;
    tiltRef.current.style.setProperty("--tilt-x", `${tiltX}deg`);
    tiltRef.current.style.setProperty("--tilt-y", `${tiltY}deg`);
    const mx = flipped ? 1 - px : px;
    stageRef.current.style.setProperty("--mouse-x", `${mx * 100}%`);
    stageRef.current.style.setProperty("--mouse-y", `${py * 100}%`);
  };

  const onPointerLeave = () => {
    if (!stageRef.current || !tiltRef.current) return;
    tiltRef.current.style.setProperty("--tilt-x", `0deg`);
    tiltRef.current.style.setProperty("--tilt-y", `0deg`);
    stageRef.current.style.setProperty("--mouse-x", `50%`);
    stageRef.current.style.setProperty("--mouse-y", `50%`);
  };

  return (
    <>
      <style>{styles}</style>
      <div
        ref={stageRef}
        className={`tcg-stage ${flipped ? "flipped" : ""} ${reduceMotion ? "tcg-reduced" : ""}`}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`Card for ${displayName}. ${flipped ? "Showing back. " : "Showing front. "}Press Enter to flip.`}
        onClick={toggle}
        onKeyDown={onKey}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <div className="tcg-flip">
          <div className="tcg-tilt" ref={tiltRef}>
            {/* FRONT */}
            <div className="tcg-face tcg-front">
              <div className="tcg-front-inner">
                <img src={photoUrl} alt={`${displayName} portrait`} className="tcg-photo" />
                <div className="tcg-photo-vignette" />
                <div className="tcg-foil tcg-foil-pattern" />
                <div className="tcg-foil tcg-foil-rainbow" />
                <div className="tcg-foil tcg-foil-glare" />
                {/* Name rendered LAST so it paints on top of the foil layers
                    without needing z-index. writing-mode: sideways-lr does
                    the vertical sideways layout in pure CSS without any
                    rotate transform, so there's no separate compositing
                    layer that can bleed through on iOS during the flip. */}
                <div className="tcg-name-vertical">{name}</div>
              </div>
            </div>

            {/* BACK */}
            <div className="tcg-face back tcg-back">
              <div className="tcg-back-grain" />
              {rarity && <div className="tcg-rarity">{rarity}</div>}
              {collectorNumber && <div className="tcg-collector">{collectorNumber}</div>}

              <header className="tcg-header">
                <img src={profilePicUrl} alt="" className="tcg-profile-pic" />
                <div className="tcg-handle-block">
                  <div className="tcg-display-name-large">{displayName}</div>
                </div>
              </header>

              {subtitle && <div className="tcg-subtitle">{subtitle}</div>}

              <div className="tcg-stats">
                {stats.map((s) => (
                  <div key={s.label} className={`tcg-stat ${s.wide ? "wide" : ""}`}>
                    <span className="tcg-stat-label">{s.label.toUpperCase()}: </span>
                    <span className="tcg-stat-value">{s.value}</span>
                  </div>
                ))}
              </div>

              <p className="tcg-bio">{bio}</p>

              <div className="tcg-metrics">
                {metrics.slice(0, 3).map((m, i) => (
                  <div key={i} className="tcg-metric">
                    <div className="tcg-metric-value">{m.value}</div>
                    <div className="tcg-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>

              {project && (
                <>
                  <div className="tcg-logos-heading">Projects</div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tcg-project"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img src={project.logoUrl} alt={project.name} className="tcg-project-logo" />
                    <div className="tcg-project-meta">
                      <div className="tcg-project-name">{project.name}</div>
                      <div className="tcg-project-url">{project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</div>
                    </div>
                    <span className="tcg-project-arrow" aria-hidden>↗</span>
                  </a>
                </>
              )}

              <div className="tcg-logos-heading">{logosHeading}</div>
              <div className="tcg-logos">
                {logos.map((l) =>
                  l.src ? (
                    <img key={l.name} src={l.src} alt={l.name} className="tcg-logo" />
                  ) : (
                    <span key={l.name} className="tcg-logo-placeholder">{l.name}</span>
                  ),
                )}
              </div>

              <div className="tcg-contact">
                <a href={`mailto:${contact}`} onClick={(e) => e.stopPropagation()}>
                  <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden className="tcg-contact-icon">
                    <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  {contact}
                </a>
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden className="tcg-contact-icon">
                      <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    {github.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </a>
                )}
              </div>

              {/* Foil layers on the back too, for a continuous holo feel */}
              <div className="tcg-foil tcg-foil-pattern" />
              <div className="tcg-foil tcg-foil-rainbow" />
              <div className="tcg-foil tcg-foil-glare" />
            </div>
          </div>
        </div>

        <div className="tcg-hint">{flipped ? "Tap to flip back" : "Tap card to flip"}</div>
      </div>
    </>
  );
}
