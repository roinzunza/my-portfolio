import { Link, NavLink, useLocation } from "react-router-dom";

const styles = `
  .site-nav { position: absolute; top: 0; left: 0; right: 0; z-index: 100; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
  .site-nav-inner { width: min(1180px, calc(100% - 48px)); height: 88px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,.09); }
  .site-mark { display: flex; align-items: center; gap: 12px; color: #171713; text-decoration: none; font-size: .92rem; font-weight: 680; letter-spacing: -.02em; }
  .site-mark-icon { display: grid; place-items: center; width: 30px; height: 30px; border: 1px solid #aaa9a1; border-radius: 50%; color: #5368c7; font: 700 .72rem ui-monospace, monospace; }
  .site-links { display: flex; align-items: center; gap: 30px; }
  .site-link { color: #68675f; text-decoration: none; font-size: .82rem; font-weight: 550; transition: color .2s; }
  .site-link:hover, .site-link.active { color: #171713; }
  .site-contact { border: 1px solid #aaa9a1; padding: 10px 14px; border-radius: 999px; color: #171713; }
  .site-nav.on-dark .site-nav-inner { border-bottom-color: rgba(255,255,255,.09); }
  .site-nav.on-dark .site-mark, .site-nav.on-dark .site-link:hover, .site-nav.on-dark .site-link.active { color: #f2f4f7; }
  .site-nav.on-dark .site-mark-icon { border-color: #303641; color: #8c9bff; }
  .site-nav.on-dark .site-link { color: #929aa7; }
  .site-nav.on-dark .site-contact { border-color: #303641; color: #e8eaf0; }
  @media (max-width: 760px) { .site-nav-inner { width: calc(100% - 32px); height: 72px; } .site-links { gap: 17px; } .site-link.hide-mobile { display: none; } .site-contact { padding: 9px 11px; } }
`;

export default function NavBar() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;
  return <><style>{styles}</style><nav className={`site-nav ${pathname === "/" ? "" : "on-dark"}`} aria-label="Primary"><div className="site-nav-inner">
    <Link className="site-mark" to="/"><span className="site-mark-icon">RI</span><span>Rosendo Inzunza</span></Link>
    <div className="site-links">
      <NavLink className="site-link" to="/" end>Work</NavLink>
      <a className="site-link hide-mobile" href="/#about">About</a>
      <NavLink className="site-link hide-mobile" to="/resume">Resume</NavLink>
      <a className="site-link site-contact" href="mailto:RosendoInzunza@gmail.com">Contact</a>
    </div>
  </div></nav></>;
}
