import { Link } from "react-router-dom";
import { resumeData } from "../data/resumeData";

const { name, email, website, phone, experience, stack, project, education } = resumeData;

const styles = `
  .rv-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0d0d0d;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 16px 80px;
  }

  .rv-inner {
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .rv-card {
    background: #141414;
    border: 1px solid #262626;
    border-radius: 16px;
    padding: 24px;
  }

  .rv-name {
    font-size: 20px;
    font-weight: 800;
    color: #f0f0f0;
    letter-spacing: -0.3px;
    margin-bottom: 6px;
  }

  .rv-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;
  }

  .rv-contact a,
  .rv-contact span {
    font-size: 12px;
    color: #777;
    text-decoration: none;
    transition: color 0.15s;
  }

  .rv-contact a:hover { color: #60CD8B; }

  .rv-section-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #60CD8B;
    margin-bottom: 16px;
  }

  .rv-divider {
    height: 1px;
    background: #262626;
    margin: 4px 0;
  }

  /* Experience */
  .rv-job {
    background: #1a1a1a;
    border: 1px solid #262626;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 10px;
  }

  .rv-job:last-child { margin-bottom: 0; }

  .rv-job-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 2px;
  }

  .rv-job-title {
    font-size: 13px;
    font-weight: 700;
    color: #f0f0f0;
  }

  .rv-job-period {
    font-size: 11px;
    color: #555;
    white-space: nowrap;
  }

  .rv-job-company {
    font-size: 11px;
    font-weight: 600;
    color: #60CD8B;
    margin-bottom: 10px;
  }

  .rv-job-summary {
    font-size: 12px;
    line-height: 1.65;
    color: #888;
    margin-bottom: 10px;
  }

  .rv-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .rv-bullets li {
    display: flex;
    gap: 8px;
    font-size: 12px;
    line-height: 1.65;
    color: #777;
  }

  .rv-bullet-dash {
    color: #333;
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* Stack chips */
  .rv-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .rv-chip {
    font-size: 11px;
    font-weight: 500;
    color: #aaa;
    background: #1a1a1a;
    border: 1px solid #2e2e2e;
    padding: 4px 10px;
    border-radius: 20px;
  }

  /* Project */
  .rv-project-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 2px;
  }

  .rv-project-name {
    font-size: 13px;
    font-weight: 700;
    color: #f0f0f0;
  }

  .rv-project-url {
    font-size: 11px;
    color: #60CD8B;
    text-decoration: none;
    transition: opacity 0.15s;
  }

  .rv-project-url:hover { opacity: 0.7; }

  .rv-project-role {
    font-size: 11px;
    color: #555;
    margin-bottom: 12px;
  }

  /* Education */
  .rv-edu-degree {
    font-size: 13px;
    font-weight: 600;
    color: #f0f0f0;
    margin-bottom: 2px;
  }

  .rv-edu-school {
    font-size: 12px;
    color: #555;
  }

  /* Back link */
  .rv-back {
    font-size: 12px;
    font-weight: 500;
    color: #777;
    text-decoration: none;
    padding: 6px 14px;
    border-radius: 20px;
    border: 1px solid #2e2e2e;
    background: #141414;
    transition: border-color 0.15s, color 0.15s;
    align-self: flex-start;
  }

  .rv-back:hover {
    border-color: #60CD8B;
    color: #60CD8B;
  }
`;

export default function ResumePage() {
  return (
    <>
      <style>{styles}</style>
      <div className="rv-page">
        <div className="rv-inner">

          {/* Header */}
          <div className="rv-card">
            <div className="rv-name">{name}</div>
            <div className="rv-contact">
              <a href={`mailto:${email}`}>{email}</a>
              <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">{website}</a>
              <span>{phone}</span>
            </div>
          </div>

          {/* Experience */}
          <div className="rv-card">
            <div className="rv-section-label">Experience</div>
            {experience.map((job, i) => (
              <div key={i} className="rv-job">
                <div className="rv-job-header">
                  <div className="rv-job-title">{job.title}</div>
                  <div className="rv-job-period">{job.period}</div>
                </div>
                <div className="rv-job-company">{job.company} · {job.location}</div>
                {job.summary && <div className="rv-job-summary">{job.summary}</div>}
                <ul className="rv-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="rv-bullet-dash">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="rv-card">
            <div className="rv-section-label">Technical Stack</div>
            <div className="rv-chips">
              {stack.map((s) => <span key={s} className="rv-chip">{s}</span>)}
            </div>
          </div>

          {/* Startup Project */}
          <div className="rv-card">
            <div className="rv-section-label">Startup Project</div>
            <div className="rv-project-header">
              <div className="rv-project-name">{project.name}</div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="rv-project-url">
                {project.url.replace("https://", "")}
              </a>
            </div>
            <div className="rv-project-role">{project.role} · {project.tech}</div>
            <ul className="rv-bullets">
              {project.bullets.map((b, i) => (
                <li key={i}>
                  <span className="rv-bullet-dash">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="rv-card">
            <div className="rv-section-label">Education</div>
            <div className="rv-edu-degree">{education.degree}</div>
            <div className="rv-edu-school">{education.school}</div>
          </div>

          <Link to="/" className="rv-back">← Back to Home</Link>

        </div>
      </div>
    </>
  );
}
