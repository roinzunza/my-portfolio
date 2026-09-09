import { useEffect } from "react";
import PortfolioShell from "../components/PortfolioShell";

const styles = `
  :root { color-scheme: dark; }
  .portfolio-page { min-height: 100svh; display: grid; place-items: center; padding: 28px; background: #111214; color: #f1f1f0; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, sans-serif; }
  .portfolio-page * { box-sizing: border-box; }
  .portfolio-card { width: min(1050px, 72vw); height: min(640px, 80vh); min-height: 540px; display: grid; grid-template-columns: 40% 60%; overflow: hidden; border: 1px solid rgba(255,255,255,.075); border-radius: 32px; background: #252628; box-shadow: 0 28px 70px rgba(0,0,0,.5), inset 0 1px rgba(255,255,255,.045); position: relative; }
  .portfolio-card::after { content: ""; position: absolute; inset: 0; z-index: 3; opacity: .022; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
  .app-sidebar { min-width: 0; display: flex; flex-direction: column; background: #2b2c2e; border-right: 1px solid rgba(255,255,255,.07); position: relative; z-index: 1; }
  .profile-header { position: relative; display: grid; grid-template-columns: 44px 1fr; gap: 12px; align-items: center; margin: 20px 20px 16px; padding: 15px; border: 1px solid rgba(255,255,255,.06); border-radius: 17px; background: #343537; transition: transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease; }
  .profile-header:hover { transform: translateY(-1px); background: #393a3c; border-color: rgba(255,255,255,.1); box-shadow: 0 8px 20px rgba(0,0,0,.14); }
  .profile-header img { width: 42px; height: 42px; object-fit: cover; object-position: 50% 30%; border-radius: 50%; }
  .profile-header h1 { margin: 0 0 3px; font-size: 17px; line-height: 1.2; letter-spacing: -.015em; font-weight: 650; }
  .profile-header p, .profile-header small { margin: 0; display: block; color: #b8b8b8; font-size: 14px; line-height: 1.35; }
  .profile-header small { color: #858585; font-size: 13px; }
  .app-tabs { align-self: stretch; height: 44px; display: grid; grid-template-columns: repeat(4, 1fr); align-items: center; gap: 2px; margin: 0 20px 16px; padding: 4px; border: 1px solid rgba(255,255,255,.05); border-radius: 999px; background: #202123; }
  .app-tabs button { height: 34px; border: 1px solid transparent; border-radius: 999px; padding: 0 9px; background: transparent; color: #8f9094; font: 550 14px inherit; cursor: pointer; transition: color 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease; }
  .app-tabs button:hover { color: #d7d7d9; }
  .app-tabs button.active { border-color: rgba(255,255,255,.06); background: #555659; color: #f3f3f3; box-shadow: inset 0 1px rgba(255,255,255,.08), 0 2px 5px rgba(0,0,0,.12); }
  .sidebar-scroll { min-height: 0; overflow-y: auto; padding: 0 20px 18px; scrollbar-width: thin; scrollbar-color: #4a4b4f transparent; }
  .app-list { display: flex; flex-direction: column; }
  .app-row { width: 100%; min-height: 0; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 13px 14px; border: 0; border-radius: 14px; background: transparent; color: #e8e8e8; text-align: left; text-decoration: none; cursor: pointer; transition: background 170ms ease; }
  .app-row:hover { background: rgba(255,255,255,.045); }
  .app-row.selected { background: #38393b; }
  .row-copy { min-width: 0; display: block; }
  .row-copy strong { display: block; margin-bottom: 5px; font-size: 15px; font-weight: 600; }
  .row-copy small { display: -webkit-box; overflow: hidden; color: #929292; font-size: 13px; line-height: 1.35; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
  .row-date, .row-arrow, .app-row > span:last-child { flex: none; color: #79797c; font-size: 12px; line-height: 1.4; transition: transform 170ms ease, color 170ms ease; }
  .app-row:hover .row-arrow { color: #aaa; transform: translateX(1px); }
  .contact-list .app-row { align-items: center; }
  .app-row.unavailable { cursor: default; opacity: .55; }
  .sidebar-note { margin: 8px 12px; padding: 18px 2px; border-top: 1px solid rgba(255,255,255,.07); }
  .sidebar-note strong { display: block; color: #d1d1d3; font-size: .8rem; font-weight: 600; }
  .sidebar-note p { max-width: 250px; margin: 9px 0 0; color: #77787c; font-size: .7rem; line-height: 1.55; }
  .app-view { min-width: 0; min-height: 0; overflow-y: auto; padding: 44px 52px; background: #232426; position: relative; z-index: 1; scrollbar-width: thin; scrollbar-color: #3f4044 transparent; animation: view-in 180ms ease both; }
  @keyframes view-in { from { opacity: .65; } }
  .detail-back { display: none; border: 0; padding: 0; margin-bottom: 26px; background: transparent; color: #aaa; font: 550 .75rem inherit; cursor: pointer; }
  .detail-header { display: flex; justify-content: space-between; gap: 30px; }
  .detail-kicker { margin: 0 0 11px; color: #858585; font-size: 13px; letter-spacing: .01em; }
  .detail-header h2, .contact-detail h2 { margin: 0 0 8px; font-size: 2rem; line-height: 1.05; letter-spacing: -.045em; font-weight: 630; }
  .detail-role { margin: 0; color: #b8b8b8; font-size: 14px; }
  .detail-intro { max-width: 510px; margin: 28px 0 26px; color: #b8b8b8; font-size: 16px; line-height: 1.55; }
  .detail-featured { display: block; border-top: 1px solid #38393d; background: transparent; }
  .detail-featured section { min-height: 0; display: grid; grid-template-columns: 28px 1fr; gap: 10px; padding: 16px 0; border-bottom: 1px solid #38393d; background: transparent; }
  .detail-featured span { color: #66676b; font-size: .65rem; }
  .detail-featured p { margin: 0; color: #c5c5c7; font-size: 14px; line-height: 1.5; }
  .detail-more, .detail-tech { padding-top: 30px; }
  .detail-more h3, .detail-tech h3 { margin: 0 0 17px; color: #77787c; font-size: .68rem; font-weight: 550; text-transform: uppercase; letter-spacing: .08em; }
  .detail-more p { margin: 0; padding: 13px 0; border-top: 1px solid #343539; color: #9c9ca0; font-size: .78rem; line-height: 1.55; }
  .detail-tech > div { display: flex; flex-wrap: wrap; gap: 7px; }
  .detail-tech span { padding: 7px 10px; border: 1px solid #3b3c40; border-radius: 999px; color: #9d9da1; font-size: .66rem; }
  .detail-link { display: inline-block; margin-top: 28px; color: #d6d6d8; font-size: .75rem; text-underline-offset: 4px; }
  .contact-detail { padding-top: 25%; }
  .contact-detail > p:not(.detail-kicker) { max-width: 440px; color: #b8b8b8; font-size: 16px; line-height: 1.55; }
  .contact-detail > a { display: inline-block; margin-top: 20px; color: #e2e2e3; font-size: .82rem; text-underline-offset: 4px; }
  .resume-panel-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 25px; padding-bottom: 30px; border-bottom: 1px solid #343539; }
  .resume-panel-head h2 { margin: 0 0 8px; font-size: 1.65rem; letter-spacing: -.04em; }
  .resume-panel-head p:not(.detail-kicker) { margin: 0; color: #929397; font-size: .78rem; }
  .resume-panel-summary { margin: 28px 0 36px; color: #b6b6b9; font-size: .83rem; line-height: 1.7; }
  .resume-panel-section { padding: 26px 0; border-top: 1px solid #343539; }
  .resume-panel-section > h3 { margin: 0 0 18px; color: #74757a; font-size: .65rem; font-weight: 560; letter-spacing: .09em; text-transform: uppercase; }
  .resume-line { display: flex; justify-content: space-between; gap: 24px; padding: 12px 0; }
  .resume-line strong, .resume-line span { display: block; }
  .resume-line strong { margin-bottom: 5px; color: #d4d4d6; font-size: .78rem; font-weight: 580; }
  .resume-line span { color: #7e7f84; font-size: .68rem; line-height: 1.45; }
  .resume-line time { flex: none; color: #66676b; font-size: .63rem; }
  .resume-panel-skills { display: grid; gap: 15px; }
  .resume-panel-skills > div { display: grid; grid-template-columns: 135px 1fr; gap: 20px; }
  .resume-panel-skills strong { color: #aaa; font-size: .68rem; font-weight: 560; }
  .resume-panel-skills span { color: #77787d; font-size: .66rem; line-height: 1.5; }
  .app-chat { min-height: 100%; display: flex; flex-direction: column; }
  .chat-top { display: flex; justify-content: space-between; padding-bottom: 19px; border-bottom: 1px solid #343539; }
  .chat-top strong { font-size: .86rem; }
  .chat-top time { color: #727378; font-size: .68rem; }
  .chat-messages { flex: 1; padding: 35px 0 115px; }
  .chat-message { max-width: 82%; margin-bottom: 28px; }
  .chat-message.user { margin-left: auto; }
  .chat-message span { display: block; margin-bottom: 9px; color: #77787c; font-size: .65rem; }
  .chat-message.user span { text-align: right; }
  .chat-message p { margin: 0; color: #c4c4c6; font-size: .88rem; line-height: 1.65; white-space: pre-line; }
  .chat-message.user p { padding: 11px 14px; border-radius: 14px 14px 4px 14px; background: #35363a; color: #e5e5e6; }
  .assistant-response { max-width: 470px; }
  .response-head { margin-bottom: 14px; }
  .response-head h3 { margin: 0 0 5px; color: #efeff0; font-size: 1rem; font-weight: 620; letter-spacing: -.02em; }
  .response-head p { color: #77787d; font-size: .68rem; }
  .assistant-response .response-body { max-width: 440px; color: #c6c6c8; font-size: .82rem; line-height: 1.65; }
  .response-highlights { margin-top: 22px; }
  .response-highlights h4 { margin: 0 0 10px; color: #77787d; font-size: .62rem; font-weight: 560; letter-spacing: .09em; text-transform: uppercase; }
  .response-highlights ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
  .response-highlights li { position: relative; padding-left: 13px; color: #aaaab0; font-size: .73rem; line-height: 1.5; }
  .response-highlights li::before { content: "•"; position: absolute; left: 0; color: #66676c; }
  .response-tech { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 20px; }
  .response-tech span { padding: 5px 8px; border: 1px solid #3a3b3f; border-radius: 999px; color: #8f9095; font-size: .61rem; }
  .response-link { display: inline-flex; align-items: center; margin-top: 18px; padding: 8px 11px; border: 1px solid #46474c; border-radius: 9px; color: #d5d5d7; font-size: .68rem; font-weight: 570; text-decoration: none; transition: color 180ms ease, background 180ms ease, border-color 180ms ease; }
  .response-link:hover { border-color: #5c5d62; background: #2b2c30; color: #fff; }
  .chat-prompts { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 8px; }
  .chat-prompts button { border: 1px solid #3a3b3f; border-radius: 999px; padding: 7px 10px; background: transparent; color: #929398; font: .65rem inherit; cursor: pointer; transition: color 180ms ease, background 180ms ease, border-color 180ms ease; }
  .chat-prompts button:hover { border-color: #505156; background: #292a2d; color: #d0d0d2; }
  .chat-input { position: sticky; bottom: 0; display: grid; grid-template-columns: 1fr 34px; gap: 10px; align-items: center; padding: 8px 8px 8px 17px; border: 1px solid #3c3d42; border-radius: 999px; background: #292a2e; box-shadow: 0 13px 35px rgba(0,0,0,.28); }
  .chat-input input { min-width: 0; border: 0; outline: 0; background: transparent; color: #ededee; font: .8rem inherit; }
  .chat-input input::placeholder { color: #707176; }
  .chat-input button { width: 34px; height: 34px; border: 0; border-radius: 50%; background: #55565b; color: #eee; font-size: 1rem; cursor: pointer; transition: background 180ms ease; }
  .chat-input button:hover { background: #66676c; }
  .chat-input button:disabled { opacity: .4; cursor: default; }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
  .portfolio-card button:focus-visible, .portfolio-card a:focus-visible, .portfolio-card input:focus-visible { outline: 2px solid #d0d0d2; outline-offset: 2px; }
  @media (prefers-reduced-motion: reduce) { .app-view { animation: none; } * { scroll-behavior: auto !important; } }
  @media (max-width: 900px) {
    .portfolio-page { display: block; padding: 0; background: #202124; }
    .portfolio-card { width: 100%; height: 100svh; min-height: 0; grid-template-columns: 1fr; border: 0; border-radius: 0; box-shadow: none; }
    .app-sidebar, .app-view { grid-area: 1 / 1; transition: opacity 180ms ease, transform 180ms ease; }
    .app-sidebar { border-right: 0; }
    .app-sidebar.mobile-away { opacity: 0; pointer-events: none; transform: translateX(-16px); }
    .app-view { padding: 30px 22px; opacity: 0; pointer-events: none; transform: translateX(16px); }
    .app-view.mobile-current { opacity: 1; pointer-events: auto; transform: none; }
    .detail-back { display: block; }
    .app-tabs { margin-bottom: 12px; }
    .app-tabs { max-width: calc(100% - 44px); overflow-x: auto; scrollbar-width: none; }
    .detail-featured { grid-template-columns: 1fr; }
    .detail-featured section { min-height: auto; }
    .chat-back { position: absolute; top: 30px; left: 22px; z-index: 2; }
    .chat-back + .app-chat .chat-top { padding-left: 68px; }
    .resume-panel-head { flex-direction: column; }
    .resume-panel-skills > div { grid-template-columns: 1fr; gap: 5px; }
  }
`;

export default function HomePage() {
  useEffect(() => { document.title = "Rosendo Inzunza — Portfolio"; }, []);
  return <><style>{styles}</style><PortfolioShell /></>;
}
