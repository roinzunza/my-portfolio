import { useEffect } from "react";
import PortfolioShell from "../components/PortfolioShell";

const styles = `
  :root { color-scheme: light; }
  .portfolio-page {
    --neu-bg: #e4e9f0; --neu-light: rgba(255,255,255,.9); --neu-dark: rgba(163,177,198,.62);
    --neu-text: #2b3443; --neu-soft: #4c5667; --neu-muted: #5f6a7b; --neu-accent: #4f63d8;
    --raise-lg: 14px 14px 30px var(--neu-dark), -14px -14px 30px var(--neu-light);
    --raise: 7px 7px 14px var(--neu-dark), -7px -7px 14px var(--neu-light);
    --raise-sm: 4px 4px 8px var(--neu-dark), -4px -4px 8px var(--neu-light);
    --inset: inset 5px 5px 10px var(--neu-dark), inset -5px -5px 10px var(--neu-light);
    --inset-sm: inset 3px 3px 6px var(--neu-dark), inset -3px -3px 6px var(--neu-light);
    min-height: 100svh; display: grid; place-items: center; padding: 40px; background: var(--neu-bg); color: var(--neu-text); font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, sans-serif;
  }
  html, body, #root { background: #e4e9f0; }
  .portfolio-page * { box-sizing: border-box; }
  .portfolio-card { width: min(1050px, 72vw); height: min(640px, 80vh); min-height: 540px; display: grid; grid-template-columns: 40% 60%; gap: 0; overflow: hidden; border-radius: 36px; background: var(--neu-bg); box-shadow: var(--raise-lg); position: relative; }
  .app-sidebar { min-width: 0; display: flex; flex-direction: column; background: var(--neu-bg); position: relative; z-index: 1; }
  .app-sidebar::after { content: ""; position: absolute; top: 28px; bottom: 28px; right: 0; width: 2px; border-radius: 2px; background: var(--neu-bg); box-shadow: inset 1px 0 1px var(--neu-dark), inset -1px 0 1px var(--neu-light); }
  .profile-header { position: relative; display: grid; grid-template-columns: 48px 1fr; gap: 14px; align-items: center; margin: 26px 24px 20px; padding: 16px; border-radius: 22px; background: var(--neu-bg); box-shadow: var(--raise); transition: box-shadow 220ms ease, transform 220ms ease; }
  .profile-header:hover { box-shadow: var(--raise-sm); transform: translateY(1px); }
  .profile-header img { width: 48px; height: 48px; object-fit: cover; object-position: 50% 30%; border-radius: 50%; border: 3px solid var(--neu-bg); box-shadow: var(--raise-sm); }
  .profile-header h1 { margin: 0 0 3px; font-size: 17px; line-height: 1.2; letter-spacing: -.015em; font-weight: 680; color: var(--neu-text); }
  .profile-header p, .profile-header small { margin: 0; display: block; color: var(--neu-soft); font-size: 14px; line-height: 1.35; }
  .profile-header small { color: var(--neu-muted); font-size: 13px; }
  .app-tabs { align-self: stretch; height: 50px; display: grid; grid-template-columns: repeat(4, 1fr); align-items: center; gap: 4px; margin: 0 24px 20px; padding: 6px; border-radius: 999px; background: var(--neu-bg); box-shadow: var(--inset); }
  .app-tabs button { height: 38px; border: 0; border-radius: 999px; padding: 0 9px; background: var(--neu-bg); color: var(--neu-muted); font: 600 14px inherit; cursor: pointer; box-shadow: none; transition: color 200ms ease, box-shadow 200ms ease; }
  .app-tabs button:hover { color: var(--neu-text); }
  .app-tabs button.active { color: var(--neu-accent); box-shadow: var(--raise-sm); }
  .sidebar-scroll { min-height: 0; overflow-y: auto; padding: 6px 24px 22px; scrollbar-width: thin; scrollbar-color: #c3cad6 transparent; }
  .app-list { display: flex; flex-direction: column; gap: 12px; }
  .app-row { width: 100%; min-height: 0; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 16px; border: 0; border-radius: 18px; background: var(--neu-bg); color: var(--neu-text); text-align: left; text-decoration: none; cursor: pointer; box-shadow: var(--raise-sm); transition: box-shadow 200ms ease; }
  .app-row:hover { box-shadow: var(--raise); }
  .app-row:active, .app-row.selected { box-shadow: var(--inset-sm); }
  .row-copy { min-width: 0; display: block; }
  .row-copy strong { display: block; margin-bottom: 5px; font-size: 15px; font-weight: 650; }
  .app-row.selected .row-copy strong { color: var(--neu-accent); }
  .row-copy small { display: -webkit-box; overflow: hidden; color: var(--neu-muted); font-size: 13px; line-height: 1.35; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
  .row-date, .row-arrow, .app-row > span:last-child { flex: none; color: var(--neu-muted); font-size: 12px; line-height: 1.4; transition: transform 170ms ease, color 170ms ease; }
  .row-arrow { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; box-shadow: var(--inset-sm); }
  .app-row:hover .row-arrow { color: var(--neu-accent); }
  .contact-list .app-row { align-items: center; }
  .app-row.unavailable { cursor: default; opacity: .55; box-shadow: none; }
  .sidebar-note { margin: 4px 0; padding: 18px; border-radius: 18px; box-shadow: var(--inset-sm); }
  .sidebar-note strong { display: block; color: var(--neu-text); font-size: .82rem; font-weight: 650; }
  .sidebar-note p { max-width: 250px; margin: 8px 0 0; color: var(--neu-muted); font-size: .75rem; line-height: 1.55; }
  .app-view { min-width: 0; min-height: 0; overflow-y: auto; padding: 44px 52px; background: var(--neu-bg); position: relative; z-index: 1; scrollbar-width: thin; scrollbar-color: #c3cad6 transparent; animation: view-in 200ms ease both; }
  @keyframes view-in { from { opacity: .6; } }
  .detail-back { display: none; border: 0; padding: 0 14px; margin-bottom: 26px; border-radius: 999px; background: var(--neu-bg); color: var(--neu-soft); font: 600 .78rem inherit; cursor: pointer; box-shadow: var(--raise-sm); }
  .detail-back:active { box-shadow: var(--inset-sm); }
  .detail-header { display: flex; justify-content: space-between; gap: 30px; }
  .detail-kicker { display: inline-block; margin: 0 0 14px; padding: 6px 12px; border-radius: 999px; box-shadow: var(--inset-sm); color: var(--neu-muted); font-size: 12px; letter-spacing: .01em; }
  .detail-header h2, .contact-detail h2 { margin: 0 0 8px; font-size: 2rem; line-height: 1.05; letter-spacing: -.045em; font-weight: 700; color: var(--neu-text); }
  .detail-role { margin: 0; color: var(--neu-soft); font-size: 14px; }
  .detail-intro { max-width: 510px; margin: 26px 0 28px; color: var(--neu-soft); font-size: 16px; line-height: 1.6; }
  .detail-header-link { flex: none; align-self: flex-start; padding: 10px 16px; border-radius: 999px; background: var(--neu-bg); box-shadow: var(--raise-sm); color: var(--neu-accent); font-size: .75rem; font-weight: 650; text-decoration: none; white-space: nowrap; transition: box-shadow 200ms ease; }
  .detail-header-link:hover { box-shadow: var(--raise); }
  .detail-header-link:active { box-shadow: var(--inset-sm); }
  .detail-reel { display: grid; place-items: center; margin: 0 0 30px; padding: 28px 20px; border-radius: 28px; background: radial-gradient(circle at 50% 45%, rgba(79,99,216,.16), transparent 62%), var(--neu-bg); box-shadow: var(--inset); }
  .reel-phone { position: relative; width: min(250px, 62%); aspect-ratio: 9 / 16; padding: 8px; border-radius: 34px; background: var(--neu-bg); box-shadow: var(--raise); }
  .reel-phone video { display: block; width: 100%; height: 100%; object-fit: cover; border-radius: 27px; background: #0a1a4a; }
  .reel-sound { position: absolute; left: 50%; bottom: 20px; transform: translateX(-50%); padding: 7px 13px; border: 0; border-radius: 999px; background: rgba(228,233,240,.88); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); box-shadow: 0 4px 12px rgba(10,20,60,.25); color: var(--neu-text); font: 650 .68rem inherit; white-space: nowrap; cursor: pointer; }
  .reel-sound[aria-pressed="true"] { color: var(--neu-accent); }
  .detail-install { margin: 0 0 30px; }
  .detail-install h3 { margin: 0 0 8px; color: var(--neu-muted); font-size: .7rem; font-weight: 650; text-transform: uppercase; letter-spacing: .09em; }
  .detail-install > p { margin: 0 0 16px; color: var(--neu-soft); font-size: .8rem; line-height: 1.55; }
  .detail-install > div { display: grid; gap: 7px; margin-bottom: 14px; }
  .detail-install span { color: var(--neu-muted); font-size: .72rem; font-weight: 600; }
  .detail-install code { display: flex; align-items: center; gap: 10px; padding: 11px 16px; border-radius: 14px; box-shadow: var(--inset-sm); color: var(--neu-text); font: 600 .8rem ui-monospace, "SF Mono", Menlo, monospace; overflow-x: auto; white-space: nowrap; }
  .detail-install code b { color: var(--neu-accent); font-weight: 700; }
  .detail-media { margin: 0 0 30px; padding: 10px; border-radius: 24px; background: var(--neu-bg); box-shadow: var(--raise); }
  .detail-media img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 16px; }
  .detail-featured { display: grid; gap: 16px; }
  .detail-featured section { min-height: 0; display: grid; grid-template-columns: 34px 1fr; gap: 12px; align-items: start; padding: 18px; border-radius: 20px; background: var(--neu-bg); box-shadow: var(--raise-sm); }
  .detail-featured span { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; box-shadow: var(--inset-sm); color: var(--neu-accent); font-size: .66rem; font-weight: 700; }
  .detail-featured p { margin: 0; color: var(--neu-soft); font-size: 14px; line-height: 1.55; }
  .detail-more, .detail-tech { padding-top: 32px; }
  .detail-more h3, .detail-tech h3 { margin: 0 0 16px; color: var(--neu-muted); font-size: .7rem; font-weight: 650; text-transform: uppercase; letter-spacing: .09em; }
  .detail-more p { margin: 0 0 10px; padding: 14px 16px; border-radius: 16px; box-shadow: var(--inset-sm); color: var(--neu-soft); font-size: .8rem; line-height: 1.55; }
  .detail-tech > div { display: flex; flex-wrap: wrap; gap: 10px; }
  .detail-tech span { padding: 8px 13px; border-radius: 999px; background: var(--neu-bg); box-shadow: var(--raise-sm); color: var(--neu-soft); font-size: .7rem; font-weight: 550; }
  .detail-link, .contact-detail > a { display: inline-flex; align-items: center; margin-top: 30px; padding: 12px 20px; border-radius: 999px; background: var(--neu-bg); box-shadow: var(--raise); color: var(--neu-accent); font-size: .8rem; font-weight: 650; text-decoration: none; transition: box-shadow 200ms ease; }
  .detail-link:hover, .contact-detail > a:hover { box-shadow: var(--raise-sm); }
  .detail-link:active, .contact-detail > a:active { box-shadow: var(--inset-sm); }
  .contact-detail { padding-top: 22%; }
  .contact-detail > p:not(.detail-kicker) { max-width: 440px; color: var(--neu-soft); font-size: 16px; line-height: 1.6; }
  .resume-panel-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 25px; padding: 24px; border-radius: 24px; box-shadow: var(--raise-sm); }
  .resume-panel-head h2 { margin: 0 0 8px; font-size: 1.65rem; letter-spacing: -.04em; color: var(--neu-text); }
  .resume-panel-head p:not(.detail-kicker) { margin: 0; color: var(--neu-soft); font-size: .8rem; }
  .resume-panel-summary { margin: 28px 4px 30px; color: var(--neu-soft); font-size: .85rem; line-height: 1.7; }
  .resume-panel-section { margin-bottom: 18px; padding: 22px 22px 12px; border-radius: 22px; box-shadow: var(--inset-sm); }
  .resume-panel-section > h3 { margin: 0 0 8px; color: var(--neu-muted); font-size: .66rem; font-weight: 650; letter-spacing: .09em; text-transform: uppercase; }
  .resume-line { display: flex; justify-content: space-between; gap: 24px; padding: 12px 0; }
  .resume-line + .resume-line { border-top: 1px solid rgba(163,177,198,.35); }
  .resume-line strong, .resume-line span { display: block; }
  .resume-line strong { margin-bottom: 5px; color: var(--neu-text); font-size: .8rem; font-weight: 650; }
  .resume-line span { color: var(--neu-muted); font-size: .7rem; line-height: 1.45; }
  .resume-line time { flex: none; color: var(--neu-muted); font-size: .66rem; }
  .resume-panel-skills { display: grid; gap: 15px; padding: 6px 0 12px; }
  .resume-panel-skills > div { display: grid; grid-template-columns: 135px 1fr; gap: 20px; }
  .resume-panel-skills strong { color: var(--neu-text); font-size: .7rem; font-weight: 650; }
  .resume-panel-skills span { color: var(--neu-muted); font-size: .7rem; line-height: 1.5; }
  .app-chat { min-height: 100%; display: flex; flex-direction: column; }
  .chat-top { display: flex; justify-content: space-between; align-items: center; padding: 14px 18px; border-radius: 18px; box-shadow: var(--raise-sm); }
  .chat-top strong { font-size: .88rem; color: var(--neu-text); }
  .chat-top time { color: var(--neu-muted); font-size: .7rem; }
  .chat-messages { flex: 1; padding: 32px 0 115px; }
  .chat-message { max-width: 82%; margin-bottom: 26px; }
  .chat-message.user { margin-left: auto; }
  .chat-message span { display: block; margin-bottom: 9px; color: var(--neu-muted); font-size: .66rem; font-weight: 600; }
  .chat-message.user span { text-align: right; }
  .chat-message p { margin: 0; color: var(--neu-soft); font-size: .88rem; line-height: 1.65; white-space: pre-line; }
  .chat-message.assistant > :not(span) { padding: 16px 18px; border-radius: 6px 20px 20px 20px; background: var(--neu-bg); box-shadow: var(--raise-sm); }
  .chat-message.user p { padding: 12px 16px; border-radius: 20px 20px 6px 20px; box-shadow: var(--inset-sm); color: var(--neu-text); }
  .assistant-response { max-width: 470px; }
  .response-head { margin-bottom: 12px; }
  .response-head h3 { margin: 0 0 5px; color: var(--neu-text); font-size: 1rem; font-weight: 680; letter-spacing: -.02em; }
  .response-head p { margin: 0; color: var(--neu-muted); font-size: .7rem; }
  .assistant-response .response-body { max-width: 440px; color: var(--neu-soft); font-size: .84rem; line-height: 1.65; }
  .response-highlights { margin-top: 20px; }
  .response-highlights h4 { margin: 0 0 10px; color: var(--neu-muted); font-size: .63rem; font-weight: 650; letter-spacing: .09em; text-transform: uppercase; }
  .response-highlights ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
  .response-highlights li { position: relative; padding-left: 14px; color: var(--neu-soft); font-size: .75rem; line-height: 1.5; }
  .response-highlights li::before { content: "•"; position: absolute; left: 0; color: var(--neu-accent); }
  .response-tech { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
  .response-tech span { padding: 6px 10px; border-radius: 999px; box-shadow: var(--inset-sm); color: var(--neu-soft); font-size: .63rem; font-weight: 550; }
  .response-link { display: inline-flex; align-items: center; margin-top: 18px; padding: 9px 14px; border-radius: 999px; background: var(--neu-bg); box-shadow: var(--raise-sm); color: var(--neu-accent); font-size: .7rem; font-weight: 650; text-decoration: none; transition: box-shadow 200ms ease; }
  .response-link:hover { box-shadow: var(--raise); }
  .response-link:active { box-shadow: var(--inset-sm); }
  .chat-prompts { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
  .chat-prompts button { border: 0; border-radius: 999px; padding: 9px 14px; background: var(--neu-bg); box-shadow: var(--raise-sm); color: var(--neu-soft); font: 550 .68rem inherit; cursor: pointer; transition: box-shadow 200ms ease, color 200ms ease; }
  .chat-prompts button:hover { color: var(--neu-accent); box-shadow: var(--raise); }
  .chat-prompts button:active { box-shadow: var(--inset-sm); }
  .chat-input { position: sticky; bottom: 0; display: grid; grid-template-columns: 1fr 38px; gap: 10px; align-items: center; padding: 7px 7px 7px 18px; border-radius: 999px; background: var(--neu-bg); box-shadow: var(--inset), 0 -10px 20px var(--neu-bg); }
  .chat-input input { min-width: 0; border: 0; outline: 0; background: transparent; color: var(--neu-text); font: .82rem inherit; }
  .chat-input input::placeholder { color: var(--neu-muted); }
  .chat-input button { width: 38px; height: 38px; border: 0; border-radius: 50%; background: var(--neu-bg); box-shadow: var(--raise-sm); color: var(--neu-accent); font-size: 1rem; font-weight: 700; cursor: pointer; transition: box-shadow 200ms ease; }
  .chat-input button:active { box-shadow: var(--inset-sm); }
  .chat-input button:disabled { opacity: .45; cursor: default; box-shadow: none; }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
  .portfolio-card button:focus-visible, .portfolio-card a:focus-visible, .portfolio-card input:focus-visible { outline: 2px solid var(--neu-accent); outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) { .app-view { animation: none; } .portfolio-page *, .portfolio-page *::before { transition: none !important; } * { scroll-behavior: auto !important; } }
  @media (min-width: 901px) and (max-width: 1200px) {
    .portfolio-card { width: 100%; grid-template-columns: 38% 62%; }
    .app-view { padding: 36px 32px; }
  }
  @media (max-width: 900px) {
    .portfolio-page { display: block; padding: 0; }
    .portfolio-card { width: 100%; height: 100svh; height: 100dvh; min-height: 0; display: flex; flex-direction: column; border-radius: 0; box-shadow: none; overflow: hidden; }
    .app-sidebar { flex: none; padding-top: env(safe-area-inset-top); }
    .app-sidebar::after { display: none; }
    .profile-header { margin: 18px 16px 16px; }
    .profile-header > div { min-width: 0; }
    .app-tabs { height: auto; flex-shrink: 0; margin: 0 16px 16px; }
    .app-tabs button { min-width: 0; min-height: 44px; height: auto; padding: 8px 4px; font-size: 14px; }
    .app-sidebar.mobile-away .sidebar-scroll { display: none; }
    .sidebar-scroll { padding: 6px 16px 18px; }
    .app-view { display: none; flex: 1; padding: 20px max(20px, env(safe-area-inset-right)) max(24px, env(safe-area-inset-bottom)) max(20px, env(safe-area-inset-left)); overflow-wrap: anywhere; }
    .app-view.mobile-current { display: block; }
    .detail-back { display: inline-flex; align-items: center; min-height: 44px; margin: 0 0 20px; font-size: 14px; }
    .detail-header { gap: 16px; flex-direction: column; }
    .detail-featured section { min-height: auto; }
    .detail-reel { padding: 22px 16px; }
    .reel-phone { width: min(240px, 72%); }
    .contact-detail { padding-top: 0; }
    .mobile-contact-links { margin-top: 28px; }
    .resume-panel-head { flex-direction: column; gap: 16px; padding: 20px; }
    .resume-panel-section { padding: 18px 18px 8px; }
    .resume-line { flex-direction: column; gap: 6px; }
    .resume-line strong { font-size: 14px; }
    .resume-line span, .resume-line time, .resume-panel-skills strong, .resume-panel-skills span { font-size: 13px; }
    .resume-panel-skills > div { grid-template-columns: 1fr; gap: 5px; }
    .app-view.chat-view.mobile-current { display: flex; flex-direction: column; overflow: hidden; }
    .chat-back { flex: none; margin-bottom: 12px; align-self: flex-start; }
    .app-chat { min-height: 0; flex: 1; }
    .chat-top { flex: none; }
    .chat-messages { min-height: 0; overflow-y: auto; padding: 24px 6px 16px; overscroll-behavior: contain; }
    .chat-message { max-width: 94%; overflow-wrap: anywhere; }
    .chat-prompts button { min-height: 44px; font-size: 13px; text-align: left; }
    .chat-input { position: static; flex: none; grid-template-columns: minmax(0, 1fr) 44px; padding: 6px 6px 6px 16px; box-shadow: var(--inset); }
    .chat-input input { font-size: 16px; }
    .chat-input button { width: 44px; height: 44px; }
    .detail-link, .response-link { min-height: 44px; }
  }
  @media (min-width: 901px) { .mobile-contact-links { display: none; } }
  @media (max-width: 900px) and (max-height: 500px) {
    .profile-header { display: none; }
    .app-tabs { margin-top: 10px; }
  }

`;

export default function HomePage() {
  useEffect(() => { document.title = "Rosendo Inzunza — Portfolio"; }, []);
  return <><style>{styles}</style><PortfolioShell /></>;
}
