import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const responses: Record<string, string | string[]> = {
  whoami: [
    "Rosendo Inzunza is a software engineer who loves solving real-world problems through thoughtful design and performant code.",
    "I enjoy building beautiful user experiences, contributing to impactful projects, and sipping cold brew while learning new things.",
  ],
  projects: [
    "SideQuest (iOS/Swift + Rust) – A local job discovery platform with swiping, messaging, and profile matching.",
  ],
  skills: [
    "Skills/Tools:",
    "- Rust, Python, TypeScript",
    "- Docker, Sentry, Grafana",
    "- Axum, Actix, Poem, FastAPI, Flask",
    "- PostgreSQL, Diesel, Alembic, SeaORM",
    "- AWS (SNS, S3, EC2)",
    "",
    "*** Pulls a great double shot of espresso",
  ],
  contact: [
    "📧 rosendoinzunza@gmail.com",
    "🔗 linkedin.com/in/rosendoinzunza",
    "🐙 github.com/roinzunza",
    "📍 Based in California, US",
  ],
  coffee: [
    "Between an oatmilk cortado and an iced latte with almond milk ☕",
  ],
  ascii: [
    "    _______  ________  ________  ________ ",
    "  ╱╱       ╲╱        ╲╱        ╲╱    ╱   ╲",
    " ╱╱        ╱         _╱       ╱╱         ╱",
    "╱        _╱         ╱         ╱         ╱ ",
    "╲____╱___╱╲________╱╲________╱╲__╱_____╱  ",
  ],
  help: [
    "Available commands:",
    "- whoami     → About Rosendo",
    "- projects   → Current projects",
    "- skills     → Technical background",
    "- contact    → Contact information",
    "- coffee     → Coffee order",
    "- ascii      → ASCII logo",
    "- help       → This menu",
  ],
};

const styles = `
  .about-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0d0d0d;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 16px;
  }

  .about-inner {
    width: 100%;
    max-width: 680px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .about-title {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #60CD8B;
  }

  .terminal {
    background: #0d0d0d;
    border: 1px solid #262626;
    border-radius: 12px;
    overflow: hidden;
  }

  .terminal-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 14px;
    border-bottom: 1px solid #262626;
    background: #141414;
  }

  .terminal-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .terminal-body {
    padding: 16px;
    max-height: 60vh;
    overflow-y: auto;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 13px;
    line-height: 1.7;
    color: #ccc;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .terminal-body::-webkit-scrollbar { width: 4px; }
  .terminal-body::-webkit-scrollbar-track { background: transparent; }
  .terminal-body::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

  .terminal-prompt { color: #60CD8B; }

  .terminal-input-row {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 4px;
  }

  .terminal-input {
    background: transparent;
    border: none;
    outline: none;
    color: #f0f0f0;
    font-family: inherit;
    font-size: inherit;
    flex: 1;
    caret-color: #60CD8B;
  }

  .about-back {
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

  .about-back:hover {
    border-color: #60CD8B;
    color: #60CD8B;
  }
`;

export default function AboutPage() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [promptText, setPromptText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const promptFull = "➜ ~ whoami";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setPromptText(promptFull.slice(0, i + 1));
      i++;
      if (i === promptFull.length) {
        clearInterval(interval);
        setTimeout(() => handleCommand("whoami"), 600);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (command: string) => {
    const normalized = command.trim().toLowerCase();
    const rawOutput = responses[normalized];
    const outputLines =
      typeof rawOutput === "string"
        ? [rawOutput]
        : rawOutput || [`zsh: command not found: ${command} — try 'help'`];

    setTerminalLines((prev) => [...prev, `➜ ~ ${command}`]);
    outputLines.forEach((line, i) => {
      setTimeout(() => {
        setTerminalLines((prev) => [...prev, line]);
      }, 150 * i);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;
    handleCommand(currentInput);
    setCurrentInput("");
  };

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [terminalLines]);

  return (
    <>
      <style>{styles}</style>
      <div className="about-page">
        <div className="about-inner">
          <div className="about-title">About Me</div>

          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dot" style={{ background: "#ff5f57" }} />
              <div className="terminal-dot" style={{ background: "#febc2e" }} />
              <div className="terminal-dot" style={{ background: "#28c840" }} />
            </div>
            <div className="terminal-body" ref={bodyRef}>
              {/* Typing animation */}
              <div>
                <span className="terminal-prompt">{promptText}</span>
                {promptText.length < promptFull.length && (
                  <span style={{ opacity: 0.6 }}>|</span>
                )}
              </div>

              {terminalLines.map((line, i) => (
                <pre key={i} style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                  {line.startsWith("➜ ~")
                    ? <><span className="terminal-prompt">{line}</span></>
                    : line}
                </pre>
              ))}

              <form onSubmit={handleSubmit} className="terminal-input-row">
                <span className="terminal-prompt">➜ ~</span>
                <input
                  type="text"
                  ref={inputRef}
                  autoFocus
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  className="terminal-input"
                  placeholder="type a command (try 'help')..."
                />
              </form>
            </div>
          </div>

          <Link to="/" className="about-back">← Back to Home</Link>
        </div>
      </div>
    </>
  );
}
