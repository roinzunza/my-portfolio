import { useEffect } from "react";
import { resumeData } from "../data/resumeData";

const styles = `
  .resume { min-height: 100vh; padding: 145px 24px 90px; background: radial-gradient(circle at 92% 5%, rgba(105,123,255,.12), transparent 28%), #080a0d; color: #f2f4f7; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
  .resume-inner { width: min(980px, 100%); margin: 0 auto; }
  .resume-header { margin-bottom: 90px; }
  .resume-kicker, .resume-section-title { color: #7f91ff; font: 650 .76rem/1.2 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .12em; text-transform: uppercase; }
  .resume-name { margin: 20px 0 14px; font-size: clamp(3.7rem, 9vw, 6.8rem); line-height: .95; letter-spacing: -.07em; font-weight: 520; }
  .resume-role { color: #a7aeba; font-size: 1.18rem; margin-bottom: 30px; }
  .resume-contact { display: flex; flex-wrap: wrap; gap: 10px 22px; color: #7d8592; font-size: .84rem; }
  .resume-contact a { color: #aab1bd; text-decoration: none; border-bottom: 1px solid #343a45; }
  .resume-contact a:hover { color: #fff; }
  .resume-section { display: grid; grid-template-columns: 190px minmax(0,1fr); gap: 45px; padding: 58px 0; border-top: 1px solid #252a33; }
  .resume-summary { margin: 0; color: #b0b6c0; font-size: 1.08rem; line-height: 1.78; }
  .resume-competencies { margin: 0; color: #a7aeba; line-height: 1.9; }
  .resume-job { padding-bottom: 38px; margin-bottom: 38px; border-bottom: 1px solid #20242b; }
  .resume-job:last-child { margin-bottom: 0; padding-bottom: 0; border: 0; }
  .resume-job-head { display: flex; justify-content: space-between; align-items: baseline; gap: 20px; margin-bottom: 6px; }
  .resume-job h3 { margin: 0; font-size: 1.08rem; font-weight: 680; letter-spacing: -.02em; }
  .resume-company { color: #7f91ff; }
  .resume-date { flex: none; color: #69717e; font: .72rem ui-monospace, monospace; letter-spacing: .04em; text-transform: uppercase; }
  .resume-location { margin: 0 0 18px; color: #717987; font-size: .8rem; }
  .resume-list { margin: 0; padding-left: 18px; color: #9da4b0; }
  .resume-list li { padding-left: 7px; margin-bottom: 10px; line-height: 1.65; }
  .resume-list li::marker { color: #6578ee; }
  .resume-skills { display: grid; gap: 18px; }
  .resume-skill { display: grid; grid-template-columns: 170px 1fr; gap: 24px; }
  .resume-skill strong { color: #d8dbe1; font-size: .82rem; }
  .resume-skill span { color: #929aa7; font-size: .88rem; line-height: 1.65; }
  .resume-project-head, .resume-edu-head { display: flex; justify-content: space-between; gap: 20px; align-items: baseline; margin-bottom: 12px; }
  .resume-project h3, .resume-edu h3 { margin: 0; font-size: 1.3rem; letter-spacing: -.03em; }
  .resume-project a { color: #7f91ff; text-decoration: none; font-size: .82rem; }
  .resume-project-intro, .resume-edu p { color: #858d99; line-height: 1.65; }
  @media (max-width: 720px) {
    .resume { padding: 120px 16px 70px; }
    .resume-header { margin-bottom: 70px; }
    .resume-section { grid-template-columns: 1fr; gap: 26px; padding: 48px 0; }
    .resume-job-head, .resume-project-head, .resume-edu-head { align-items: flex-start; flex-direction: column; gap: 7px; }
    .resume-skill { grid-template-columns: 1fr; gap: 5px; }
  }
`;

export default function ResumePage() {
  useEffect(() => { document.title = "Resume — Rosendo Inzunza"; }, []);
  const { summary, competencies, experience, skills, project, education } = resumeData;
  return <><style>{styles}</style><main className="resume"><div className="resume-inner">
    <header className="resume-header"><span className="resume-kicker">Resume / 2026</span><h1 className="resume-name">Rosendo Inzunza</h1><div className="resume-role">Systems Engineer</div><div className="resume-contact"><span>La Habra, CA</span><a href="tel:+17143427492">714-342-7492</a><a href="mailto:RosendoInzunza@gmail.com">RosendoInzunza@gmail.com</a><a href="https://linkedin.com/in/rosendoinzunza" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/roinzunza" target="_blank" rel="noreferrer">GitHub ↗</a></div></header>
    <section className="resume-section"><h2 className="resume-section-title">Profile</h2><p className="resume-summary">{summary}</p></section>
    <section className="resume-section"><h2 className="resume-section-title">Core competencies</h2><p className="resume-competencies">{competencies.join(" · ")}</p></section>
    <section className="resume-section"><h2 className="resume-section-title">Experience</h2><div>{experience.map((job) => <article className="resume-job" key={job.company}><div className="resume-job-head"><h3>{job.title} <span className="resume-company">· {job.company}</span></h3><span className="resume-date">{job.period}</span></div><p className="resume-location">{job.location}</p><ul className="resume-list">{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div></section>
    <section className="resume-section"><h2 className="resume-section-title">Technical skills</h2><div className="resume-skills">{Object.entries(skills).map(([category, items]) => <div className="resume-skill" key={category}><strong>{category}</strong><span>{items.join(" · ")}</span></div>)}</div></section>
    <section className="resume-section"><h2 className="resume-section-title">Project</h2><article className="resume-project"><div className="resume-project-head"><h3>{project.name}</h3><a href={project.url} target="_blank" rel="noreferrer">sidequestapp.io ↗</a></div><p className="resume-project-intro">{project.description}</p><ul className="resume-list">{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article></section>
    <section className="resume-section"><h2 className="resume-section-title">Education</h2><article className="resume-edu"><div className="resume-edu-head"><h3>{education.degree}</h3><span className="resume-date">2019</span></div><p>California State University, Fullerton</p></article></section>
  </div></main></>;
}
