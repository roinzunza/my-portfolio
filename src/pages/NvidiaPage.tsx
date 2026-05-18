import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaMicrochip,
  FaMemory,
  FaBolt,
  FaServer,
  FaCog,
  FaPlay,
  FaDownload,
  FaTachometerAlt,
  FaThermometerHalf,
  FaCheckCircle,
  FaCircle,
  FaTerminal,
  FaHome,
} from "react-icons/fa";
import { resumeData } from "../data/resumeData";

const { name, email, website, phone, summary, experience, skills, project, education } = resumeData;

const GREEN = "#76B900";
const GREEN_DIM = "#5a8f00";
const PANEL = "#1a1a1a";
const PANEL_2 = "#0f0f0f";
const BORDER = "#2a2a2a";

const styles = `
  .nv-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0a0a0a;
    color: #e5e5e5;
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .nv-page * { box-sizing: border-box; }

  /* ============ Header ============ */
  .nv-header {
    background: #000;
    border-bottom: 1px solid ${BORDER};
    padding: 0 24px;
    height: 56px;
    display: flex;
    align-items: center;
    gap: 32px;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .nv-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #fff;
  }

  .nv-brand-eye {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, ${GREEN} 0%, ${GREEN_DIM} 50%, #1a3300 100%);
    box-shadow: 0 0 12px rgba(118, 185, 0, 0.5);
  }

  .nv-brand-text {
    font-weight: 900;
    font-size: 18px;
    letter-spacing: -0.5px;
    text-transform: uppercase;
  }

  .nv-brand-text span { color: ${GREEN}; }

  .nv-tabs {
    display: flex;
    gap: 4px;
    flex: 1;
  }

  .nv-tab {
    padding: 8px 14px;
    font-size: 13px;
    font-weight: 600;
    color: #b3b3b3;
    background: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
    border-radius: 2px;
    transition: color 0.15s, background 0.15s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .nv-tab:hover { color: #fff; background: rgba(255,255,255,0.05); }
  .nv-tab.active { color: ${GREEN}; border-bottom: 2px solid ${GREEN}; border-radius: 0; }

  .nv-user {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 12px;
    background: ${PANEL};
    border: 1px solid ${BORDER};
    border-radius: 4px;
    font-size: 12px;
    color: #d6d6d6;
  }

  .nv-status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${GREEN};
    box-shadow: 0 0 8px ${GREEN};
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* ============ Container ============ */
  .nv-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 24px;
    width: 100%;
  }

  /* ============ Hero ============ */
  .nv-hero {
    background:
      radial-gradient(ellipse at top right, rgba(118, 185, 0, 0.15) 0%, transparent 60%),
      linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
    border: 1px solid ${BORDER};
    border-radius: 8px;
    padding: 32px;
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 32px;
    position: relative;
    overflow: hidden;
  }

  .nv-hero::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background: ${GREEN};
    box-shadow: 0 0 24px ${GREEN};
  }

  .nv-hero-eyebrow {
    font-size: 11px;
    font-weight: 700;
    color: ${GREEN};
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }

  .nv-hero-title {
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 900;
    letter-spacing: -1px;
    line-height: 1.05;
    color: #fff;
    margin: 0 0 12px;
  }

  .nv-hero-title em {
    font-style: normal;
    color: ${GREEN};
  }

  .nv-hero-sub {
    font-size: 14px;
    line-height: 1.6;
    color: #b3b3b3;
    margin: 0 0 20px;
  }

  .nv-hero-cta {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .nv-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    font-size: 13px;
    font-weight: 700;
    border-radius: 2px;
    cursor: pointer;
    transition: background 0.15s, transform 0.05s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-decoration: none;
    border: none;
  }

  .nv-btn-primary {
    background: ${GREEN};
    color: #000;
  }

  .nv-btn-primary:hover { background: #84d100; }
  .nv-btn-primary:active { transform: translateY(1px); }

  .nv-btn-ghost {
    background: transparent;
    color: #fff;
    border: 1px solid ${BORDER};
  }

  .nv-btn-ghost:hover { border-color: ${GREEN}; color: ${GREEN}; }

  /* Benchmark score */
  .nv-score {
    background: ${PANEL_2};
    border: 1px solid ${BORDER};
    border-radius: 6px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .nv-score-label {
    font-size: 11px;
    font-weight: 700;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }

  .nv-score-value {
    font-size: 64px;
    font-weight: 900;
    color: ${GREEN};
    line-height: 1;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 0 24px rgba(118, 185, 0, 0.4);
  }

  .nv-score-unit {
    font-size: 18px;
    color: #b3b3b3;
    font-weight: 600;
    margin-left: 4px;
  }

  .nv-score-sub {
    font-size: 12px;
    color: #b3b3b3;
    margin-top: 8px;
  }

  .nv-score-bar {
    width: 100%;
    height: 6px;
    background: #2a2a2a;
    border-radius: 3px;
    margin-top: 16px;
    overflow: hidden;
  }

  .nv-score-fill {
    height: 100%;
    width: 94%;
    background: linear-gradient(90deg, ${GREEN_DIM}, ${GREEN});
    border-radius: 3px;
    box-shadow: 0 0 8px ${GREEN};
  }

  /* ============ Stats Grid ============ */
  .nv-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 24px;
  }

  .nv-stat-card {
    background: ${PANEL};
    border: 1px solid ${BORDER};
    border-radius: 6px;
    padding: 16px;
    position: relative;
    overflow: hidden;
  }

  .nv-stat-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: ${GREEN};
    opacity: 0.6;
  }

  .nv-stat-icon {
    color: ${GREEN};
    font-size: 16px;
    margin-bottom: 8px;
  }

  .nv-stat-label {
    font-size: 11px;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }

  .nv-stat-value {
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }

  .nv-stat-unit {
    font-size: 12px;
    color: #b3b3b3;
    font-weight: 600;
    margin-left: 3px;
  }

  /* ============ Section ============ */
  .nv-section {
    margin-bottom: 24px;
  }

  .nv-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .nv-section-title {
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nv-section-title::before {
    content: '';
    width: 3px;
    height: 16px;
    background: ${GREEN};
    border-radius: 1px;
  }

  .nv-section-sub {
    font-size: 12px;
    color: #b3b3b3;
  }

  /* ============ Benchmark Cards ============ */
  .nv-benchmarks {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .nv-bench {
    background: ${PANEL};
    border: 1px solid ${BORDER};
    border-radius: 6px;
    padding: 20px;
    transition: border-color 0.15s, transform 0.15s;
  }

  .nv-bench:hover {
    border-color: ${GREEN};
  }

  .nv-bench-head {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
  }

  .nv-bench-logo {
    width: 56px;
    height: 56px;
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${BORDER};
    overflow: hidden;
  }

  .nv-bench-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 6px;
  }

  .nv-bench-meta {
    flex: 1;
    min-width: 0;
  }

  .nv-bench-title {
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    margin: 0 0 4px;
    line-height: 1.2;
  }

  .nv-bench-company {
    font-size: 13px;
    color: ${GREEN};
    font-weight: 700;
    margin-bottom: 4px;
  }

  .nv-bench-loc {
    font-size: 12px;
    color: #b3b3b3;
  }

  .nv-bench-score {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-shrink: 0;
  }

  .nv-bench-score-num {
    font-size: 28px;
    font-weight: 900;
    color: ${GREEN};
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .nv-bench-score-label {
    font-size: 10px;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 4px;
  }

  .nv-bench-bar {
    height: 4px;
    background: #0a0a0a;
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .nv-bench-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, ${GREEN_DIM}, ${GREEN});
    border-radius: 2px;
    transition: width 1s ease-out;
    box-shadow: 0 0 6px ${GREEN};
  }

  .nv-bench-summary {
    font-size: 13px;
    color: #d6d6d6;
    line-height: 1.6;
    padding: 12px;
    background: ${PANEL_2};
    border-left: 2px solid ${GREEN};
    border-radius: 0 4px 4px 0;
    margin-bottom: 12px;
  }

  .nv-bench-bullets {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .nv-bench-bullets li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    color: #b3b3b3;
    line-height: 1.55;
  }

  .nv-bench-bullets li::before {
    content: '▸';
    color: ${GREEN};
    font-size: 12px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* ============ Specs Grid ============ */
  .nv-specs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 12px;
  }

  .nv-spec-card {
    background: ${PANEL};
    border: 1px solid ${BORDER};
    border-radius: 6px;
    padding: 16px;
  }

  .nv-spec-head {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 700;
    color: ${GREEN};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${BORDER};
  }

  .nv-spec-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .nv-spec-chip {
    font-size: 12px;
    color: #fff;
    background: #0a0a0a;
    border: 1px solid ${BORDER};
    padding: 4px 10px;
    border-radius: 2px;
    font-weight: 600;
    transition: border-color 0.15s, color 0.15s;
  }

  .nv-spec-chip:hover {
    border-color: ${GREEN};
    color: ${GREEN};
  }

  /* ============ Process / Project ============ */
  .nv-process {
    background: ${PANEL};
    border: 1px solid ${BORDER};
    border-radius: 6px;
    padding: 24px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 20px;
    align-items: center;
  }

  .nv-proc-logo {
    width: 80px;
    height: 80px;
    border-radius: 6px;
    border: 1px solid ${BORDER};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .nv-proc-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 8px;
  }

  .nv-proc-info {
    min-width: 0;
  }

  .nv-proc-title {
    font-size: 20px;
    font-weight: 900;
    color: #fff;
    margin: 0 0 4px;
  }

  .nv-proc-role {
    font-size: 13px;
    color: ${GREEN};
    font-weight: 700;
    margin-bottom: 4px;
  }

  .nv-proc-tech {
    font-size: 12px;
    color: #b3b3b3;
    margin-bottom: 12px;
  }

  .nv-proc-bullets {
    display: flex;
    flex-direction: column;
    gap: 6px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nv-proc-bullets li {
    display: flex;
    gap: 10px;
    font-size: 13px;
    color: #b3b3b3;
    line-height: 1.55;
  }

  .nv-proc-bullets li::before {
    content: '▸';
    color: ${GREEN};
    flex-shrink: 0;
  }

  .nv-proc-gauge {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .nv-gauge {
    width: 96px;
    height: 96px;
    position: relative;
  }

  .nv-gauge svg {
    transform: rotate(-90deg);
    width: 100%;
    height: 100%;
  }

  .nv-gauge-bg { stroke: ${BORDER}; }
  .nv-gauge-fg { stroke: ${GREEN}; filter: drop-shadow(0 0 4px ${GREEN}); }

  .nv-gauge-text {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    color: #fff;
  }

  .nv-gauge-num {
    font-size: 22px;
    line-height: 1;
    color: ${GREEN};
    font-variant-numeric: tabular-nums;
  }

  .nv-gauge-unit {
    font-size: 10px;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 2px;
  }

  /* ============ System Info ============ */
  .nv-sysinfo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .nv-info-card {
    background: ${PANEL};
    border: 1px solid ${BORDER};
    border-radius: 6px;
    padding: 16px;
  }

  .nv-info-row {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid ${BORDER};
    font-size: 13px;
  }

  .nv-info-row:last-child { border-bottom: none; }
  .nv-info-row .lbl { color: #b3b3b3; }
  .nv-info-row .val { color: #fff; font-weight: 600; }

  .nv-info-row .val a { color: ${GREEN}; text-decoration: none; }
  .nv-info-row .val a:hover { text-decoration: underline; }

  /* ============ Footer ============ */
  .nv-footer {
    text-align: center;
    padding: 24px;
    font-size: 11px;
    color: #5a5a5a;
    border-top: 1px solid ${BORDER};
    margin-top: 24px;
  }

  /* ============ Mobile ============ */
  @media (max-width: 900px) {
    .nv-hero { grid-template-columns: minmax(0, 1fr); gap: 20px; padding: 24px; }
    .nv-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .nv-sysinfo { grid-template-columns: minmax(0, 1fr); }
    .nv-tabs { display: none; }
    .nv-process {
      grid-template-columns: minmax(0, 1fr);
      text-align: left;
      gap: 16px;
    }
    .nv-proc-logo { width: 64px; height: 64px; }
    .nv-proc-gauge { flex-direction: row; align-self: flex-start; gap: 12px; flex-wrap: wrap; }
  }

  @media (max-width: 600px) {
    .nv-container { padding: 12px; }
    .nv-header { padding: 0 12px; gap: 12px; height: 52px; }
    .nv-user { display: none; }
    .nv-brand-text { font-size: 15px; }
    .nv-hero { padding: 20px; }
    .nv-hero-sub { font-size: 13px; }
    .nv-score { padding: 16px; }
    .nv-score-value { font-size: 44px; }
    .nv-score-unit { font-size: 14px; }
    .nv-section-header { flex-direction: column; align-items: flex-start; gap: 4px; }
    .nv-section-sub { font-size: 11px; }
    .nv-bench { padding: 14px; }
    .nv-bench-head { gap: 10px; flex-wrap: wrap; }
    .nv-bench-logo { width: 44px; height: 44px; }
    .nv-bench-meta { flex-basis: calc(100% - 54px); }
    .nv-bench-score { flex-direction: row; align-items: baseline; gap: 6px; margin-top: 2px; }
    .nv-bench-score-num { font-size: 20px; }
    .nv-bench-score-label { margin-top: 0; }
    .nv-bench-title { font-size: 14px; }
    .nv-bench-summary { font-size: 12px; padding: 10px; }
    .nv-bench-bullets li { font-size: 12px; }
    .nv-stat-card { padding: 12px; }
    .nv-stat-value { font-size: 16px; }
    .nv-stat-label { font-size: 10px; }
    .nv-spec-card { padding: 12px; }
    .nv-process { padding: 16px; }
    .nv-proc-title { font-size: 18px; }
    .nv-proc-bullets li { font-size: 12px; }
    .nv-gauge { width: 80px; height: 80px; }
    .nv-gauge-num { font-size: 18px; }
    .nv-info-row { font-size: 12px; flex-wrap: wrap; gap: 4px; }
    .nv-info-row .val { word-break: break-all; }
    .nv-footer { font-size: 10px; padding: 16px 12px; }
  }
`;

// Recency weight: jobs are ordered most-recent first, so newer gets more weight
const RECENCY_WEIGHTS = [1.6, 1.3, 1.0, 0.9];

function computeJobScore(bulletCount: number, idx: number) {
  const recency = RECENCY_WEIGHTS[idx] ?? 0.8;
  return Math.round(bulletCount * 600 * recency);
}

const jobScores = experience.map((job, i) => computeJobScore(job.bullets.length, i));
const maxJobScore = Math.max(...jobScores, 1);
const skillCount = Object.values(skills).flat().length;
const totalScore =
  jobScores.reduce((a, b) => a + b, 0) +
  skillCount * 30 +
  project.bullets.length * 150;

function CircularGauge({ value, label }: { value: number; label: string }) {
  const r = 40;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="nv-gauge">
      <svg viewBox="0 0 96 96">
        <circle cx="48" cy="48" r={r} fill="none" strokeWidth="8" className="nv-gauge-bg" />
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          strokeWidth="8"
          className="nv-gauge-fg"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="nv-gauge-text">
        <span className="nv-gauge-num">{value}%</span>
        <span className="nv-gauge-unit">{label}</span>
      </div>
    </div>
  );
}

export default function NvidiaPage() {
  const [gaugeValue, setGaugeValue] = useState(0);
  const totalSkills = Object.values(skills).flat().length;
  const yearsExp = 6;

  useEffect(() => {
    document.title = `${name} | RTX Engineering Edition`;
    const t = setTimeout(() => setGaugeValue(87), 300);
    return () => clearTimeout(t);
  }, []);

  const skillIcons: Record<string, React.ReactNode> = {
    Languages: <FaTerminal />,
    "Frameworks / Libraries": <FaCog />,
    Infrastructure: <FaServer />,
    Observability: <FaTachometerAlt />,
    "Machine Learning": <FaMicrochip />,
    Tools: <FaBolt />,
  };

  return (
    <>
      <style>{styles}</style>
      <div className="nv-page">
        {/* ============ Header ============ */}
        <header className="nv-header">
          <Link to="/" className="nv-brand">
            <div className="nv-brand-eye" />
            <div className="nv-brand-text">
              <span>RTX</span> ENGINE
            </div>
          </Link>
          <nav className="nv-tabs">
            <a className="nv-tab active" href="#dashboard">Dashboard</a>
            <a className="nv-tab" href="#performance">Performance</a>
            <a className="nv-tab" href="#specs">Specifications</a>
            <a className="nv-tab" href="#workload">Workload</a>
            <a className="nv-tab" href="#system">System</a>
          </nav>
          <div className="nv-user">
            <span className="nv-status-dot" />
            ONLINE · {name.split(" ")[0].toUpperCase()}
          </div>
        </header>

        <div className="nv-container">
          {/* ============ Hero ============ */}
          <section className="nv-hero" id="dashboard">
            <div>
              <div className="nv-hero-eyebrow">RTX RO · Engineering Edition</div>
              <h1 className="nv-hero-title">
                {name.split(" ")[0]} <em>{name.split(" ")[1]}</em>
              </h1>
              <p className="nv-hero-sub">{summary}</p>
              <div className="nv-hero-cta">
                <a href={`mailto:${email}`} className="nv-btn nv-btn-primary">
                  <FaPlay /> Launch Contact
                </a>
                <Link to="/resume" className="nv-btn nv-btn-ghost">
                  <FaDownload /> Download Resume
                </Link>
              </div>
            </div>
            <div className="nv-score">
              <div className="nv-score-label">Benchmark Score</div>
              <div>
                <span className="nv-score-value">{totalScore.toLocaleString()}</span>
                <span className="nv-score-unit">pts</span>
              </div>
              <div className="nv-score-sub">
                {jobScores.length} deployments · {skillCount} compute cores
              </div>
              <div className="nv-score-bar"><div className="nv-score-fill" /></div>
            </div>
          </section>

          {/* ============ Stats ============ */}
          <section className="nv-stats">
            <div className="nv-stat-card">
              <div className="nv-stat-icon"><FaMicrochip /></div>
              <div className="nv-stat-label">Compute Cores</div>
              <div className="nv-stat-value">{totalSkills}<span className="nv-stat-unit">tech</span></div>
            </div>
            <div className="nv-stat-card">
              <div className="nv-stat-icon"><FaMemory /></div>
              <div className="nv-stat-label">Years Active</div>
              <div className="nv-stat-value">{yearsExp}<span className="nv-stat-unit">yrs</span></div>
            </div>
            <div className="nv-stat-card">
              <div className="nv-stat-icon"><FaServer /></div>
              <div className="nv-stat-label">Deployments</div>
              <div className="nv-stat-value">{experience.length + 1}<span className="nv-stat-unit">prod</span></div>
            </div>
            <div className="nv-stat-card">
              <div className="nv-stat-icon"><FaThermometerHalf /></div>
              <div className="nv-stat-label">Thermals</div>
              <div className="nv-stat-value" style={{ color: GREEN }}>NOMINAL</div>
            </div>
          </section>

          {/* ============ Benchmarks ============ */}
          <section className="nv-section" id="performance">
            <div className="nv-section-header">
              <h2 className="nv-section-title">Performance Benchmarks</h2>
              <span className="nv-section-sub">Per-deployment results · synthetic + real-world</span>
            </div>
            <div className="nv-benchmarks">
              {experience.map((job, i) => (
                <div key={job.company} className="nv-bench">
                  <div className="nv-bench-head">
                    <div className="nv-bench-logo" style={{ background: job.coverBg }}>
                      {job.logo && (
                        <img src={`${import.meta.env.BASE_URL}${job.logo}`} alt={job.company} />
                      )}
                    </div>
                    <div className="nv-bench-meta">
                      <h3 className="nv-bench-title">{job.title}</h3>
                      <div className="nv-bench-company">{job.company}</div>
                      <div className="nv-bench-loc">{job.location} · {job.period}</div>
                    </div>
                    <div className="nv-bench-score">
                      <div className="nv-bench-score-num">{jobScores[i].toLocaleString()}</div>
                      <div className="nv-bench-score-label">benchmark</div>
                    </div>
                  </div>
                  <div className="nv-bench-bar">
                    <div className="nv-bench-bar-fill" style={{ width: `${Math.round((jobScores[i] / maxJobScore) * 100)}%` }} />
                  </div>
                  {job.summary && (
                    <div className="nv-bench-summary">{job.summary}</div>
                  )}
                  <ul className="nv-bench-bullets">
                    {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ============ Specs ============ */}
          <section className="nv-section" id="specs">
            <div className="nv-section-header">
              <h2 className="nv-section-title">System Specifications</h2>
              <span className="nv-section-sub">Driver version: 2026.05</span>
            </div>
            <div className="nv-specs">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="nv-spec-card">
                  <div className="nv-spec-head">
                    {skillIcons[category] ?? <FaCog />} {category}
                  </div>
                  <div className="nv-spec-list">
                    {items.map((s) => (
                      <span key={s} className="nv-spec-chip">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ============ Active Process / Project ============ */}
          <section className="nv-section" id="workload">
            <div className="nv-section-header">
              <h2 className="nv-section-title">
                <FaCircle style={{ color: GREEN, fontSize: 8, marginRight: 4 }} />
                Active Workload
              </h2>
              <span className="nv-section-sub">PID 0x01 · live process</span>
            </div>
            <div className="nv-process">
              <div className="nv-proc-logo" style={{ background: project.coverBg }}>
                {project.logo && (
                  <img src={`${import.meta.env.BASE_URL}${project.logo}`} alt={project.name} />
                )}
              </div>
              <div className="nv-proc-info">
                <h3 className="nv-proc-title">{project.name}</h3>
                <div className="nv-proc-role">{project.role}</div>
                <div className="nv-proc-tech">{project.tech}</div>
                <ul className="nv-proc-bullets">
                  {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nv-btn nv-btn-ghost"
                  style={{ marginTop: 16 }}
                >
                  <FaPlay /> Open Process
                </a>
              </div>
              <div className="nv-proc-gauge">
                <CircularGauge value={gaugeValue} label="Utilization" />
                <CircularGauge value={92} label="Memory" />
              </div>
            </div>
          </section>

          {/* ============ System Info ============ */}
          <section className="nv-section" id="system">
            <div className="nv-section-header">
              <h2 className="nv-section-title">System Information</h2>
            </div>
            <div className="nv-sysinfo">
              <div className="nv-info-card">
                <div className="nv-spec-head"><FaCheckCircle /> Training Data</div>
                <div className="nv-info-row">
                  <span className="lbl">Degree</span>
                  <span className="val">{education.degree}</span>
                </div>
                <div className="nv-info-row">
                  <span className="lbl">Institution</span>
                  <span className="val">{education.school}</span>
                </div>
                <div className="nv-info-row">
                  <span className="lbl">Architecture</span>
                  <span className="val">Computer Science</span>
                </div>
              </div>
              <div className="nv-info-card">
                <div className="nv-spec-head"><FaHome /> Contact Interfaces</div>
                <div className="nv-info-row">
                  <span className="lbl">Email</span>
                  <span className="val"><a href={`mailto:${email}`}>{email}</a></span>
                </div>
                <div className="nv-info-row">
                  <span className="lbl">Website</span>
                  <span className="val"><a href={`https://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></span>
                </div>
                <div className="nv-info-row">
                  <span className="lbl">Phone</span>
                  <span className="val">{phone}</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="nv-footer">
          © {new Date().getFullYear()} {name} · RTX Engineering Edition · Driver build 2026.05
        </footer>
      </div>
    </>
  );
}
