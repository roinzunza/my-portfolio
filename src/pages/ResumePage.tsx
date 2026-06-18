import { useEffect } from "react";
import { resumeData } from "../data/resumeData";

const styles = `
  :root {
    --rp-bg: #0a0c14;
    --rp-card: rgba(20, 32, 72, 0.55);
    --rp-border: rgba(245, 214, 90, 0.22);
    --rp-text: #f5f1e8;
    --rp-text-2: #c4c8d4;
    --rp-text-3: rgba(196, 200, 212, 0.6);
    --rp-gold: #f5d65a;
    --rp-gold-2: #c9971a;
    --rp-navy: #1e2a4a;
  }

  .rp-page {
    min-height: 100svh;
    min-height: 100dvh;
    background:
      radial-gradient(circle at 30% 10%, rgba(58, 78, 128, 0.22) 0%, transparent 50%),
      radial-gradient(circle at 70% 90%, rgba(30, 42, 74, 0.18) 0%, transparent 50%),
      linear-gradient(180deg, #050608 0%, #0a0c14 100%);
    color: var(--rp-text);
    font-family: 'Inter', system-ui, sans-serif;
    /* Top padding small (no top nav); bottom clears the floating bottom
       nav + iOS home indicator. */
    padding:
      max(40px, env(safe-area-inset-top, 0px))
      20px
      calc(120px + env(safe-area-inset-bottom, 0px));
    position: relative;
    overflow-x: hidden;
  }

  @media (max-width: 520px) {
    .rp-page { padding-left: 16px; padding-right: 16px; }
  }

  .rp-page::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    opacity: 0.3;
    mix-blend-mode: overlay;
  }

  .rp-inner {
    max-width: 760px;
    margin: 0 auto;
    position: relative;
  }

  /* ===== HEADER ===== */
  .rp-header {
    text-align: center;
    margin-bottom: 56px;
  }
  .rp-eyebrow {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.4em;
    color: var(--rp-gold);
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  .rp-name {
    font-family: 'Bebas Neue', 'Inter', sans-serif;
    font-size: clamp(48px, 9vw, 88px);
    font-weight: 400;
    letter-spacing: 0.04em;
    line-height: 1;
    margin: 0 0 10px;
    color: #ffffff;
    text-shadow: 0 4px 24px rgba(0, 0, 0, 0.6);
  }
  .rp-role {
    font-size: 14px;
    color: var(--rp-text-2);
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 22px;
  }
  .rp-contact-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px 18px;
    font-size: 13px;
    color: var(--rp-text-2);
  }
  .rp-contact-row a {
    color: var(--rp-text-2);
    text-decoration: none;
    border-bottom: 1px dashed rgba(245, 214, 90, 0.35);
    transition: color 0.2s, border-color 0.2s;
  }
  .rp-contact-row a:hover {
    color: var(--rp-gold);
    border-bottom-color: var(--rp-gold);
  }

  /* ===== SECTION ===== */
  .rp-section { margin-bottom: 48px; }
  .rp-section-head {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 18px;
  }
  .rp-section-title {
    font-family: 'Bebas Neue', 'Inter', sans-serif;
    font-size: 26px;
    letter-spacing: 0.12em;
    line-height: 1;
    color: var(--rp-gold);
    margin: 0;
  }
  .rp-section-rule {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(245, 214, 90, 0.4) 0%, transparent 100%);
  }

  .rp-bio {
    font-size: 14.5px;
    line-height: 1.7;
    color: var(--rp-text-2);
    margin: 0;
  }

  /* ===== JOB ===== */
  .rp-job {
    background: var(--rp-card);
    border: 1px solid var(--rp-border);
    border-radius: 14px;
    padding: 20px 22px;
    margin-bottom: 14px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .rp-job-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 4px;
  }
  .rp-job-title {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: var(--rp-text);
    letter-spacing: -0.01em;
  }
  .rp-job-title em {
    color: var(--rp-gold);
    font-style: normal;
  }
  .rp-job-meta {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: var(--rp-text-3);
    text-transform: uppercase;
    white-space: nowrap;
  }
  .rp-job-location {
    font-size: 12px;
    color: var(--rp-text-3);
    margin: 0 0 12px;
  }
  .rp-job-summary {
    font-size: 13.5px;
    line-height: 1.6;
    color: var(--rp-text-2);
    margin: 0 0 12px;
    font-style: italic;
  }
  .rp-bullets {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .rp-bullets li {
    position: relative;
    padding-left: 20px;
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--rp-text-2);
  }
  .rp-bullets li::before {
    content: "✦";
    position: absolute;
    left: 0;
    top: 0;
    color: var(--rp-gold);
    font-size: 11px;
    line-height: 1.55;
  }

  /* ===== SKILLS ===== */
  .rp-skill-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }
  @media (min-width: 600px) {
    .rp-skill-grid { grid-template-columns: 160px 1fr; row-gap: 14px; column-gap: 18px; }
  }
  .rp-skill-cat {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.16em;
    color: var(--rp-gold);
    text-transform: uppercase;
    align-self: start;
    padding-top: 4px;
  }
  .rp-skill-list {
    font-size: 13.5px;
    line-height: 1.6;
    color: var(--rp-text-2);
    margin: 0 0 8px;
  }

  /* ===== PROJECT ===== */
  .rp-project {
    background: var(--rp-card);
    border: 1px solid var(--rp-border);
    border-radius: 14px;
    padding: 22px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .rp-project-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 6px;
  }
  .rp-project-name {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: var(--rp-text);
  }
  .rp-project-url {
    color: var(--rp-gold);
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
  }
  .rp-project-url:hover { text-decoration: underline; }
  .rp-project-role {
    font-size: 12px;
    color: var(--rp-text-3);
    margin: 0 0 14px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  /* ===== EDUCATION ===== */
  .rp-edu {
    background: var(--rp-card);
    border: 1px solid var(--rp-border);
    border-radius: 14px;
    padding: 20px 22px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .rp-edu-degree {
    margin: 0 0 4px;
    font-size: 15px;
    font-weight: 700;
    color: var(--rp-text);
  }
  .rp-edu-school {
    margin: 0;
    font-size: 13px;
    color: var(--rp-text-2);
  }
`;

export default function ResumePage() {
  useEffect(() => {
    document.title = "Resume · Rosendo Inzunza";
  }, []);

  const { summary, experience, skills, project, education } = resumeData;

  return (
    <>
      <style>{styles}</style>
      <div className="rp-page">
        <div className="rp-inner">

          {/* HEADER */}
          <header className="rp-header">
            <div className="rp-eyebrow">Resume · Founders Edition</div>
            <h1 className="rp-name">Rosendo Inzunza</h1>
            <div className="rp-role">Systems Engineer</div>
            <div className="rp-contact-row">
              <a href="mailto:rosendoinzunza@gmail.com">rosendoinzunza@gmail.com</a>
              <a href="tel:+17143427492">714-342-7492</a>
              <a href="https://github.com/roinzunza" target="_blank" rel="noopener noreferrer">github.com/roinzunza</a>
              <a href="https://www.linkedin.com/in/rosendoinzunza" target="_blank" rel="noopener noreferrer">linkedin.com/in/rosendoinzunza</a>
              <span>La Habra, CA</span>
            </div>
          </header>

          {/* SUMMARY */}
          <section className="rp-section">
            <div className="rp-section-head">
              <h2 className="rp-section-title">Summary</h2>
              <div className="rp-section-rule" />
            </div>
            <p className="rp-bio">{summary}</p>
          </section>

          {/* EXPERIENCE */}
          <section className="rp-section">
            <div className="rp-section-head">
              <h2 className="rp-section-title">Experience</h2>
              <div className="rp-section-rule" />
            </div>
            {experience.map((job, i) => (
              <article key={i} className="rp-job">
                <div className="rp-job-head">
                  <h3 className="rp-job-title">
                    {job.title} <em>· {job.company}</em>
                  </h3>
                  <div className="rp-job-meta">{job.period}</div>
                </div>
                <p className="rp-job-location">{job.location}</p>
                {job.summary && <p className="rp-job-summary">{job.summary}</p>}
                <ul className="rp-bullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </article>
            ))}
          </section>

          {/* SKILLS */}
          <section className="rp-section">
            <div className="rp-section-head">
              <h2 className="rp-section-title">Technical Skills</h2>
              <div className="rp-section-rule" />
            </div>
            <div className="rp-skill-grid">
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat} style={{ display: "contents" }}>
                  <div className="rp-skill-cat">{cat}</div>
                  <div className="rp-skill-list">{items.join(" · ")}</div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="rp-section">
            <div className="rp-section-head">
              <h2 className="rp-section-title">Projects</h2>
              <div className="rp-section-rule" />
            </div>
            <div className="rp-project">
              <div className="rp-project-head">
                <h3 className="rp-project-name">{project.name}</h3>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="rp-project-url">
                  {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                </a>
              </div>
              <p className="rp-project-role">{project.role} · {project.tech}</p>
              <ul className="rp-bullets">
                {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="rp-section">
            <div className="rp-section-head">
              <h2 className="rp-section-title">Education</h2>
              <div className="rp-section-rule" />
            </div>
            <div className="rp-edu">
              <h3 className="rp-edu-degree">{education.degree}</h3>
              <p className="rp-edu-school">{education.school}</p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
