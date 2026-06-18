import { NavLink } from "react-router-dom";

const links: { to: string; label: string; end?: boolean }[] = [
  { to: "/", label: "Home", end: true },
  { to: "/resume", label: "Resume" },
  // Add future routes here — the pill expands automatically.
];

const styles = `
  .nav-shell {
    position: fixed;
    /* Sits 18px above the iOS home indicator (or screen bottom on non-notch). */
    bottom: calc(18px + env(safe-area-inset-bottom, 0px));
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: 100;
    pointer-events: none;
    font-family: 'Inter', system-ui, sans-serif;
    padding: 0 12px;
  }

  /* Liquid glass pill — heavy blur + saturation boost picks up the
     background colors and smears them, white inset highlights at the
     top edge fake the refractive lip of a glass surface. */
  .nav-pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    padding: 5px;
    box-shadow:
      /* depth shadows below the pill */
      0 12px 36px rgba(0, 0, 0, 0.45),
      0 2px 8px rgba(0, 0, 0, 0.3),
      /* refractive top edge */
      inset 0 1px 0 rgba(255, 255, 255, 0.22),
      /* darker bottom edge for the rounded "glass" look */
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    pointer-events: auto;
  }

  .nav-link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.02em;
    padding: 9px 20px;
    border-radius: 999px;
    line-height: 1;
    transition: color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
    white-space: nowrap;
    position: relative;
    -webkit-tap-highlight-color: transparent;
  }

  .nav-link:hover {
    color: rgba(255, 255, 255, 0.95);
    background: rgba(255, 255, 255, 0.04);
  }

  /* Active = a brighter glass droplet sitting on top of the base pill.
     Radial highlight on the top simulates light catching the curved
     surface; layered insets give it depth without any saturated color. */
  .nav-link.active {
    color: rgba(255, 255, 255, 1);
    background:
      radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.22) 0%, transparent 65%),
      rgba(255, 255, 255, 0.12);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.12),
      0 2px 8px rgba(0, 0, 0, 0.2);
  }
  .nav-link.active:hover {
    background:
      radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.28) 0%, transparent 65%),
      rgba(255, 255, 255, 0.16);
  }

  /* Mobile keeps the same touch target size (~38px) — only the side
     padding tightens so a 3+ link bar can fit on small phones. */
  @media (max-width: 420px) {
    .nav-link { padding: 10px 16px; font-size: 12.5px; }
    .nav-shell { bottom: calc(12px + env(safe-area-inset-bottom, 0px)); }
  }
`;

export default function NavBar() {
  return (
    <>
      <style>{styles}</style>
      <nav className="nav-shell" aria-label="Primary">
        <div className="nav-pill">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
