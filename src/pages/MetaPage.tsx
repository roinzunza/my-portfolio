import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
  FaCheckCircle,
  FaEllipsisH,
  FaTh,
  FaRegPlayCircle,
  FaRegUser,
  FaHome,
  FaSearch,
  FaCompass,
  FaPlusSquare,
  FaTimes,
} from "react-icons/fa";
import { resumeData } from "../data/resumeData";

const { name, email, summary, experience, skills, project, education } = resumeData;

const IG_GRADIENT =
  "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";
const META_GRADIENT =
  "linear-gradient(90deg, #0064E0 0%, #0082FB 50%, #00C6FF 100%)";

const styles = `
  .ig-page {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #000;
    color: #fafafa;
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  .ig-page * { box-sizing: border-box; }

  /* ============ Top Nav ============ */
  .ig-nav {
    background: #000;
    border-bottom: 1px solid #262626;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }

  .ig-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #fafafa;
  }

  .ig-brand-logo {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: ${IG_GRADIENT};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
  }

  .ig-brand-text {
    font-family: 'Billabong', 'Snell Roundhand', cursive;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  .ig-search {
    flex: 0 1 268px;
    height: 36px;
    background: #1a1a1a;
    border: 1px solid #1a1a1a;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 14px;
    color: #737373;
    font-size: 14px;
  }

  .ig-nav-icons {
    display: flex;
    align-items: center;
    gap: 22px;
    font-size: 22px;
    color: #fafafa;
  }

  .ig-nav-icons a, .ig-nav-icons button {
    color: #fafafa;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 22px;
    display: flex;
    align-items: center;
  }

  /* ============ Container ============ */
  .ig-container {
    max-width: 935px;
    margin: 0 auto;
    padding: 30px 20px 100px;
  }

  /* ============ Profile Header ============ */
  .ig-profile {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 30px;
    padding: 0 20px 44px;
    border-bottom: 1px solid #262626;
    margin-bottom: 24px;
    align-items: center;
  }

  .ig-avatar-wrap {
    display: flex;
    justify-content: center;
  }

  .ig-avatar-ring {
    width: 168px;
    height: 168px;
    border-radius: 50%;
    background: ${IG_GRADIENT};
    padding: 4px;
    position: relative;
  }

  .ig-avatar-ring::after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 3px solid #000;
  }

  .ig-avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    z-index: 1;
  }

  .ig-profile-info {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .ig-handle-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .ig-handle {
    font-size: 22px;
    font-weight: 400;
    color: #fafafa;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .ig-verified {
    color: #1d9bf0;
    font-size: 18px;
  }

  .ig-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .ig-btn {
    height: 32px;
    padding: 0 16px;
    border-radius: 8px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    font-family: inherit;
  }

  .ig-btn-primary {
    background: #0095f6;
    color: #fff;
  }

  .ig-btn-primary:hover { background: #1877f2; }

  .ig-btn-secondary {
    background: #262626;
    color: #fafafa;
  }

  .ig-btn-secondary:hover { background: #363636; }

  .ig-icon-btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: #262626;
    color: #fafafa;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  /* ============ Stats ============ */
  .ig-stats {
    display: flex;
    gap: 40px;
    font-size: 16px;
    color: #fafafa;
  }

  .ig-stats strong {
    font-weight: 700;
    color: #fafafa;
  }

  /* ============ Bio ============ */
  .ig-bio {
    font-size: 14px;
    line-height: 1.5;
    color: #fafafa;
  }

  .ig-bio-name {
    font-weight: 700;
    margin-bottom: 2px;
  }

  .ig-bio-title {
    color: #a8a8a8;
    margin-bottom: 8px;
  }

  .ig-bio-link {
    color: #e0f1ff;
    font-weight: 600;
    text-decoration: none;
  }

  .ig-bio-link:hover { text-decoration: underline; }

  /* ============ Meta Banner ============ */
  .ig-meta-banner {
    margin: 0 20px 28px;
    padding: 14px 18px;
    background: ${META_GRADIENT};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    color: #fff;
    flex-wrap: wrap;
  }

  .ig-meta-banner-text {
    display: flex;
    flex-direction: column;
  }

  .ig-meta-banner-title {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.85;
  }

  .ig-meta-banner-sub {
    font-size: 16px;
    font-weight: 700;
  }

  .ig-meta-banner-btn {
    background: rgba(0, 0, 0, 0.25);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.35);
    padding: 8px 14px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    text-decoration: none;
  }

  .ig-meta-banner-btn:hover { background: rgba(0, 0, 0, 0.4); }

  /* ============ Highlights ============ */
  .ig-highlights {
    display: flex;
    gap: 36px;
    padding: 0 20px 32px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .ig-highlights::-webkit-scrollbar { display: none; }

  .ig-highlight {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    width: 92px;
    text-align: center;
  }

  .ig-highlight-ring {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1.5px solid #404040;
    padding: 4px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.15s;
  }

  .ig-highlight:hover .ig-highlight-ring {
    border-color: #fafafa;
  }

  .ig-highlight-bubble {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fafafa;
    font-size: 22px;
    font-weight: 700;
  }

  .ig-highlight-label {
    font-size: 12px;
    color: #fafafa;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ============ Tabs ============ */
  .ig-tabs {
    display: flex;
    justify-content: center;
    gap: 60px;
    border-top: 1px solid #262626;
    margin: 0 20px 4px;
  }

  .ig-tab {
    background: none;
    border: none;
    color: #737373;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 16px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    border-top: 1px solid transparent;
    margin-top: -1px;
  }

  .ig-tab.active {
    color: #fafafa;
    border-top-color: #fafafa;
  }

  /* ============ Grid ============ */
  .ig-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    padding: 0 20px;
  }

  .ig-post {
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    cursor: pointer;
    background: #1a1a1a;
  }

  .ig-post-cover {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-weight: 900;
    font-size: 28px;
    letter-spacing: -1px;
    text-transform: uppercase;
    padding: 12px;
    line-height: 1.1;
    word-break: break-word;
  }

  .ig-post-cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 18%;
  }

  .ig-post-hover {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
  }

  .ig-post:hover .ig-post-hover { opacity: 1; }

  .ig-post-hover-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .ig-post-pill {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    backdrop-filter: blur(4px);
  }

  /* ============ Modal ============ */
  .ig-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    overflow-y: auto;
  }

  .ig-modal-close {
    position: fixed;
    top: 16px;
    right: 20px;
    background: none;
    border: none;
    color: #fff;
    font-size: 26px;
    cursor: pointer;
    z-index: 220;
  }

  .ig-modal {
    background: #000;
    border: 1px solid #262626;
    border-radius: 8px;
    max-width: 1040px;
    width: 100%;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    max-height: 90vh;
    overflow: hidden;
  }

  .ig-modal-image {
    background: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 48px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    word-break: break-word;
    min-height: 360px;
  }

  .ig-modal-image img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
  }

  .ig-modal-side {
    display: flex;
    flex-direction: column;
    min-width: 0;
    background: #000;
  }

  .ig-modal-head {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-bottom: 1px solid #262626;
  }

  .ig-modal-head-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${IG_GRADIENT};
    padding: 2px;
  }

  .ig-modal-head-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #000;
  }

  .ig-modal-head-meta {
    flex: 1;
    min-width: 0;
  }

  .ig-modal-head-name {
    font-size: 14px;
    font-weight: 600;
    color: #fafafa;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .ig-modal-head-sub {
    font-size: 12px;
    color: #a8a8a8;
  }

  .ig-modal-comments {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .ig-comment {
    display: flex;
    gap: 10px;
    font-size: 14px;
    line-height: 1.4;
    color: #fafafa;
  }

  .ig-comment-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${IG_GRADIENT};
    flex-shrink: 0;
    padding: 1.5px;
  }

  .ig-comment-avatar-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: #fafafa;
  }

  .ig-comment-body {
    flex: 1;
    min-width: 0;
  }

  .ig-comment-handle {
    font-weight: 600;
    margin-right: 6px;
  }

  .ig-comment-text {
    color: #fafafa;
  }

  .ig-comment-meta {
    margin-top: 4px;
    font-size: 12px;
    color: #737373;
    display: flex;
    gap: 16px;
  }

  .ig-modal-actions {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 16px 6px;
    border-top: 1px solid #262626;
    font-size: 22px;
    color: #fafafa;
  }

  .ig-modal-actions button {
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .ig-modal-actions .right { margin-left: auto; }
  .ig-modal-actions .liked { color: #ed4956; }

  .ig-modal-likes {
    padding: 4px 16px 0;
    font-size: 14px;
    font-weight: 600;
    color: #fafafa;
  }

  .ig-modal-time {
    padding: 4px 16px 14px;
    font-size: 10px;
    color: #737373;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* ============ Mobile bottom nav ============ */
  .ig-bottom-nav {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: #000;
    border-top: 1px solid #262626;
    z-index: 50;
    padding: 0 24px;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    color: #fafafa;
  }

  .ig-bottom-nav a, .ig-bottom-nav button {
    color: #fafafa;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 22px;
    display: flex;
    align-items: center;
  }

  .ig-bottom-nav .me-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
    border: 1.5px solid #fafafa;
    padding: 0;
  }

  .ig-bottom-nav .me-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* ============ Footer ============ */
  .ig-footer {
    text-align: center;
    padding: 32px 16px 16px;
    color: #737373;
    font-size: 12px;
  }

  .ig-footer a {
    color: #737373;
    text-decoration: none;
    margin: 0 8px;
  }

  .ig-footer a:hover { text-decoration: underline; }

  /* ============ Responsive ============ */
  @media (max-width: 736px) {
    .ig-container { padding: 16px 0 70px; }
    .ig-nav { padding: 0 16px; height: 54px; }
    .ig-search { display: none; }
    .ig-brand-text { font-size: 22px; }
    .ig-nav-icons { gap: 16px; font-size: 20px; }
    .ig-nav-icons .desktop-only { display: none; }

    .ig-profile {
      grid-template-columns: 80px 1fr;
      gap: 24px;
      padding: 0 16px 20px;
    }
    .ig-avatar-ring { width: 86px; height: 86px; padding: 2px; }
    .ig-avatar-ring::after { inset: 2px; border-width: 2px; }
    .ig-handle { font-size: 18px; }
    .ig-stats { display: none; }
    .ig-mobile-stats {
      display: flex;
      justify-content: space-around;
      padding: 12px 16px;
      border-top: 1px solid #262626;
      border-bottom: 1px solid #262626;
      margin: 0 0 16px;
      text-align: center;
      font-size: 14px;
    }
    .ig-mobile-stats > div { display: flex; flex-direction: column; gap: 2px; }
    .ig-mobile-stats strong { font-weight: 700; }
    .ig-mobile-stats span { font-size: 12px; color: #a8a8a8; }

    .ig-bio { padding: 0 16px; margin-bottom: 14px; }
    .ig-meta-banner { margin: 0 16px 20px; padding: 12px 14px; }
    .ig-meta-banner-sub { font-size: 14px; }

    .ig-highlights { padding: 0 16px 24px; gap: 16px; }
    .ig-highlight { width: 76px; }
    .ig-highlight-ring { width: 64px; height: 64px; }

    .ig-tabs { gap: 40px; margin: 0; padding: 0 16px; }
    .ig-tab { font-size: 11px; padding: 12px 0; }
    .ig-tab span { display: none; }

    .ig-grid { gap: 2px; padding: 0; }
    .ig-post-cover { font-size: 16px; padding: 6px; }
    .ig-post-pill { font-size: 9px; padding: 2px 6px; }

    .ig-bottom-nav { display: flex; }

    .ig-modal-backdrop { padding: 0; }
    .ig-modal {
      grid-template-columns: 1fr;
      max-height: 100vh;
      border-radius: 0;
      border: none;
      height: 100vh;
    }
    .ig-modal-image { min-height: 220px; max-height: 38vh; font-size: 28px; }
    .ig-modal-close { top: 12px; right: 16px; }
  }

  @media (min-width: 737px) {
    .ig-mobile-stats { display: none; }
  }
`;

type Post = {
  id: string;
  cover: string;
  logo?: string;
  pill: string;
  caption: string;
  company: string;
  title: string;
  period: string;
  location?: string;
  summary?: string;
  bullets: string[];
  likes: number;
  url?: string;
};

function initials(text: string) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function handleFrom(company: string) {
  return company.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const experiencePosts: Post[] = experience.map((job, i) => ({
  id: `job-${i}`,
  cover: job.coverBg || IG_GRADIENT,
  logo: job.logo,
  pill: i === 0 ? "Pinned" : "Post",
  caption:
    job.summary ??
    `Shipped ${job.bullets.length} workstreams as ${job.title} @ ${job.company}.`,
  company: job.company,
  title: job.title,
  period: job.period,
  location: job.location,
  summary: job.summary,
  bullets: job.bullets,
  likes: 980 + (4 - i) * 314 + job.bullets.length * 27,
  url: undefined,
}));

const projectPost: Post = {
  id: "project",
  cover: project.coverBg || IG_GRADIENT,
  logo: project.logo,
  pill: "Reel",
  caption: `Building ${project.name} — ${project.role}.`,
  company: project.name,
  title: project.role,
  period: "Now",
  location: project.tech,
  summary: project.bullets[0],
  bullets: project.bullets,
  likes: 4127,
  url: project.url,
};

const educationPost: Post = {
  id: "edu",
  cover: "linear-gradient(135deg, #f09433 0%, #bc1888 100%)",
  pill: "Throwback",
  caption: education.degree,
  company: education.school,
  title: education.degree,
  period: "2016 – 2020",
  location: "Fullerton, CA",
  summary: "Where the foundation got laid — CS at CSUF.",
  bullets: [
    "B.S. Computer Science with a focus on systems and ML.",
    "Built the muscle memory for the production-scale work that came after.",
  ],
  likes: 612,
  url: undefined,
};

const allPosts: Post[] = [projectPost, ...experiencePosts, educationPost];

const skillCount = Object.values(skills).flat().length;

export default function MetaPage() {
  const [tab, setTab] = useState<"posts" | "reels" | "tagged">("posts");
  const [open, setOpen] = useState<Post | null>(null);
  const [liked, setLiked] = useState<Set<string>>(new Set());
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    document.title = `${name} (@ro.inzunza) · Engineering`;
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggle = (set: Set<string>, key: string, setter: (s: Set<string>) => void) => {
    const next = new Set(set);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    setter(next);
  };

  const reels = allPosts.filter((p) => p.pill === "Reel" || p.id === "project");
  const visiblePosts = tab === "reels" ? reels : tab === "tagged" ? [] : allPosts;

  return (
    <>
      <style>{styles}</style>
      <div className="ig-page">
        {/* ============ Top Nav ============ */}
        <header className="ig-nav">
          <Link to="/" className="ig-brand">
            <span className="ig-brand-logo">
              <FaInstagram />
            </span>
            <span className="ig-brand-text">Instagram</span>
          </Link>

          <div className="ig-search">
            <FaSearch size={12} /> Search
          </div>

          <div className="ig-nav-icons">
            <Link to="/" aria-label="Home" className="desktop-only"><FaHome /></Link>
            <button aria-label="Messages" className="desktop-only"><FaRegPaperPlane /></button>
            <button aria-label="New post" className="desktop-only"><FaPlusSquare /></button>
            <button aria-label="Explore" className="desktop-only"><FaCompass /></button>
            <button aria-label="Profile"><FaRegUser /></button>
          </div>
        </header>

        <main className="ig-container">
          {/* ============ Profile Header ============ */}
          <section className="ig-profile">
            <div className="ig-avatar-wrap">
              <div className="ig-avatar-ring">
                <img
                  src={`${import.meta.env.BASE_URL}ro.jpg`}
                  alt={name}
                  className="ig-avatar"
                />
              </div>
            </div>

            <div className="ig-profile-info">
              <div className="ig-handle-row">
                <span className="ig-handle">
                  ro.inzunza
                  <FaCheckCircle className="ig-verified" />
                </span>
                <div className="ig-actions">
                  <button
                    className={following ? "ig-btn ig-btn-secondary" : "ig-btn ig-btn-primary"}
                    onClick={() => setFollowing((f) => !f)}
                  >
                    {following ? "Following" : "Follow"}
                  </button>
                  <a href={`mailto:${email}`} className="ig-btn ig-btn-secondary">
                    Message
                  </a>
                  <button className="ig-icon-btn" aria-label="More options">
                    <FaEllipsisH size={12} />
                  </button>
                </div>
              </div>

              <div className="ig-stats">
                <span><strong>{allPosts.length}</strong> posts</span>
                <span><strong>{experience.length * 1200 + skillCount * 87}</strong> followers</span>
                <span><strong>{skillCount}</strong> following</span>
              </div>

              <div className="ig-bio">
                <div className="ig-bio-name">
                  {name} <FaCheckCircle style={{ color: "#1d9bf0", marginLeft: 4 }} size={12} />
                </div>
                <div className="ig-bio-title">Systems Engineer · Founder @ SideQuest</div>
                <div>{summary}</div>
                <div style={{ marginTop: 8 }}>
                  📍 California, US · ☕ Coffee · 🎮 Gamer · 🐕 Frenchie dad
                </div>
                <a
                  href="https://www.rosendoinzunza.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-bio-link"
                  style={{ marginTop: 6, display: "inline-block" }}
                >
                  rosendoinzunza.com
                </a>
              </div>
            </div>
          </section>

          {/* Mobile stats row */}
          <div className="ig-mobile-stats">
            <div><strong>{allPosts.length}</strong><span>posts</span></div>
            <div><strong>{experience.length * 1200 + skillCount * 87}</strong><span>followers</span></div>
            <div><strong>{skillCount}</strong><span>following</span></div>
          </div>

          {/* ============ Meta hiring banner ============ */}
          <div className="ig-meta-banner">
            <div className="ig-meta-banner-text">
              <span className="ig-meta-banner-title">Hello, Meta 👋</span>
              <span className="ig-meta-banner-sub">
                This profile was built for your team. Tap any post to see the receipts.
              </span>
            </div>
            <a href={`mailto:${email}`} className="ig-meta-banner-btn">
              Reach out →
            </a>
          </div>

          {/* ============ Highlights (skills) ============ */}
          <div className="ig-highlights">
            {Object.entries(skills).map(([category, items]) => (
              <button
                key={category}
                className="ig-highlight"
                onClick={() =>
                  setOpen({
                    id: `skill-${category}`,
                    cover: IG_GRADIENT,
                    pill: "Highlight",
                    caption: `${category}: ${items.length} tools`,
                    company: category,
                    title: category,
                    period: "Stack",
                    bullets: items,
                    likes: items.length * 142,
                  })
                }
              >
                <div className="ig-highlight-ring">
                  <div className="ig-highlight-bubble">{initials(category)}</div>
                </div>
                <span className="ig-highlight-label">{category}</span>
              </button>
            ))}
          </div>

          {/* ============ Tabs ============ */}
          <div className="ig-tabs">
            <button
              className={`ig-tab ${tab === "posts" ? "active" : ""}`}
              onClick={() => setTab("posts")}
            >
              <FaTh /> <span>Posts</span>
            </button>
            <button
              className={`ig-tab ${tab === "reels" ? "active" : ""}`}
              onClick={() => setTab("reels")}
            >
              <FaRegPlayCircle /> <span>Reels</span>
            </button>
            <button
              className={`ig-tab ${tab === "tagged" ? "active" : ""}`}
              onClick={() => setTab("tagged")}
            >
              <FaRegUser /> <span>Tagged</span>
            </button>
          </div>

          {/* ============ Grid ============ */}
          {tab === "tagged" ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#737373" }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fafafa", marginBottom: 8 }}>
                Photos of you
              </div>
              <div style={{ fontSize: 14 }}>
                When people tag you in photos, they'll appear here.
              </div>
            </div>
          ) : (
            <div className="ig-grid">
              {visiblePosts.map((post) => (
                <div
                  key={post.id}
                  className="ig-post"
                  onClick={() => setOpen(post)}
                  style={{ background: post.cover }}
                >
                  <div className="ig-post-cover" style={{ background: post.cover }}>
                    {post.logo ? (
                      <img
                        src={`${import.meta.env.BASE_URL}${post.logo}`}
                        alt={post.company}
                      />
                    ) : (
                      <span>{post.company}</span>
                    )}
                  </div>
                  <span className="ig-post-pill">{post.pill}</span>
                  <div className="ig-post-hover">
                    <span className="ig-post-hover-item">
                      <FaHeart /> {post.likes.toLocaleString()}
                    </span>
                    <span className="ig-post-hover-item">
                      <FaRegComment /> {post.bullets.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <footer className="ig-footer">
            <div style={{ marginBottom: 8 }}>
              <Link to="/">Home</Link>·
              <Link to="/resume">Resume</Link>·
              <Link to="/projects">Projects</Link>·
              <Link to="/spotify">Spotify</Link>·
              <Link to="/netflix">Netflix</Link>·
              <Link to="/nvidia">Nvidia</Link>
            </div>
            <div>© {new Date().getFullYear()} {name} · Unofficial Instagram-style résumé. Not affiliated with Meta.</div>
          </footer>
        </main>

        {/* ============ Bottom nav (mobile) ============ */}
        <nav className="ig-bottom-nav">
          <Link to="/" aria-label="Home"><FaHome /></Link>
          <button aria-label="Search"><FaSearch /></button>
          <button aria-label="New"><FaPlusSquare /></button>
          <button aria-label="Reels"><FaRegPlayCircle /></button>
          <button className="me-avatar" aria-label="Profile">
            <img src={`${import.meta.env.BASE_URL}ro.jpg`} alt={name} />
          </button>
        </nav>

        {/* ============ Modal ============ */}
        {open && (
          <div className="ig-modal-backdrop" onClick={() => setOpen(null)}>
            <button
              className="ig-modal-close"
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <div className="ig-modal" onClick={(e) => e.stopPropagation()}>
              <div className="ig-modal-image" style={{ background: open.cover }}>
                {open.logo ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${open.logo}`}
                    alt={open.company}
                  />
                ) : (
                  <span>{open.company}</span>
                )}
              </div>

              <div className="ig-modal-side">
                <div className="ig-modal-head">
                  <div className="ig-modal-head-avatar">
                    <img src={`${import.meta.env.BASE_URL}ro.jpg`} alt={name} />
                  </div>
                  <div className="ig-modal-head-meta">
                    <div className="ig-modal-head-name">
                      ro.inzunza <FaCheckCircle className="ig-verified" size={12} />
                    </div>
                    <div className="ig-modal-head-sub">
                      {open.location ?? open.company}
                    </div>
                  </div>
                  <button
                    className="ig-icon-btn"
                    style={{ background: "transparent" }}
                    aria-label="More"
                  >
                    <FaEllipsisH size={12} />
                  </button>
                </div>

                <div className="ig-modal-comments">
                  <div className="ig-comment">
                    <div className="ig-comment-avatar">
                      <div className="ig-comment-avatar-inner">
                        <img
                          src={`${import.meta.env.BASE_URL}ro.jpg`}
                          alt={name}
                          style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="ig-comment-body">
                      <span className="ig-comment-handle">ro.inzunza</span>
                      <span className="ig-comment-text">
                        <strong>{open.title}</strong>
                        {" · "}
                        <span style={{ color: "#a8a8a8" }}>{open.period}</span>
                      </span>
                      {open.summary && (
                        <div className="ig-comment-text" style={{ marginTop: 6 }}>
                          {open.summary}
                        </div>
                      )}
                      {open.url && (
                        <a
                          href={open.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ig-bio-link"
                          style={{ display: "inline-block", marginTop: 6 }}
                        >
                          {open.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                        </a>
                      )}
                    </div>
                  </div>

                  {open.bullets.map((b, i) => (
                    <div className="ig-comment" key={i}>
                      <div className="ig-comment-avatar">
                        <div className="ig-comment-avatar-inner">{(i + 1).toString()}</div>
                      </div>
                      <div className="ig-comment-body">
                        <span className="ig-comment-handle">
                          {handleFrom(open.company) || "ship"}.team
                        </span>
                        <span className="ig-comment-text">{b}</span>
                        <div className="ig-comment-meta">
                          <span>{Math.round(open.likes / (i + 3)).toLocaleString()} likes</span>
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="ig-modal-actions">
                  <button
                    onClick={() => toggle(liked, open.id, setLiked)}
                    aria-label="Like"
                    className={liked.has(open.id) ? "liked" : ""}
                  >
                    {liked.has(open.id) ? <FaHeart /> : <FaRegHeart />}
                  </button>
                  <button aria-label="Comment"><FaRegComment /></button>
                  <button aria-label="Share"><FaRegPaperPlane /></button>
                  <button
                    className="right"
                    onClick={() => toggle(saved, open.id, setSaved)}
                    aria-label="Save"
                  >
                    <FaRegBookmark style={{ color: saved.has(open.id) ? "#fafafa" : undefined }} />
                  </button>
                </div>

                <div className="ig-modal-likes">
                  {(open.likes + (liked.has(open.id) ? 1 : 0)).toLocaleString()} likes
                </div>
                <div className="ig-modal-time">{open.period}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
