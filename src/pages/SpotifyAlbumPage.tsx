import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaSearch,
  FaHome,
  FaBook,
  FaPlus,
  FaHeart,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaRedo,
  FaVolumeUp,
  FaEllipsisH,
  FaSpotify,
  FaClock,
} from "react-icons/fa";
import { resumeData } from "../data/resumeData";

const { name, experience, project } = resumeData;

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const albumGradients = [
  "linear-gradient(135deg, #F97316 0%, #DC2626 100%)",
  "linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)",
  "linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)",
  "linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)",
];

const heroGradients = [
  "linear-gradient(180deg, #B91C1C 0%, #5b1414 55%, #121212 100%)",
  "linear-gradient(180deg, #1D4ED8 0%, #1e2c5b 55%, #121212 100%)",
  "linear-gradient(180deg, #6D28D9 0%, #2c1d5b 55%, #121212 100%)",
  "linear-gradient(180deg, #BE185D 0%, #5b1f3e 55%, #121212 100%)",
];

const projectCover = "linear-gradient(135deg, #1DB954 0%, #064E3B 100%)";
const projectHero = "linear-gradient(180deg, #1DB954 0%, #0a5d2b 55%, #121212 100%)";

type Album = {
  type: "job" | "project";
  slug: string;
  title: string;
  artist: string;
  initials: string;
  logo?: string;
  period: string;
  description?: string;
  bullets: string[];
  cover: string;
  heroGrad: string;
  externalUrl?: string;
  meta: string;
};

const albums: Album[] = [
  ...experience.map((job, i): Album => ({
    type: "job",
    slug: slugify(job.company),
    title: job.title,
    artist: job.company,
    initials: job.company,
    logo: job.logo,
    period: job.period,
    description: job.summary,
    bullets: job.bullets,
    cover: job.coverBg ?? albumGradients[i % albumGradients.length],
    heroGrad: heroGradients[i % heroGradients.length],
    meta: `${job.location} · ${job.period}`,
  })),
  {
    type: "project",
    slug: slugify(project.name),
    title: project.name,
    artist: name,
    initials: project.name,
    logo: project.logo,
    period: "2025",
    bullets: project.bullets,
    cover: project.coverBg ?? projectCover,
    heroGrad: projectHero,
    externalUrl: project.url,
    meta: `${project.role} · ${project.tech}`,
  },
];

function formatDuration(seed: number) {
  const totalSeconds = 165 + ((seed * 53) % 180);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function totalDuration(bulletCount: number) {
  let total = 0;
  for (let i = 0; i < bulletCount; i++) total += 165 + ((i * 53) % 180);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m} min ${s} sec`;
}

const styles = `
  .sp-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #000;
    color: #fff;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-rows: 1fr 80px;
    grid-template-areas: "sidebar main" "player player";
    gap: 8px;
    padding: 8px;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    .sp-page { grid-template-columns: 1fr; grid-template-areas: "main" "player"; }
    .sp-sidebar { display: none; }
  }

  /* Sidebar */
  .sp-sidebar { grid-area: sidebar; background: #000; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; overflow: hidden; }
  .sp-sidebar-card { background: #121212; border-radius: 8px; padding: 8px 12px; }
  .sp-nav-item { display: flex; align-items: center; gap: 16px; padding: 10px 12px; font-size: 14px; font-weight: 700; color: #b3b3b3; text-decoration: none; border-radius: 4px; transition: color 0.15s; }
  .sp-nav-item:hover { color: #fff; }
  .sp-library-header { display: flex; align-items: center; justify-content: space-between; padding: 8px 12px 4px; color: #b3b3b3; font-size: 14px; font-weight: 700; }
  .sp-library-header:hover { color: #fff; }
  .sp-library-header .sp-icon-btn { background: transparent; border: none; color: #b3b3b3; cursor: pointer; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
  .sp-library-header .sp-icon-btn:hover { color: #fff; background: #1a1a1a; }
  .sp-playlist-item { display: flex; align-items: center; gap: 12px; padding: 8px; border-radius: 6px; cursor: pointer; transition: background 0.15s; text-decoration: none; color: inherit; }
  .sp-playlist-item:hover { background: #1a1a1a; }
  .sp-playlist-item.active { background: #232323; }
  .sp-playlist-cover { width: 48px; height: 48px; border-radius: 4px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 800; color: #fff; text-align: center; line-height: 1.05; padding: 3px; word-break: break-word; text-transform: uppercase; letter-spacing: -0.2px; box-sizing: border-box; overflow: hidden; }
  .sp-playlist-cover img, .sp-album-art img, .sp-player-cover img { width: 100%; height: 100%; object-fit: contain; padding: 4px; box-sizing: border-box; }
  .sp-album-art img { padding: 28px; }
  .sp-playlist-meta { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  .sp-playlist-title { font-size: 14px; color: #fff; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .sp-playlist-title.active { color: #1ED760; }
  .sp-playlist-sub { font-size: 12px; color: #b3b3b3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  /* Main */
  .sp-main { grid-area: main; background: #121212; border-radius: 8px; overflow-y: auto; overflow-x: hidden; position: relative; }
  .sp-main::-webkit-scrollbar { width: 12px; }
  .sp-main::-webkit-scrollbar-thumb { background: #535353; border-radius: 6px; border: 3px solid #121212; }

  .sp-topbar { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; backdrop-filter: blur(8px); }
  .sp-back-btn { display: flex; align-items: center; gap: 6px; background: rgba(0,0,0,0.5); border: none; color: #fff; padding: 8px 14px; border-radius: 20px; text-decoration: none; font-size: 13px; font-weight: 600; transition: background 0.15s; }
  .sp-back-btn:hover { background: rgba(0,0,0,0.8); }

  /* Album Hero */
  .sp-album-hero { position: relative; padding: 88px 32px 32px; margin-top: -64px; display: flex; align-items: flex-end; gap: 24px; min-height: 340px; }
  .sp-album-art { width: 232px; height: 232px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: 900; color: #fff; box-shadow: 0 8px 60px rgba(0,0,0,0.6); border-radius: 4px; letter-spacing: -1.5px; text-align: center; line-height: 1.05; padding: 20px; word-break: break-word; text-transform: uppercase; box-sizing: border-box; }
  .sp-album-meta { display: flex; flex-direction: column; gap: 12px; padding-bottom: 12px; flex: 1; min-width: 0; }
  .sp-album-type { font-size: 12px; font-weight: 700; color: #fff; }
  .sp-album-title { font-size: clamp(40px, 6vw, 72px); font-weight: 900; letter-spacing: -2px; line-height: 1.05; margin: 0; color: #fff; }
  .sp-album-byline { display: flex; align-items: center; gap: 6px; font-size: 14px; color: #fff; flex-wrap: wrap; }
  .sp-album-byline strong { font-weight: 700; }
  .sp-album-byline .dot { color: #b3b3b3; }
  .sp-album-extra { font-size: 14px; color: #b3b3b3; }

  @media (max-width: 600px) {
    .sp-album-hero { flex-direction: column; align-items: flex-start; padding: 88px 20px 20px; }
    .sp-album-art { width: 180px; height: 180px; font-size: 48px; }
  }

  .sp-action-bar { background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, #121212 100%); padding: 24px 32px; display: flex; align-items: center; gap: 24px; }
  .sp-play-btn { width: 56px; height: 56px; border-radius: 50%; background: #1ED760; border: none; color: #000; font-size: 22px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.1s, background 0.15s; box-shadow: 0 8px 16px rgba(0,0,0,0.3); }
  .sp-play-btn:hover { background: #1fdf64; transform: scale(1.05); }
  .sp-icon-btn-lg { background: transparent; border: none; color: #b3b3b3; font-size: 26px; cursor: pointer; transition: color 0.15s; }
  .sp-icon-btn-lg:hover { color: #fff; }
  .sp-heart-btn { background: transparent; border: none; cursor: pointer; font-size: 30px; transition: color 0.15s, transform 0.1s; }
  .sp-heart-btn.liked { color: #1ED760; }
  .sp-heart-btn:not(.liked) { color: #b3b3b3; }
  .sp-heart-btn:hover { transform: scale(1.05); }

  /* Track table */
  .sp-track-table { padding: 0 16px 32px; }
  .sp-track-header { display: grid; grid-template-columns: 32px 1fr 60px; gap: 16px; padding: 4px 16px; border-bottom: 1px solid #2a2a2a; margin-bottom: 8px; font-size: 12px; color: #b3b3b3; text-transform: uppercase; letter-spacing: 1px; align-items: center; }
  .sp-track-header .col-num { text-align: center; }
  .sp-track-header .col-dur { display: flex; justify-content: flex-end; }

  .sp-track-row { display: grid; grid-template-columns: 32px 1fr 60px; gap: 16px; padding: 10px 16px; border-radius: 4px; align-items: center; cursor: pointer; transition: background 0.15s; }
  .sp-track-row:hover { background: rgba(255,255,255,0.08); }
  .sp-track-row:hover .sp-track-num .num { display: none; }
  .sp-track-row:hover .sp-track-num .play { display: inline-flex; }

  .sp-track-num { color: #b3b3b3; font-size: 16px; text-align: center; font-variant-numeric: tabular-nums; position: relative; height: 16px; display: flex; align-items: center; justify-content: center; }
  .sp-track-num .play { display: none; color: #fff; }
  .sp-track-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  .sp-track-title { font-size: 15px; color: #fff; font-weight: 500; line-height: 1.4; }
  .sp-track-sub { font-size: 13px; color: #b3b3b3; }
  .sp-track-dur { font-size: 14px; color: #b3b3b3; text-align: right; font-variant-numeric: tabular-nums; }

  /* About */
  .sp-section { padding: 24px 32px; }
  .sp-section-title { font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 16px; }
  .sp-about { background: #181818; padding: 24px; border-radius: 8px; font-size: 15px; line-height: 1.7; color: #d6d6d6; }

  .sp-external { font-size: 14px; color: #1ED760; text-decoration: none; font-weight: 600; }
  .sp-external:hover { text-decoration: underline; }

  /* Player Bar */
  .sp-player { grid-area: player; background: #000; display: grid; grid-template-columns: 1fr 2fr 1fr; align-items: center; padding: 0 16px; border-top: 1px solid #181818; }
  .sp-player-track { display: flex; align-items: center; gap: 12px; min-width: 0; }
  .sp-player-cover { width: 56px; height: 56px; border-radius: 4px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 9px; text-align: center; line-height: 1.05; padding: 4px; word-break: break-word; text-transform: uppercase; letter-spacing: -0.2px; box-sizing: border-box; }
  .sp-player-meta { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  .sp-player-title { font-size: 14px; color: #fff; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .sp-player-artist { font-size: 12px; color: #b3b3b3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .sp-player-heart { background: transparent; border: none; color: #1ED760; cursor: pointer; font-size: 16px; }
  .sp-player-controls { display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .sp-player-buttons { display: flex; align-items: center; gap: 18px; }
  .sp-player-buttons button { background: transparent; border: none; color: #b3b3b3; cursor: pointer; font-size: 14px; }
  .sp-player-buttons button:hover { color: #fff; }
  .sp-player-play { width: 32px !important; height: 32px; border-radius: 50% !important; background: #fff !important; color: #000 !important; font-size: 13px !important; display: flex; align-items: center; justify-content: center; }
  .sp-progress { display: flex; align-items: center; gap: 8px; width: 100%; max-width: 520px; }
  .sp-progress-time { font-size: 11px; color: #b3b3b3; font-variant-numeric: tabular-nums; min-width: 32px; }
  .sp-progress-bar { flex: 1; height: 4px; background: #4d4d4d; border-radius: 2px; overflow: hidden; }
  .sp-progress-fill { height: 100%; background: #fff; width: 25%; border-radius: 2px; transition: background 0.15s; }
  .sp-progress-bar:hover .sp-progress-fill { background: #1ED760; }
  .sp-player-extras { display: flex; align-items: center; justify-content: flex-end; gap: 14px; }
  .sp-player-extras button { background: transparent; border: none; color: #b3b3b3; cursor: pointer; font-size: 14px; }
  .sp-volume { display: flex; align-items: center; gap: 8px; width: 100px; }
  .sp-volume-bar { flex: 1; height: 4px; background: #4d4d4d; border-radius: 2px; overflow: hidden; }
  .sp-volume-fill { height: 100%; background: #fff; width: 70%; }

  @media (max-width: 768px) {
    .sp-player { grid-template-columns: 1fr auto; padding: 0 12px; gap: 12px; }
    .sp-player-extras, .sp-progress { display: none; }
    .sp-player-controls { flex-direction: row; }
  }

  /* Not found */
  .sp-notfound { padding: 80px 32px; text-align: center; }
  .sp-notfound h1 { font-size: 32px; color: #fff; margin-bottom: 12px; }
  .sp-notfound p { color: #b3b3b3; margin-bottom: 20px; }
`;

export default function SpotifyAlbumPage() {
  const { slug } = useParams<{ slug: string }>();
  const album = albums.find((a) => a.slug === slug);

  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(true);

  useEffect(() => {
    document.title = album ? `${album.title} | ${name}` : "Not Found";
  }, [album]);

  const Sidebar = (
    <aside className="sp-sidebar">
      <div className="sp-sidebar-card">
        <Link to="/" className="sp-nav-item"><FaHome /> Home</Link>
        <div className="sp-nav-item"><FaSearch /> Search</div>
        <Link to="/spotify" className="sp-nav-item"><FaSpotify /> Your Resume</Link>
      </div>

      <div className="sp-sidebar-card" style={{ flex: 1, overflowY: "auto" }}>
        <div className="sp-library-header">
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FaBook /> Your Library
          </span>
          <button className="sp-icon-btn"><FaPlus /></button>
        </div>

        <div style={{ marginTop: 8 }}>
          {albums.map((a) => {
            const active = a.slug === slug;
            return (
              <Link
                key={a.slug}
                to={`/spotify/${a.slug}`}
                className={`sp-playlist-item ${active ? "active" : ""}`}
              >
                <div className="sp-playlist-cover" style={{ background: a.cover }}>
                  {a.logo ? (
                    <img src={`${import.meta.env.BASE_URL}${a.logo}`} alt={a.artist} />
                  ) : (
                    a.initials
                  )}
                </div>
                <div className="sp-playlist-meta">
                  <div className={`sp-playlist-title ${active ? "active" : ""}`}>{a.title}</div>
                  <div className="sp-playlist-sub">
                    {a.type === "job" ? "Album" : "Single"} · {a.artist}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );

  const Player = (
    <footer className="sp-player">
      <div className="sp-player-track">
        <div className="sp-player-cover" style={{ background: album?.cover ?? albumGradients[0] }}>
          {album?.logo ? (
            <img src={`${import.meta.env.BASE_URL}${album.logo}`} alt={album.artist} />
          ) : (
            album?.initials ?? "??"
          )}
        </div>
        <div className="sp-player-meta">
          <div className="sp-player-title">{album?.title ?? "—"}</div>
          <div className="sp-player-artist">{album?.artist ?? name}</div>
        </div>
        <button className="sp-player-heart"><FaHeart /></button>
      </div>
      <div className="sp-player-controls">
        <div className="sp-player-buttons">
          <button><FaRandom /></button>
          <button><FaStepBackward /></button>
          <button className="sp-player-play" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <FaPause /> : <FaPlay style={{ marginLeft: 2 }} />}
          </button>
          <button><FaStepForward /></button>
          <button><FaRedo /></button>
        </div>
        <div className="sp-progress">
          <span className="sp-progress-time">0:48</span>
          <div className="sp-progress-bar"><div className="sp-progress-fill" /></div>
          <span className="sp-progress-time">3:32</span>
        </div>
      </div>
      <div className="sp-player-extras">
        <button><FaVolumeUp /></button>
        <div className="sp-volume">
          <div className="sp-volume-bar"><div className="sp-volume-fill" /></div>
        </div>
      </div>
    </footer>
  );

  if (!album) {
    return (
      <>
        <style>{styles}</style>
        <div className="sp-page">
          {Sidebar}
          <main className="sp-main">
            <div className="sp-topbar">
              <Link to="/spotify" className="sp-back-btn">← Back</Link>
            </div>
            <div className="sp-notfound">
              <h1>Album not found</h1>
              <p>This playlist doesn't exist in {name}'s library.</p>
              <Link to="/spotify" className="sp-external">← Return to your resume</Link>
            </div>
          </main>
          {Player}
        </div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="sp-page">
        {Sidebar}

        <main className="sp-main">
          <div className="sp-topbar">
            <Link to="/spotify" className="sp-back-btn">← Back to Resume</Link>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#1ED760", fontWeight: 700, fontSize: 14 }}>
              <FaSpotify size={18} /> Open in Web Player
            </div>
          </div>

          {/* Hero */}
          <section className="sp-album-hero" style={{ background: album.heroGrad }}>
            <div className="sp-album-art" style={{ background: album.cover }}>
              {album.logo ? (
                <img src={`${import.meta.env.BASE_URL}${album.logo}`} alt={album.artist} />
              ) : (
                album.initials
              )}
            </div>
            <div className="sp-album-meta">
              <div className="sp-album-type">{album.type === "job" ? "Album" : "Featured Single"}</div>
              <h1 className="sp-album-title">{album.title}</h1>
              <div className="sp-album-byline">
                <strong>{album.artist}</strong>
                <span className="dot">·</span>
                <span>{album.period}</span>
                <span className="dot">·</span>
                <span>{album.bullets.length} songs, {totalDuration(album.bullets.length)}</span>
              </div>
              <div className="sp-album-extra">{album.meta}</div>
            </div>
          </section>

          {/* Action Bar */}
          <div className="sp-action-bar">
            <button className="sp-play-btn" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <FaPause /> : <FaPlay style={{ marginLeft: 3 }} />}
            </button>
            <button
              className={`sp-heart-btn ${liked ? "liked" : ""}`}
              onClick={() => setLiked(!liked)}
              aria-label="Like"
            >
              <FaHeart />
            </button>
            <button className="sp-icon-btn-lg"><FaEllipsisH /></button>
            {album.externalUrl && (
              <a href={album.externalUrl} target="_blank" rel="noopener noreferrer" className="sp-external" style={{ marginLeft: "auto" }}>
                {album.externalUrl.replace("https://", "").replace(/\/$/, "")} ↗
              </a>
            )}
          </div>

          {/* Track List */}
          <div className="sp-track-table">
            <div className="sp-track-header">
              <span className="col-num">#</span>
              <span>Title</span>
              <span className="col-dur"><FaClock /></span>
            </div>

            {album.bullets.map((bullet, i) => (
              <div key={i} className="sp-track-row">
                <div className="sp-track-num">
                  <span className="num">{i + 1}</span>
                  <span className="play"><FaPlay size={10} style={{ marginLeft: 2 }} /></span>
                </div>
                <div className="sp-track-text">
                  <div className="sp-track-title">{bullet}</div>
                  <div className="sp-track-sub">{album.artist}</div>
                </div>
                <div className="sp-track-dur">{formatDuration(i + 1)}</div>
              </div>
            ))}
          </div>

          {/* About */}
          {album.description && (
            <section className="sp-section">
              <h2 className="sp-section-title">About this album</h2>
              <div className="sp-about">{album.description}</div>
            </section>
          )}
        </main>

        {Player}
      </div>
    </>
  );
}
