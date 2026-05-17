import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  FaPlay,
  FaPlus,
  FaCheck,
  FaInfoCircle,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaVolumeMute,
  FaThumbsUp,
} from "react-icons/fa";
import { resumeData } from "../data/resumeData";

const { name, summary, experience, skills, project, education } = resumeData;

const styles = `
  .nf-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #141414;
    color: #fff;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ====================== Hero Billboard ====================== */
  .nf-hero {
    position: relative;
    height: 92vh;
    min-height: 560px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    background:
      radial-gradient(circle at 75% 50%, rgba(229,9,20,0.35) 0%, transparent 50%),
      linear-gradient(90deg, #141414 0%, #1f1f1f 60%, #2a0608 100%);
  }

  .nf-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, transparent 50%, #141414 100%),
      linear-gradient(90deg, #141414 0%, transparent 60%);
    pointer-events: none;
  }

  .nf-hero-photo {
    position: absolute;
    right: 4%;
    bottom: 0;
    height: 85%;
    width: 50%;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    mask-image: linear-gradient(90deg, transparent 0%, #000 25%, #000 100%);
    -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 25%, #000 100%);
    filter: brightness(0.85);
  }

  .nf-hero-content {
    position: relative;
    padding: 0 4% 8%;
    max-width: 700px;
    z-index: 2;
  }

  .nf-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }

  .nf-hero-badge .n-mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: #E50914;
    color: #fff;
    border-radius: 2px;
    font-weight: 900;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
  }

  .nf-hero-title {
    font-size: clamp(40px, 7vw, 88px);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -2px;
    margin: 0 0 20px;
    text-shadow: 0 4px 20px rgba(0,0,0,0.7);
  }

  .nf-hero-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 15px;
    color: #e5e5e5;
    font-weight: 500;
  }

  .nf-tag {
    color: #46d369;
    font-weight: 700;
  }

  .nf-match {
    border: 1px solid #888;
    padding: 1px 6px;
    font-size: 11px;
    color: #ccc;
  }

  .nf-hero-desc {
    font-size: 17px;
    line-height: 1.5;
    color: #e5e5e5;
    margin-bottom: 24px;
    text-shadow: 0 2px 12px rgba(0,0,0,0.6);
  }

  .nf-hero-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .nf-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: none;
    padding: 11px 24px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.15s, background 0.15s;
    text-decoration: none;
    font-family: inherit;
  }

  .nf-btn-play {
    background: #fff;
    color: #000;
  }

  .nf-btn-play:hover { background: rgba(255,255,255,0.75); }

  .nf-btn-info {
    background: rgba(109,109,110,0.7);
    color: #fff;
  }

  .nf-btn-info:hover { background: rgba(109,109,110,0.4); }

  @media (max-width: 720px) {
    .nf-hero-photo { width: 70%; opacity: 0.5; }
    .nf-hero-content { padding-bottom: 14%; }
  }

  /* ====================== Row ====================== */
  .nf-rows {
    margin-top: -120px;
    position: relative;
    z-index: 5;
    padding-bottom: 80px;
  }

  .nf-row {
    margin-bottom: 36px;
    position: relative;
  }

  .nf-row-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0 4%;
    margin-bottom: 12px;
  }

  .nf-row-title {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
  }

  .nf-explore {
    font-size: 13px;
    color: #54b9c5;
    text-decoration: none;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .nf-row:hover .nf-explore { opacity: 1; }

  .nf-row-scroller {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    overflow-y: visible;
    padding: 32px 4%;
    margin: -32px 0;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }

  .nf-row-scroller::-webkit-scrollbar { display: none; }

  /* ====================== Card ====================== */
  .nf-card {
    flex: 0 0 280px;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s, z-index 0s 0.3s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }

  .nf-card:hover {
    transform: scale(1.18);
    z-index: 10;
    box-shadow: 0 16px 48px rgba(0,0,0,0.7);
    transition: transform 0.3s, box-shadow 0.3s, z-index 0s;
  }

  .nf-card-cover {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px;
    font-weight: 900;
    letter-spacing: -1px;
    text-align: center;
    line-height: 1.05;
    padding: 12px 16px;
    word-break: break-word;
    box-sizing: border-box;
    text-transform: uppercase;
  }

  .nf-card-cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 28px;
    box-sizing: border-box;
  }

  .nf-card-rank {
    position: absolute;
    bottom: -12px;
    left: 8px;
    font-size: 120px;
    font-weight: 900;
    color: #141414;
    -webkit-text-stroke: 4px #555;
    line-height: 0.8;
    pointer-events: none;
    font-family: 'Inter', sans-serif;
  }

  .nf-card-label {
    position: absolute;
    inset: auto 0 0 0;
    padding: 12px;
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%);
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }

  .nf-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.95) 100%);
    opacity: 0;
    transition: opacity 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px;
  }

  .nf-card:hover .nf-card-overlay { opacity: 1; }

  .nf-card-title { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
  .nf-card-meta { font-size: 11px; color: #e5e5e5; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-bottom: 6px; }

  .nf-card-actions {
    display: flex;
    gap: 6px;
    margin-top: 4px;
  }

  .nf-icon-btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,0.6);
    background: rgba(20,20,20,0.7);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 11px;
    transition: border-color 0.15s, background 0.15s;
  }

  .nf-icon-btn:hover { border-color: #fff; background: rgba(60,60,60,0.7); }
  .nf-icon-btn.primary { background: #fff; color: #000; border-color: #fff; }
  .nf-icon-btn.primary:hover { background: rgba(255,255,255,0.8); }

  /* Continue Watching card variant (wider) */
  .nf-continue {
    flex: 0 0 420px;
  }

  .nf-progress {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: rgba(255,255,255,0.2);
  }

  .nf-progress-fill {
    height: 100%;
    background: #E50914;
  }

  /* Skill chip cards */
  .nf-skill-card {
    flex: 0 0 240px;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
    padding: 16px;
    background: #232323;
    border: 1px solid #2a2a2a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s, background 0.15s;
  }

  .nf-skill-card:hover { background: #2c2c2c; transform: scale(1.02); }

  .nf-skill-category {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #E50914;
    font-weight: 700;
    margin-bottom: 6px;
  }

  .nf-skill-list {
    font-size: 14px;
    color: #e5e5e5;
    line-height: 1.5;
    overflow: hidden;
  }

  /* Featured (project) row */
  .nf-featured {
    margin: 0 4% 36px;
    background: #1f1f1f;
    border-radius: 6px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 2fr 1fr;
    min-height: 280px;
  }

  .nf-featured-cover {
    background: linear-gradient(135deg, #1DB954 0%, #064E3B 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
    font-weight: 900;
    color: #fff;
    letter-spacing: -2px;
    text-align: center;
    line-height: 1;
    padding: 24px;
    text-transform: uppercase;
    word-break: break-word;
    overflow: hidden;
  }

  .nf-featured-cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 32px;
    box-sizing: border-box;
  }

  .nf-featured-cover::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 60%, #1f1f1f 100%);
  }

  .nf-featured-body {
    padding: 28px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }

  .nf-featured-tag {
    font-size: 12px;
    color: #E50914;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .nf-featured-title { font-size: 32px; font-weight: 900; }
  .nf-featured-meta { font-size: 13px; color: #999; margin-bottom: 8px; }
  .nf-featured-desc { font-size: 14px; color: #e5e5e5; line-height: 1.5; }
  .nf-featured-link {
    color: #E50914;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    margin-top: 8px;
    display: inline-block;
  }
  .nf-featured-link:hover { text-decoration: underline; }

  @media (max-width: 720px) {
    .nf-featured { grid-template-columns: 1fr; }
    .nf-featured-cover { aspect-ratio: 16/9; }
  }

  /* Education card */
  .nf-edu {
    margin: 0 4% 36px;
    padding: 24px;
    background: linear-gradient(135deg, #1f1f1f 0%, #2a0608 100%);
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .nf-edu-badge {
    width: 96px;
    height: 96px;
    background: #E50914;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 900;
    color: #fff;
    flex-shrink: 0;
    text-align: center;
    line-height: 1.1;
    padding: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-sizing: border-box;
  }

  /* Detail Modal */
  .nf-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.8);
    z-index: 200;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 40px 16px;
    overflow-y: auto;
  }

  .nf-modal {
    background: #181818;
    border-radius: 8px;
    max-width: 880px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .nf-modal-hero {
    position: relative;
    aspect-ratio: 16 / 9;
    display: flex;
    align-items: flex-end;
    padding: 24px 32px;
    color: #fff;
  }

  .nf-modal-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 30%, #181818 100%);
    pointer-events: none;
  }

  .nf-modal-content {
    padding: 24px 32px 32px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
  }

  @media (max-width: 720px) {
    .nf-modal-content { grid-template-columns: 1fr; }
  }

  .nf-modal-title-stack { position: relative; z-index: 2; max-width: 70%; }
  .nf-modal-title { font-size: 36px; font-weight: 900; margin: 0 0 12px; }
  .nf-modal-actions { display: flex; gap: 8px; margin-bottom: 8px; }

  .nf-modal-meta-line {
    display: flex;
    gap: 12px;
    font-size: 14px;
    color: #ccc;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .nf-modal-summary {
    font-size: 15px;
    line-height: 1.6;
    color: #e5e5e5;
    margin-bottom: 16px;
  }

  .nf-modal-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .nf-modal-bullets li {
    display: flex;
    gap: 10px;
    font-size: 14px;
    line-height: 1.6;
    color: #d6d6d6;
  }

  .nf-modal-bullets li::before {
    content: '▸';
    color: #E50914;
    flex-shrink: 0;
  }

  .nf-modal-side {
    font-size: 13px;
    color: #999;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .nf-modal-side strong { color: #fff; }

  .nf-modal-close {
    position: absolute;
    top: 12px; right: 12px;
    width: 36px; height: 36px;
    border-radius: 50%;
    background: #181818;
    color: #fff;
    border: 2px solid #181818;
    font-size: 14px;
    cursor: pointer;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nf-modal-close:hover { background: #2c2c2c; }

  /* Footer */
  .nf-footer {
    padding: 48px 4%;
    color: #777;
    font-size: 12px;
    border-top: 1px solid #2a2a2a;
    margin: 0 4%;
  }

  .nf-footer a { color: #777; text-decoration: none; margin-right: 16px; }
  .nf-footer a:hover { text-decoration: underline; }

  /* Scroll arrows */
  .nf-scroll-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 4%;
    height: calc(100% - 12px);
    background: rgba(20,20,20,0.5);
    border: none;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s, background 0.15s;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nf-row:hover .nf-scroll-btn { opacity: 1; }
  .nf-scroll-btn:hover { background: rgba(20,20,20,0.7); }
  .nf-scroll-btn.left { left: 0; border-radius: 0 4px 4px 0; }
  .nf-scroll-btn.right { right: 0; border-radius: 4px 0 0 4px; }
`;

const showGradients = [
  "linear-gradient(135deg, #F97316 0%, #DC2626 100%)",
  "linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)",
  "linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)",
  "linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)",
];

type Show = {
  title: string;
  artist: string;
  initials: string;
  cover: string;
  logo?: string;
  period: string;
  summary?: string;
  bullets: string[];
  match: number;
  tag: string;
  type: "job" | "project";
};

const shows: Show[] = experience.map((job, i) => ({
  title: job.title,
  artist: job.company,
  initials: job.company,
  logo: job.logo,
  cover: job.coverBg ?? showGradients[i % showGradients.length],
  period: job.period,
  summary: job.summary,
  bullets: job.bullets,
  match: 98 - i * 3,
  tag: i === 0 ? "Now Playing" : i === 1 ? "Limited Series" : "Documentary",
  type: "job",
}));

function ScrollRow({ id, title, rank, children }: { id?: string; title: string; rank?: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir === "left" ? -ref.current.clientWidth * 0.8 : ref.current.clientWidth * 0.8 });
  };
  return (
    <div className="nf-row" id={id}>
      <div className="nf-row-header">
        <h2 className="nf-row-title">{title}</h2>
        {rank && <span className="nf-explore">Explore all →</span>}
      </div>
      <button className="nf-scroll-btn left" onClick={() => scroll("left")} aria-label="Scroll left">
        <FaChevronLeft />
      </button>
      <div className="nf-row-scroller" ref={ref}>{children}</div>
      <button className="nf-scroll-btn right" onClick={() => scroll("right")} aria-label="Scroll right">
        <FaChevronRight />
      </button>
    </div>
  );
}

function ShowCard({
  show,
  rank,
  wide,
  progress,
  onOpen,
  inList,
  onToggleList,
}: {
  show: Show;
  rank?: number;
  wide?: boolean;
  progress?: number;
  onOpen: () => void;
  inList: boolean;
  onToggleList: (e: React.MouseEvent) => void;
}) {
  return (
    <div
      className={`nf-card ${wide ? "nf-continue" : ""}`}
      style={rank ? { marginLeft: 56, flex: "0 0 240px" } : undefined}
      onClick={onOpen}
    >
      {rank && <span className="nf-card-rank">{rank}</span>}
      <div className="nf-card-cover" style={{ background: show.cover }}>
        {show.logo ? (
          <img src={`${import.meta.env.BASE_URL}${show.logo}`} alt={show.artist} />
        ) : (
          show.initials
        )}
      </div>
      {progress !== undefined && (
        <div className="nf-progress"><div className="nf-progress-fill" style={{ width: `${progress}%` }} /></div>
      )}
      <div className="nf-card-overlay">
        <div className="nf-card-title">{show.title}</div>
        <div className="nf-card-meta">
          <span className="nf-tag">{show.match}% Match</span>
          <span className="nf-match">HD</span>
          <span>{show.period}</span>
        </div>
        <div className="nf-card-actions">
          <button className="nf-icon-btn primary" onClick={(e) => { e.stopPropagation(); onOpen(); }} aria-label="Play">
            <FaPlay size={10} />
          </button>
          <button className="nf-icon-btn" onClick={onToggleList} aria-label="Add to list">
            {inList ? <FaCheck size={10} /> : <FaPlus size={10} />}
          </button>
          <button className="nf-icon-btn" onClick={(e) => e.stopPropagation()} aria-label="Like"><FaThumbsUp size={10} /></button>
          <button className="nf-icon-btn" style={{ marginLeft: "auto" }} onClick={(e) => { e.stopPropagation(); onOpen(); }} aria-label="More info">
            <FaChevronDown size={10} />
          </button>
        </div>
      </div>
    </div>
  );
}

const projectShow: Show = {
  title: project.name,
  artist: name,
  initials: project.name,
  logo: project.logo,
  cover: project.coverBg ?? "linear-gradient(135deg, #1DB954 0%, #064E3B 100%)",
  period: "2025",
  bullets: project.bullets,
  match: 99,
  tag: "Original Film",
  type: "project",
};

export default function NetflixPage() {
  const [open, setOpen] = useState<Show | null>(null);
  const [myList, setMyList] = useState<Set<string>>(new Set());

  useEffect(() => {
    document.title = `${name} | RO+`;
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toggleList = (show: Show) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setMyList((prev) => {
      const next = new Set(prev);
      if (next.has(show.title)) next.delete(show.title);
      else next.add(show.title);
      return next;
    });
  };

  const featured = shows[0]; // Cloudflare as the billboard

  return (
    <>
      <style>{styles}</style>
      <div className="nf-page">

        {/* ============ Hero Billboard ============ */}
        <section className="nf-hero">
          <div
            className="nf-hero-photo"
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}ro.jpg)` }}
          />
          <div className="nf-hero-content">
            <div className="nf-hero-badge">
              <span className="n-mark">N</span> SERIES
            </div>
            <h1 className="nf-hero-title">{name}</h1>
            <div className="nf-hero-meta">
              <span className="nf-tag">98% Match</span>
              <span>2020 – Present</span>
              <span className="nf-match">TV-MA</span>
              <span className="nf-match">HD</span>
              <span>{experience.length} Seasons</span>
            </div>
            <p className="nf-hero-desc">{summary}</p>
            <div className="nf-hero-actions">
              <button className="nf-btn nf-btn-play" onClick={() => setOpen(featured)}>
                <FaPlay /> Play
              </button>
              <button className="nf-btn nf-btn-info" onClick={() => setOpen(featured)}>
                <FaInfoCircle /> More Info
              </button>
            </div>
          </div>
        </section>

        {/* ============ Rows ============ */}
        <div className="nf-rows">

          {/* Continue Watching: current job */}
          <ScrollRow title="Continue Watching">
            <ShowCard
              show={featured}
              wide
              progress={72}
              onOpen={() => setOpen(featured)}
              inList={myList.has(featured.title)}
              onToggleList={toggleList(featured)}
            />
            <ShowCard
              show={projectShow}
              wide
              progress={45}
              onOpen={() => setOpen(projectShow)}
              inList={myList.has(projectShow.title)}
              onToggleList={toggleList(projectShow)}
            />
          </ScrollRow>

          {/* Trending Now: experience (no rank) */}
          <ScrollRow title="Trending Now">
            {shows.map((show) => (
              <ShowCard
                key={`t-${show.title}`}
                show={show}
                onOpen={() => setOpen(show)}
                inList={myList.has(show.title)}
                onToggleList={toggleList(show)}
              />
            ))}
          </ScrollRow>

          {/* Genres: Tech Stack categorized */}
          <ScrollRow title="Browse by Genre">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="nf-skill-card">
                <div>
                  <div className="nf-skill-category">{category}</div>
                  <div className="nf-skill-list">{items.join(" · ")}</div>
                </div>
                <div style={{ fontSize: 11, color: "#666" }}>{items.length} titles</div>
              </div>
            ))}
          </ScrollRow>

          {/* Featured Film */}
          <div className="nf-row-header">
            <h2 className="nf-row-title">RO+ Originals</h2>
          </div>
          <div className="nf-featured">
            <div className="nf-featured-cover" style={project.coverBg ? { background: project.coverBg } : undefined}>
              {project.logo ? (
                <img src={`${import.meta.env.BASE_URL}${project.logo}`} alt={project.name} />
              ) : (
                project.name
              )}
            </div>
            <div className="nf-featured-body">
              <div className="nf-featured-tag">RO+ Original</div>
              <div className="nf-featured-title">{project.name}</div>
              <div className="nf-featured-meta">2025 · {project.role}</div>
              <div className="nf-featured-desc">{project.bullets[0]}</div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="nf-featured-link">
                {project.url.replace("https://", "").replace(/\/$/, "")} ↗
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="nf-row-header">
            <h2 className="nf-row-title">Academy Award Nominees</h2>
          </div>
          <div className="nf-edu">
            <div className="nf-edu-badge">CSUF<br />Computer Science</div>
            <div>
              <div style={{ fontSize: 12, color: "#E50914", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
                Limited Series · 4 Seasons
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{education.degree}</div>
              <div style={{ fontSize: 14, color: "#999" }}>{education.school}</div>
            </div>
          </div>

          {/* Footer */}
          <div className="nf-footer">
            <div style={{ marginBottom: 16 }}>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/spotify">Spotify Resume</Link>
              <Link to="/projects">Projects</Link>
            </div>
            <div>RO+ is a parody. © {new Date().getFullYear()} {name}.</div>
          </div>
        </div>

        {/* ============ Detail Modal ============ */}
        {open && (
          <div className="nf-modal-backdrop" onClick={() => setOpen(null)}>
            <div className="nf-modal" onClick={(e) => e.stopPropagation()}>
              <button className="nf-modal-close" onClick={() => setOpen(null)} aria-label="Close">✕</button>

              <div className="nf-modal-hero" style={{ background: open.cover }}>
                <div className="nf-modal-title-stack">
                  <h2 className="nf-modal-title">{open.title}</h2>
                  <div className="nf-modal-actions">
                    <button className="nf-btn nf-btn-play"><FaPlay /> Play</button>
                    <button
                      className="nf-icon-btn"
                      style={{ width: 40, height: 40 }}
                      onClick={() => {
                        setMyList((prev) => {
                          const next = new Set(prev);
                          if (next.has(open.title)) next.delete(open.title);
                          else next.add(open.title);
                          return next;
                        });
                      }}
                    >
                      {myList.has(open.title) ? <FaCheck /> : <FaPlus />}
                    </button>
                    <button className="nf-icon-btn" style={{ width: 40, height: 40 }}><FaThumbsUp /></button>
                    <button className="nf-icon-btn" style={{ width: 40, height: 40, marginLeft: "auto" }}><FaVolumeMute /></button>
                  </div>
                </div>
              </div>

              <div className="nf-modal-content">
                <div>
                  <div className="nf-modal-meta-line">
                    <span className="nf-tag">{open.match}% Match</span>
                    <span>{open.period}</span>
                    <span className="nf-match">TV-MA</span>
                    <span className="nf-match">HD</span>
                    <span>{open.bullets.length} Episodes</span>
                  </div>
                  {open.summary && <div className="nf-modal-summary">{open.summary}</div>}
                  <ul className="nf-modal-bullets">
                    {open.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
                <div className="nf-modal-side">
                  <div><strong>Starring:</strong> {open.artist}</div>
                  <div><strong>Genre:</strong> {open.tag}</div>
                  <div><strong>Period:</strong> {open.period}</div>
                  <div style={{ marginTop: 12, color: "#666", fontSize: 11 }}>
                    This series is: <strong style={{ color: "#999" }}>Ambitious, Technical, Inspiring</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
