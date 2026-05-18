import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaSearch,
  FaHome,
  FaBook,
  FaPlus,
  FaHeart,
  FaCheckCircle,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaRedo,
  FaVolumeUp,
  FaEllipsisH,
  FaSpotify,
} from "react-icons/fa";
import { resumeData } from "../data/resumeData";

const { name, email, website, phone, summary, experience, skills, project, education } = resumeData;
const stack = Object.values(skills).flat();
const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const projectSlug = slugify(project.name);

const styles = `
  .sp-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #000;
    color: #fff;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 1fr 80px;
    grid-template-areas:
      "sidebar main"
      "player player";
    gap: 8px;
    padding: 8px;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    .sp-page {
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas: "main" "player";
      width: 100%;
      max-width: 100vw;
      padding: 4px;
      gap: 4px;
      overflow-x: hidden;
    }
    .sp-sidebar { display: none; }
    .sp-main { width: 100%; min-width: 0; max-width: 100%; }
    .sp-topbar-pill { display: none; }
  }

  /* Mobile nav strip (replaces sidebar on small screens) */
  .sp-mobile-nav { display: none; }

  @media (max-width: 768px) {
    .sp-mobile-nav {
      display: flex;
      gap: 8px;
      padding: 12px 16px;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 20;
      width: 100%;
    }
    .sp-mobile-nav::-webkit-scrollbar { display: none; }
  }

  .sp-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px 6px 6px;
    background: #232323;
    border-radius: 999px;
    text-decoration: none;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    flex-shrink: 0;
    transition: background 0.15s;
  }

  .sp-chip:hover { background: #2c2c2c; }
  .sp-chip.active { background: #1ED760; color: #000; }

  .sp-chip-cover {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7px;
    font-weight: 800;
    color: #fff;
    text-align: center;
    line-height: 1.05;
    padding: 2px;
    box-sizing: border-box;
    text-transform: uppercase;
  }

  .sp-chip-cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 3px;
    box-sizing: border-box;
  }

  .sp-player {
    padding-bottom: env(safe-area-inset-bottom, 0);
  }

  /* ============ Sidebar ============ */
  .sp-sidebar {
    grid-area: sidebar;
    background: #000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
  }

  .sp-sidebar-card {
    background: #121212;
    border-radius: 8px;
    padding: 8px 12px;
  }

  .sp-nav-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 12px;
    font-size: 14px;
    font-weight: 700;
    color: #b3b3b3;
    text-decoration: none;
    border-radius: 4px;
    transition: color 0.15s;
  }

  .sp-nav-item:hover { color: #fff; }
  .sp-nav-item.active { color: #fff; }

  .sp-library-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px 4px;
    color: #b3b3b3;
    font-size: 14px;
    font-weight: 700;
  }

  .sp-library-header:hover { color: #fff; }

  .sp-library-header .sp-icon-btn {
    background: transparent;
    border: none;
    color: #b3b3b3;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s, background 0.15s;
  }

  .sp-library-header .sp-icon-btn:hover {
    color: #fff;
    background: #1a1a1a;
  }

  .sp-playlist-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.15s;
    text-decoration: none;
    color: inherit;
  }

  .sp-playlist-item:hover { background: #1a1a1a; }

  .sp-playlist-cover {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 800;
    color: #fff;
    text-align: center;
    line-height: 1.05;
    padding: 3px;
    word-break: break-word;
    text-transform: uppercase;
    letter-spacing: -0.2px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .sp-playlist-cover img,
  .sp-track-cover img,
  .sp-album-cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 4px;
    box-sizing: border-box;
  }

  .sp-album-cover img { padding: 14px; }

  .sp-playlist-meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .sp-playlist-title {
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sp-playlist-sub {
    font-size: 12px;
    color: #b3b3b3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ============ Main ============ */
  .sp-main {
    grid-area: main;
    background: #121212;
    border-radius: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    min-width: 0;
  }

  .sp-main::-webkit-scrollbar { width: 12px; }
  .sp-main::-webkit-scrollbar-thumb {
    background: #535353;
    border-radius: 6px;
    border: 3px solid #121212;
  }

  .sp-topbar {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    background: transparent;
    backdrop-filter: blur(8px);
  }

  .sp-back-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(0,0,0,0.5);
    border: none;
    color: #fff;
    padding: 8px 14px;
    border-radius: 20px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: background 0.15s;
  }

  .sp-back-btn:hover { background: rgba(0,0,0,0.8); }

  /* ============ Artist Hero ============ */
  .sp-hero {
    position: relative;
    padding: 24px 32px 24px;
    background: linear-gradient(180deg, #1DB954 0%, #0a5d2b 60%, #121212 100%);
    margin-top: -64px;
    padding-top: 88px;
    display: flex;
    align-items: flex-end;
    gap: 24px;
    min-height: 340px;
  }

  .sp-hero-avatar {
    width: 232px;
    height: 232px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 60px rgba(0,0,0,0.5);
    flex-shrink: 0;
  }

  .sp-hero-meta {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 8px;
  }

  .sp-verified {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }

  .sp-verified svg { color: #4cb3ff; }

  .sp-hero-name {
    font-size: clamp(48px, 8vw, 96px);
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 1;
    margin: 0;
    color: #fff;
  }

  .sp-hero-stats {
    font-size: 14px;
    color: #fff;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    .sp-hero {
      flex-direction: column;
      align-items: flex-start;
      padding: 32px 20px 20px;
      min-height: auto;
      margin-top: 0;
    }
    .sp-hero-avatar { width: 140px; height: 140px; }
    .sp-hero-name { font-size: clamp(36px, 12vw, 56px); }
    .sp-section { padding: 8px 20px 24px; }
    .sp-action-bar { padding: 20px; gap: 16px; }
  }

  /* ============ Action Bar ============ */
  .sp-action-bar {
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, #121212 100%);
    padding: 24px 32px;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .sp-play-btn {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #1ED760;
    border: none;
    color: #000;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.1s, background 0.15s;
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  }

  .sp-play-btn:hover {
    background: #1fdf64;
    transform: scale(1.05);
  }

  .sp-follow-btn {
    background: transparent;
    border: 1px solid #b3b3b3;
    color: #fff;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: border-color 0.15s, transform 0.1s;
  }

  .sp-follow-btn:hover {
    border-color: #fff;
    transform: scale(1.04);
  }

  .sp-icon-btn-lg {
    background: transparent;
    border: none;
    color: #b3b3b3;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.15s;
  }

  .sp-icon-btn-lg:hover { color: #fff; }

  /* ============ Section ============ */
  .sp-section {
    padding: 8px 32px 32px;
  }

  .sp-section-title {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin: 0 0 16px;
    letter-spacing: -0.5px;
  }

  .sp-section-sub {
    font-size: 13px;
    color: #b3b3b3;
    margin-bottom: 12px;
  }

  /* ============ Track List ============ */
  .sp-track-list {
    display: flex;
    flex-direction: column;
  }

  .sp-track {
    display: grid;
    grid-template-columns: 32px 1fr auto auto;
    gap: 16px;
    align-items: center;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.15s;
  }

  .sp-track:hover { background: rgba(255,255,255,0.08); }
  a.sp-track { text-decoration: none; color: inherit; }

  .sp-track-num {
    color: #b3b3b3;
    font-size: 16px;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }

  .sp-track:hover .sp-track-num { color: #fff; }

  .sp-track-info {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .sp-track-cover {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: #fff;
    font-size: 8px;
    text-align: center;
    line-height: 1.05;
    padding: 2px;
    word-break: break-word;
    text-transform: uppercase;
    letter-spacing: -0.2px;
    box-sizing: border-box;
  }

  .sp-track-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .sp-track-title {
    font-size: 15px;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sp-track-artist {
    font-size: 13px;
    color: #b3b3b3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sp-track-plays {
    font-size: 13px;
    color: #b3b3b3;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .sp-track-duration {
    font-size: 13px;
    color: #b3b3b3;
    font-variant-numeric: tabular-nums;
    width: 48px;
    text-align: right;
  }

  @media (max-width: 600px) {
    .sp-track { grid-template-columns: 24px 1fr auto; gap: 12px; }
    .sp-track-plays { display: none; }
  }

  /* ============ Album Grid (Discography) ============ */
  .sp-album-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
  }

  .sp-album-card {
    background: #181818;
    padding: 16px;
    border-radius: 8px;
    transition: background 0.2s;
    cursor: pointer;
    position: relative;
  }

  .sp-album-card:hover { background: #282828; }
  .sp-album-card:hover .sp-album-play { opacity: 1; transform: translateY(0); }
  a.sp-album-card { text-decoration: none; color: inherit; display: block; }
  .sp-featured-card { grid-column: 1 / -1; }
  .sp-featured-card .sp-featured-cover { width: 160px; height: 160px; flex-shrink: 0; }
  @media (max-width: 600px) {
    .sp-featured-card > a { flex-direction: column; }
    .sp-featured-card { padding: 12px; }
    .sp-featured-card .sp-featured-cover { width: 120px; height: 120px; }
  }

  .sp-album-cover {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 4px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 900;
    color: #fff;
    box-shadow: 0 8px 24px rgba(0,0,0,0.5);
    position: relative;
    overflow: hidden;
    text-align: center;
    line-height: 1.05;
    padding: 12px;
    word-break: break-word;
    text-transform: uppercase;
    letter-spacing: -0.5px;
    box-sizing: border-box;
  }

  .sp-album-play {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #1ED760;
    color: #000;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.2s, transform 0.2s;
    box-shadow: 0 8px 16px rgba(0,0,0,0.4);
  }

  .sp-album-title {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sp-album-sub {
    font-size: 13px;
    color: #b3b3b3;
    line-height: 1.4;
  }

  /* ============ About ============ */
  .sp-about {
    background: linear-gradient(135deg, #1a1a1a 0%, #0a5d2b 200%);
    padding: 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .sp-about-text {
    font-size: 15px;
    line-height: 1.65;
    color: #fff;
  }

  .sp-about-stats {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }

  .sp-stat {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .sp-stat-value {
    font-size: 20px;
    font-weight: 800;
    color: #fff;
  }

  .sp-stat-label {
    font-size: 12px;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* ============ Chips (Genres) ============ */
  .sp-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .sp-chip {
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    background: rgba(255,255,255,0.1);
    padding: 6px 14px;
    border-radius: 20px;
    transition: background 0.15s;
    cursor: pointer;
  }

  .sp-chip:hover { background: rgba(255,255,255,0.18); }

  /* ============ Player ============ */
  .sp-player {
    grid-area: player;
    background: #000;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    padding: 0 16px;
    border-top: 1px solid #181818;
  }

  .sp-player-track {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .sp-player-cover {
    width: 56px;
    height: 56px;
    border-radius: 4px;
    flex-shrink: 0;
  }

  .sp-player-meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .sp-player-title {
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sp-player-artist {
    font-size: 12px;
    color: #b3b3b3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sp-player-heart {
    background: transparent;
    border: none;
    color: #b3b3b3;
    cursor: pointer;
    font-size: 16px;
    transition: color 0.15s, transform 0.1s;
  }

  .sp-player-heart.liked { color: #1ED760; }
  .sp-player-heart:hover { color: #fff; }
  .sp-player-heart.liked:hover { color: #1fdf64; }

  .sp-player-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .sp-player-buttons {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .sp-player-buttons button {
    background: transparent;
    border: none;
    color: #b3b3b3;
    cursor: pointer;
    font-size: 14px;
    transition: color 0.15s, transform 0.1s;
  }

  .sp-player-buttons button:hover { color: #fff; }

  .sp-player-play {
    width: 32px !important;
    height: 32px;
    border-radius: 50% !important;
    background: #fff !important;
    color: #000 !important;
    font-size: 13px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sp-player-play:hover { transform: scale(1.05); }

  .sp-progress {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    max-width: 520px;
  }

  .sp-progress-time {
    font-size: 11px;
    color: #b3b3b3;
    font-variant-numeric: tabular-nums;
    min-width: 32px;
  }

  .sp-progress-bar {
    flex: 1;
    height: 4px;
    background: #4d4d4d;
    border-radius: 2px;
    overflow: hidden;
    cursor: pointer;
  }

  .sp-progress-fill {
    height: 100%;
    background: #fff;
    width: 35%;
    border-radius: 2px;
    transition: width 0.3s linear, background 0.15s;
  }

  .sp-progress-bar:hover .sp-progress-fill { background: #1ED760; }

  .sp-player-extras {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;
  }

  .sp-player-extras button {
    background: transparent;
    border: none;
    color: #b3b3b3;
    cursor: pointer;
    font-size: 14px;
    transition: color 0.15s;
  }

  .sp-player-extras button:hover { color: #fff; }

  .sp-volume {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100px;
  }

  .sp-volume-bar {
    flex: 1;
    height: 4px;
    background: #4d4d4d;
    border-radius: 2px;
    overflow: hidden;
  }

  .sp-volume-fill {
    height: 100%;
    background: #fff;
    width: 70%;
  }

  @media (max-width: 768px) {
    .sp-player { grid-template-columns: 1fr auto; padding: 0 12px; gap: 12px; }
    .sp-player-extras, .sp-progress { display: none; }
    .sp-player-controls { flex-direction: row; }
  }
`;

const albumGradients = [
  "linear-gradient(135deg, #F97316 0%, #DC2626 100%)",
  "linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)",
  "linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)",
  "linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)",
];

const playlistGradients = [
  "linear-gradient(135deg, #1DB954 0%, #064E3B 100%)",
  "linear-gradient(135deg, #FBBF24 0%, #92400E 100%)",
  "linear-gradient(135deg, #38BDF8 0%, #0C4A6E 100%)",
  "linear-gradient(135deg, #F472B6 0%, #831843 100%)",
];

function formatDuration(bulletCount: number) {
  const totalSeconds = bulletCount * 47 + 123;
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatPlays(i: number) {
  const base = [2_847_193, 1_402_557, 894_201, 612_488, 320_115];
  return (base[i] ?? 150_000).toLocaleString();
}

export default function SpotifyResumePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(true);

  useEffect(() => {
    document.title = `${name} | Spotify Resume`;
  }, []);

  const monthlyListeners = (12_847_392).toLocaleString();

  return (
    <>
      <style>{styles}</style>
      <div className="sp-page">

        {/* ============ Sidebar ============ */}
        <aside className="sp-sidebar">
          <div className="sp-sidebar-card">
            <Link to="/" className="sp-nav-item">
              <FaHome /> Home
            </Link>
            <div className="sp-nav-item">
              <FaSearch /> Search
            </div>
          </div>

          <div className="sp-sidebar-card" style={{ flex: 1, overflowY: "auto" }}>
            <div className="sp-library-header">
              <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <FaBook /> Your Library
              </span>
              <button className="sp-icon-btn"><FaPlus /></button>
            </div>

            <div style={{ marginTop: 8 }}>
              <div className="sp-playlist-item">
                <div className="sp-playlist-cover" style={{ background: playlistGradients[0] }}>
                  <FaHeart />
                </div>
                <div className="sp-playlist-meta">
                  <div className="sp-playlist-title">Liked Songs</div>
                  <div className="sp-playlist-sub">Playlist · {experience.length + 1} songs</div>
                </div>
              </div>

              {experience.map((job, i) => (
                <Link
                  key={job.company}
                  to={`/spotify/${slugify(job.company)}`}
                  className="sp-playlist-item"
                >
                  <div
                    className="sp-playlist-cover"
                    style={{ background: job.coverBg ?? albumGradients[i % albumGradients.length] }}
                  >
                    {job.logo ? (
                      <img src={`${import.meta.env.BASE_URL}${job.logo}`} alt={job.company} />
                    ) : (
                      job.company
                    )}
                  </div>
                  <div className="sp-playlist-meta">
                    <div className="sp-playlist-title">{job.company}</div>
                    <div className="sp-playlist-sub">Album · {job.bullets.length} tracks</div>
                  </div>
                </Link>
              ))}

              <Link to={`/spotify/${projectSlug}`} className="sp-playlist-item">
                <div className="sp-playlist-cover" style={{ background: project.coverBg ?? playlistGradients[0] }}>
                  {project.logo ? (
                    <img src={`${import.meta.env.BASE_URL}${project.logo}`} alt={project.name} />
                  ) : (
                    project.name
                  )}
                </div>
                <div className="sp-playlist-meta">
                  <div className="sp-playlist-title">{project.name}</div>
                  <div className="sp-playlist-sub">Single · {name}</div>
                </div>
              </Link>

              <div className="sp-playlist-item">
                <div className="sp-playlist-cover" style={{ background: playlistGradients[2] }}>
                  Tech Stack
                </div>
                <div className="sp-playlist-meta">
                  <div className="sp-playlist-title">Tech Stack</div>
                  <div className="sp-playlist-sub">Playlist · {stack.length} tracks</div>
                </div>
              </div>

              <div className="sp-playlist-item">
                <div className="sp-playlist-cover" style={{ background: "linear-gradient(135deg, #f59e0b, #7c2d12)" }}>
                  Education
                </div>
                <div className="sp-playlist-meta">
                  <div className="sp-playlist-title">Education</div>
                  <div className="sp-playlist-sub">EP · {education.school.split(",")[0]}</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* ============ Main ============ */}
        <main className="sp-main">
          <div className="sp-mobile-nav">
            {experience.map((job, i) => (
              <Link
                key={`m-${job.company}`}
                to={`/spotify/${slugify(job.company)}`}
                className="sp-chip"
              >
                <div
                  className="sp-chip-cover"
                  style={{ background: job.coverBg ?? albumGradients[i % albumGradients.length] }}
                >
                  {job.logo ? (
                    <img src={`${import.meta.env.BASE_URL}${job.logo}`} alt={job.company} />
                  ) : (
                    job.company.slice(0, 2)
                  )}
                </div>
                {job.company}
              </Link>
            ))}
            <Link to={`/spotify/${projectSlug}`} className="sp-chip">
              <div
                className="sp-chip-cover"
                style={{ background: project.coverBg ?? playlistGradients[0] }}
              >
                {project.logo ? (
                  <img src={`${import.meta.env.BASE_URL}${project.logo}`} alt={project.name} />
                ) : (
                  project.name.slice(0, 2)
                )}
              </div>
              {project.name}
            </Link>
          </div>

          <div className="sp-topbar">
            <Link to="/" className="sp-back-btn">← Back to Home</Link>
            <div className="sp-topbar-pill" style={{ display: "flex", alignItems: "center", gap: 8, color: "#1ED760", fontWeight: 700, fontSize: 14 }}>
              <FaSpotify size={18} /> Open in Web Player
            </div>
          </div>

          {/* Artist Hero */}
          <section className="sp-hero">
            <img
              src={`${import.meta.env.BASE_URL}ro.jpg`}
              alt={name}
              className="sp-hero-avatar"
            />
            <div className="sp-hero-meta">
              <div className="sp-verified">
                <FaCheckCircle size={16} /> Verified Engineer
              </div>
              <h1 className="sp-hero-name">{name}</h1>
              <div className="sp-hero-stats">{monthlyListeners} monthly listeners</div>
            </div>
          </section>

          {/* Action Bar */}
          <div className="sp-action-bar">
            <button className="sp-play-btn" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <FaPause /> : <FaPlay style={{ marginLeft: 3 }} />}
            </button>
            <button className="sp-follow-btn">Follow</button>
            <button className="sp-icon-btn-lg"><FaEllipsisH /></button>
          </div>

          {/* Popular (Experience as Tracks) */}
          <section className="sp-section">
            <h2 className="sp-section-title">Popular</h2>
            <div className="sp-track-list">
              {experience.map((job, i) => (
                <Link
                  key={i}
                  to={`/spotify/${slugify(job.company)}`}
                  className="sp-track"
                >
                  <div className="sp-track-num">{i + 1}</div>
                  <div className="sp-track-info">
                    <div
                      className="sp-track-cover"
                      style={{ background: job.coverBg ?? albumGradients[i % albumGradients.length] }}
                    >
                      {job.logo ? (
                        <img src={`${import.meta.env.BASE_URL}${job.logo}`} alt={job.company} />
                      ) : (
                        job.company
                      )}
                    </div>
                    <div className="sp-track-text">
                      <div className="sp-track-title">{job.title}</div>
                      <div className="sp-track-artist">{job.company} · {job.location}</div>
                    </div>
                  </div>
                  <div className="sp-track-plays">{formatPlays(i)}</div>
                  <div className="sp-track-duration">{formatDuration(job.bullets.length)}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* About */}
          <section className="sp-section">
            <h2 className="sp-section-title">About</h2>
            <div className="sp-about">
              <div className="sp-about-text">{summary}</div>
              <div className="sp-about-stats">
                <div className="sp-stat">
                  <div className="sp-stat-value">{monthlyListeners}</div>
                  <div className="sp-stat-label">Monthly Listeners</div>
                </div>
                <div className="sp-stat">
                  <div className="sp-stat-value">{experience.length}</div>
                  <div className="sp-stat-label">Albums</div>
                </div>
                <div className="sp-stat">
                  <div className="sp-stat-value">{stack.length}</div>
                  <div className="sp-stat-label">Genres</div>
                </div>
              </div>
            </div>
          </section>

          {/* Discography (Experience details as albums) */}
          <section className="sp-section">
            <h2 className="sp-section-title">Discography</h2>
            <div className="sp-album-grid">
              {experience.map((job, i) => (
                <Link
                  key={i}
                  to={`/spotify/${slugify(job.company)}`}
                  className="sp-album-card"
                >
                  <div
                    className="sp-album-cover"
                    style={{ background: job.coverBg ?? albumGradients[i % albumGradients.length] }}
                  >
                    {job.logo ? (
                      <img src={`${import.meta.env.BASE_URL}${job.logo}`} alt={job.company} />
                    ) : (
                      job.company
                    )}
                    <button className="sp-album-play">
                      <FaPlay style={{ marginLeft: 2 }} />
                    </button>
                  </div>
                  <div className="sp-album-title">{job.company}</div>
                  <div className="sp-album-sub">
                    {job.period.split("–")[0].trim().split("/")[1]} · {job.bullets.length} tracks
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Featured (Project) */}
          <section className="sp-section">
            <h2 className="sp-section-title">Featured Release</h2>
            <div className="sp-album-grid">
              <div className="sp-album-card sp-featured-card" style={{ background: "#1a1a1a" }}>
                <Link
                  to={`/spotify/${projectSlug}`}
                  style={{ display: "flex", gap: 20, alignItems: "flex-start", textDecoration: "none", color: "inherit" }}
                >
                  <div
                    className="sp-album-cover sp-featured-cover"
                    style={{
                      background: project.coverBg ?? "linear-gradient(135deg, #1DB954 0%, #064E3B 100%)",
                      marginBottom: 0,
                      position: "relative",
                      fontSize: 28,
                    }}
                  >
                    {project.logo ? (
                      <img src={`${import.meta.env.BASE_URL}${project.logo}`} alt={project.name} />
                    ) : (
                      project.name
                    )}
                    <button className="sp-album-play">
                      <FaPlay style={{ marginLeft: 2 }} />
                    </button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
                    <div style={{ fontSize: 11, color: "#b3b3b3", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>
                      Album · 2025
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>{project.name}</div>
                    <div style={{ fontSize: 13, color: "#b3b3b3" }}>{project.role}</div>
                    <div style={{ fontSize: 13, color: "#b3b3b3" }}>{project.tech}</div>
                  </div>
                </Link>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ fontSize: 13, color: "#1ED760", fontWeight: 600, textDecoration: "none", marginTop: 12, display: "inline-block" }}
                >
                  {project.url.replace("https://", "").replace(/\/$/, "")} ↗
                </a>
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 4 }}>
                  {project.bullets.map((b, i) => (
                    <div key={i} className="sp-track" style={{ gridTemplateColumns: "32px 1fr auto" }}>
                      <div className="sp-track-num">{i + 1}</div>
                      <div className="sp-track-text">
                        <div className="sp-track-title" style={{ whiteSpace: "normal" }}>{b}</div>
                      </div>
                      <div className="sp-track-duration">{formatDuration(i + 2)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Genres (Tech Stack) */}
          <section className="sp-section">
            <h2 className="sp-section-title">Genres</h2>
            <div className="sp-chips">
              {stack.map((s) => (
                <span key={s} className="sp-chip">{s}</span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="sp-section">
            <h2 className="sp-section-title">Education</h2>
            <div className="sp-about" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #7c2d12 200%)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div
                  className="sp-album-cover"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #7c2d12)",
                    width: 96,
                    height: 96,
                    fontSize: 20,
                    marginBottom: 0,
                    flexShrink: 0,
                  }}
                >
                  ED
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#b3b3b3", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>
                    EP
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                    {education.degree}
                  </div>
                  <div style={{ fontSize: 14, color: "#b3b3b3" }}>{education.school}</div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact footer */}
          <section className="sp-section">
            <div style={{ fontSize: 12, color: "#6a6a6a", display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", paddingBottom: 24 }}>
              <a href={`mailto:${email}`} style={{ color: "#6a6a6a", textDecoration: "none" }}>{email}</a>
              <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" style={{ color: "#6a6a6a", textDecoration: "none" }}>{website}</a>
              <span>{phone}</span>
            </div>
          </section>
        </main>

        {/* ============ Player Bar ============ */}
        <footer className="sp-player">
          <div className="sp-player-track">
            <div
              className="sp-player-cover"
              style={{ background: albumGradients[0] }}
            />
            <div className="sp-player-meta">
              <div className="sp-player-title">{experience[0].title}</div>
              <div className="sp-player-artist">{name}</div>
            </div>
            <button
              className={`sp-player-heart ${liked ? "liked" : ""}`}
              onClick={() => setLiked(!liked)}
              aria-label="Like"
            >
              <FaHeart />
            </button>
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
              <span className="sp-progress-time">1:42</span>
              <div className="sp-progress-bar">
                <div className="sp-progress-fill" />
              </div>
              <span className="sp-progress-time">4:51</span>
            </div>
          </div>

          <div className="sp-player-extras">
            <button><FaVolumeUp /></button>
            <div className="sp-volume">
              <div className="sp-volume-bar">
                <div className="sp-volume-fill" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
