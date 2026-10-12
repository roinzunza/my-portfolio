import { useState } from "react";
import { portfolioWork, resumeData, type PortfolioWorkItem } from "../data/resumeData";
import RoGPT from "./RoGPT";

type Tab = "projects" | "resume" | "contact" | "rogpt";

const contactItems = [
  { label: "Email", caption: "Open email", href: "mailto:" + resumeData.email },
  { label: "LinkedIn", caption: "Connect with me", href: resumeData.social.linkedin },
  { label: "Instagram", caption: resumeData.social.instagram ? "Follow me" : "URL not configured", href: resumeData.social.instagram },
  { label: "GitHub", caption: "View my code", href: resumeData.social.github },
];
const projectIds = ["stackscape", "traderpost"];
const visibleProjects = projectIds.map((id) => portfolioWork.find((item) => item.id === id)).filter((item): item is PortfolioWorkItem => Boolean(item));

function ProjectRows({ selected, onSelect }: { selected: string; onSelect: (id: string) => void }) {
  return <div className="app-list" aria-label="Projects">
    {visibleProjects.map((item) => (
      <button className={"app-row " + (selected === item.id ? "selected" : "")} key={item.id} onClick={() => onSelect(item.id)} aria-pressed={selected === item.id}>
        <span className="row-copy"><strong>{item.name}</strong><small>{item.role}</small></span>
        <span className="row-date">{item.dates.includes("to") ? item.dates.replace(/^0[0-9]\//, "").replace(/0[0-9]\//, "") : ""}</span>
      </button>
    ))}
  </div>;
}

function ContactRows() {
  return <div className="app-list contact-list" aria-label="Contact links">
    {contactItems.map((item) => item.href ? (
      <a className="app-row" href={item.href} key={item.label} target={item.label === "Email" ? undefined : "_blank"} rel={item.label === "Email" ? undefined : "noreferrer"}>
        <span className="row-copy"><strong>{item.label}</strong><small>{item.caption}</small></span><span className="row-arrow" aria-hidden>↗</span>
      </a>
    ) : (
      <div className="app-row unavailable" key={item.label}><span className="row-copy"><strong>{item.label}</strong><small>{item.caption}</small></span><span>—</span></div>
    ))}
  </div>;
}

function ProjectMedia({ media }: { media: NonNullable<PortfolioWorkItem["media"]> }) {
  const [muted, setMuted] = useState(true);
  if (media.kind !== "video") return <figure className="detail-media"><img src={media.src} alt={media.alt} loading="lazy" decoding="async" /></figure>;
  const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return <figure className="detail-reel">
    <div className="reel-phone">
      <video src={media.src} poster={media.poster} aria-label={media.alt} autoPlay={!reduceMotion} controls={reduceMotion} muted={muted} loop playsInline preload="metadata" />
      {!reduceMotion && <button className="reel-sound" onClick={() => setMuted((value) => !value)} aria-pressed={!muted}>{muted ? "Sound off" : "Sound on"}</button>}
    </div>
  </figure>;
}

function ProjectDetail({ item, onBack }: { item: PortfolioWorkItem; onBack: () => void }) {
  const lead = item.highlights.slice(0, 2);
  const supporting = item.highlights.slice(2);
  return <article className="work-detail">
    <button className="detail-back" onClick={onBack}>← Projects</button>
    <header className="detail-header">
      <div><p className="detail-kicker">{item.dates}</p><h2>{item.name}</h2><p className="detail-role">{item.role}</p></div>
      {item.url && <a className="detail-header-link" href={item.url} target="_blank" rel="noreferrer">{item.linkLabel ?? "Visit project ↗"}</a>}
    </header>
    <p className="detail-intro">{item.shortSummary}</p>
    {item.media && <ProjectMedia media={item.media} />}
    {item.install && <section className="detail-install"><h3>Install</h3><p>{item.install.note}</p>{item.install.steps.map((step) => <div key={step.command}><span>{step.label}</span><code><b aria-hidden>$</b>{step.command}</code></div>)}</section>}
    <div className="detail-featured">
      {lead.map((point, index) => <section key={point}><span>0{index + 1}</span><p>{point}</p></section>)}
    </div>
    {supporting.length > 0 && <section className="detail-more"><h3>More of the work</h3>{supporting.map((point) => <p key={point}>{point}</p>)}</section>}
    <section className="detail-tech"><h3>Technologies</h3><div>{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>
    {item.url && <a className="detail-link" href={item.url} target="_blank" rel="noreferrer">{item.linkLabel ?? "Visit project ↗"}</a>}
  </article>;
}

function ResumePanel({ onBack }: { onBack: () => void }) {
  return <article className="resume-panel">
    <button className="detail-back" onClick={onBack}>← Back</button>
    <header className="resume-panel-head">
      <div><p className="detail-kicker">Resume · 2026</p><h2>Rosendo Inzunza</h2><p>Software &amp; AI Engineer · Backend, Distributed Systems &amp; Agentic AI</p></div>
    </header>
    <p className="resume-panel-summary">{resumeData.summary}</p>
    <section className="resume-panel-section">
      <h3>Experience</h3>
      {portfolioWork.filter((item) => !projectIds.includes(item.id)).map((item) => <div className="resume-line" key={item.id}><div><strong>{item.name}</strong><span>{item.role}</span></div><time>{item.dates}</time></div>)}
    </section>
    <section className="resume-panel-section">
      <h3>Selected projects</h3>
      {visibleProjects.map((item) => <div className="resume-line" key={item.id}><div><strong>{item.name}</strong><span>{item.role} · {item.id === "traderpost" ? "peer-to-peer trading card marketplace" : "3D system design maps from your repo"}</span></div></div>)}
    </section>
    <section className="resume-panel-section">
      <h3>Skills</h3>
      <div className="resume-panel-skills">{Object.entries(resumeData.skills).map(([category, items]) => <div key={category}><strong>{category}</strong><span>{items.join(" · ")}</span></div>)}</div>
    </section>
    <section className="resume-panel-section">
      <h3>Education</h3>
      <div className="resume-line"><div><strong>{resumeData.education.degree}</strong><span>{resumeData.education.school}</span></div></div>
    </section>
  </article>;
}

export default function PortfolioShell() {
  const [tab, setTab] = useState<Tab>("projects");
  const [selectedId, setSelectedId] = useState(visibleProjects[0].id);
  const [showMobileDetail, setShowMobileDetail] = useState(false);
  const selected = visibleProjects.find((item) => item.id === selectedId) ?? visibleProjects[0];

  function selectProject(id: string) {
    setSelectedId(id);
    setShowMobileDetail(true);
  }

  function selectTab(next: Tab) {
    setTab(next);
    setShowMobileDetail(next !== "projects");
  }

  return <main className="portfolio-page">
    <div className="portfolio-card">
      <aside className={"app-sidebar " + (showMobileDetail ? "mobile-away" : "")}>
        <header className="profile-header">
          <img src="/ro.jpg" alt="" />
          <div><h1>Rosendo Inzunza</h1><p>Software &amp; AI Engineer</p><small>Backend, Distributed Systems &amp; Agentic AI</small></div>
        </header>
        <nav className="app-tabs" aria-label="Portfolio sections">
          {(["projects", "resume", "contact", "rogpt"] as Tab[]).map((item) => <button className={tab === item ? "active" : ""} key={item} aria-pressed={tab === item} onClick={() => selectTab(item)}>{item === "rogpt" ? "RoGPT" : item[0].toUpperCase() + item.slice(1)}</button>)}
        </nav>
        <div className="sidebar-scroll">{tab === "contact" ? <ContactRows /> : tab === "projects" ? <ProjectRows selected={selectedId} onSelect={selectProject} /> : <div className="sidebar-note"><strong>{tab === "resume" ? "Professional overview" : "Ro's digital clone"}</strong><p>{tab === "resume" ? "Experience, skills, projects, and education in one view." : "Knows the resume."}</p></div>}</div>
      </aside>
      <section className={"app-view " + (tab === "rogpt" ? "chat-view " : "") + (showMobileDetail ? "mobile-current" : "")} key={tab + selectedId}>
        {tab === "projects" && <ProjectDetail item={selected} onBack={() => setShowMobileDetail(false)} />}
        {tab === "resume" && <ResumePanel onBack={() => setShowMobileDetail(false)} />}
        {tab === "contact" && <div className="contact-detail"><button className="detail-back" onClick={() => setShowMobileDetail(false)}>← Back</button><p className="detail-kicker">Contact</p><h2>Let’s talk.</h2><p>I’m always happy to hear about an interesting systems problem, a thoughtful product, or a team doing ambitious engineering work.</p><a href={"mailto:" + resumeData.email}>{resumeData.email} ↗</a><div className="mobile-contact-links"><ContactRows /></div></div>}
        {tab === "rogpt" && <><button className="detail-back chat-back" onClick={() => setShowMobileDetail(false)}>← Back</button><RoGPT /></>}
      </section>
    </div>
  </main>;
}
