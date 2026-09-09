import { useState } from "react";
import { portfolioWork, resumeData, type PortfolioWorkItem } from "../data/resumeData";
import RoGPT from "./RoGPT";

type Tab = "work" | "resume" | "contact" | "rogpt";

const contactItems = [
  { label: "Email", caption: "Open email", href: "mailto:" + resumeData.email },
  { label: "LinkedIn", caption: "Connect with me", href: resumeData.social.linkedin },
  { label: "Instagram", caption: resumeData.social.instagram ? "Follow me" : "URL not configured", href: resumeData.social.instagram },
  { label: "GitHub", caption: "View my code", href: resumeData.social.github },
];
const visibleWork = portfolioWork.filter((item) => item.id === "sidequest");

function WorkRows({ selected, onSelect }: { selected: string; onSelect: (id: string) => void }) {
  return <div className="app-list" aria-label="Work experience">
    {visibleWork.map((item) => (
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

function WorkDetail({ item, onBack }: { item: PortfolioWorkItem; onBack: () => void }) {
  const lead = item.highlights.slice(0, 2);
  const supporting = item.highlights.slice(2);
  return <article className="work-detail">
    <button className="detail-back" onClick={onBack}>← Work</button>
    <header className="detail-header">
      <div><p className="detail-kicker">{item.dates}</p><h2>{item.name}</h2><p className="detail-role">{item.role}</p></div>
    </header>
    <p className="detail-intro">{item.shortSummary}</p>
    <div className="detail-featured">
      {lead.map((point, index) => <section key={point}><span>0{index + 1}</span><p>{point}</p></section>)}
    </div>
    {supporting.length > 0 && <section className="detail-more"><h3>More of the work</h3>{supporting.map((point) => <p key={point}>{point}</p>)}</section>}
    <section className="detail-tech"><h3>Technologies</h3><div>{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>
    {item.url && <a className="detail-link" href={item.url} target="_blank" rel="noreferrer">Visit project ↗</a>}
  </article>;
}

function ResumePanel({ onBack }: { onBack: () => void }) {
  return <article className="resume-panel">
    <button className="detail-back" onClick={onBack}>← Back</button>
    <header className="resume-panel-head">
      <div><p className="detail-kicker">Resume · 2026</p><h2>Rosendo Inzunza</h2><p>Software Engineer · Backend &amp; Distributed Systems</p></div>
    </header>
    <p className="resume-panel-summary">{resumeData.summary}</p>
    <section className="resume-panel-section">
      <h3>Experience</h3>
      {portfolioWork.filter((item) => item.id !== "sidequest").map((item) => <div className="resume-line" key={item.id}><div><strong>{item.name}</strong><span>{item.role}</span></div><time>{item.dates}</time></div>)}
    </section>
    <section className="resume-panel-section">
      <h3>Selected project</h3>
      <div className="resume-line"><div><strong>SideQuest</strong><span>Founder / Software Engineer · iOS job marketplace</span></div></div>
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
  const [tab, setTab] = useState<Tab>("work");
  const [selectedId, setSelectedId] = useState(visibleWork[0].id);
  const [showMobileDetail, setShowMobileDetail] = useState(false);
  const selected = visibleWork.find((item) => item.id === selectedId) ?? visibleWork[0];

  function selectWork(id: string) {
    setSelectedId(id);
    setShowMobileDetail(true);
  }

  function selectTab(next: Tab) {
    setTab(next);
    setShowMobileDetail(next !== "work");
  }

  return <main className="portfolio-page">
    <div className="portfolio-card">
      <aside className={"app-sidebar " + (showMobileDetail ? "mobile-away" : "")}>
        <header className="profile-header">
          <img src="/ro.jpg" alt="" />
          <div><h1>Rosendo Inzunza</h1><p>Software Engineer</p><small>Backend &amp; Distributed Systems</small></div>
        </header>
        <nav className="app-tabs" aria-label="Portfolio sections">
          {(["work", "resume", "contact", "rogpt"] as Tab[]).map((item) => <button className={tab === item ? "active" : ""} key={item} aria-pressed={tab === item} onClick={() => selectTab(item)}>{item === "rogpt" ? "RoGPT" : item[0].toUpperCase() + item.slice(1)}</button>)}
        </nav>
        <div className="sidebar-scroll">{tab === "contact" ? <ContactRows /> : tab === "work" ? <WorkRows selected={selectedId} onSelect={selectWork} /> : <div className="sidebar-note"><strong>{tab === "resume" ? "Professional overview" : "Ro's digital clone"}</strong><p>{tab === "resume" ? "Experience, skills, projects, and education in one view." : "Knows the resume."}</p></div>}</div>
      </aside>
      <section className={"app-view " + (tab === "rogpt" ? "chat-view " : "") + (showMobileDetail ? "mobile-current" : "")} key={tab + selectedId}>
        {tab === "work" && <WorkDetail item={selected} onBack={() => setShowMobileDetail(false)} />}
        {tab === "resume" && <ResumePanel onBack={() => setShowMobileDetail(false)} />}
        {tab === "contact" && <div className="contact-detail"><button className="detail-back" onClick={() => setShowMobileDetail(false)}>← Back</button><p className="detail-kicker">Contact</p><h2>Let’s talk.</h2><p>I’m always happy to hear about an interesting systems problem, a thoughtful product, or a team doing ambitious engineering work.</p><a href={"mailto:" + resumeData.email}>{resumeData.email} ↗</a><div className="mobile-contact-links"><ContactRows /></div></div>}
        {tab === "rogpt" && <><button className="detail-back chat-back" onClick={() => setShowMobileDetail(false)}>← Back</button><RoGPT /></>}
      </section>
    </div>
  </main>;
}
