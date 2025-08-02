import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const responses: Record<string, string | string[]> = {
  whoami: [
    "Rosendo Inzunza is a software engineer who loves solving real-world problems through thoughtful design and performant code.",
    "He enjoys building beautiful user experiences, contributing to impactful projects, and sipping cold brew while learning new things.",
  ],
  projects: [
    "SideQuest (iOS/Flutter) – A local job discovery platform with swiping, messaging, and profile matching.",
    "MTG Deck Tracker – A web-based Magic: The Gathering deck optimizer with interactive sideboard tools.",
    "IronForm Extractor – A document parser that pulls steelwork sections from PDFs using ML and spaCy.",
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
    "🐙 github.com/rosendoinzunza",
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
  "╲____╱___╱╲________╱╲________╱╲__╱_____╱   ",
],

  help: [
    "Available commands:",
    "- whoami     → About Rosendo",
    "- projects   → Rosendo's Projects",
    "- skills     → Rosendo background",
    "- contact    → Contact information",
    "- coffee     → Go to coffee order(s)",
    "- ascii      → Show ASCII logo",
    "- help       → Available commands",
  ],
};

export default function AboutPage() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [promptText, setPromptText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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
    const rawOutput = responses[command.trim()];
    const outputLines =
      typeof rawOutput === "string" ? [rawOutput] : rawOutput || [`zsh: command not found: ${command}`];

    // animate line-by-line
    setTerminalLines((prev) => [...prev, `➜ ~ ${command}`]);
    outputLines.forEach((line, i) => {
      setTimeout(() => {
        setTerminalLines((prev) => [...prev, line]);
      }, 200 * i);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() === "") return;
    handleCommand(currentInput);
    setCurrentInput("");
  };

  useEffect(() => {
    inputRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLines]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 font-sans text-gray-900 dark:text-white bg-transparent z-10">
      {/* Blurred Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="./public/ro.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30 blur-lg scale-110"
        />
        <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Terminal Glass Card */}
      <section className="w-full max-w-4xl px-4">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">About Me</h2>

        <div className="bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg font-mono text-sm text-left text-gray-800 dark:text-gray-200 overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-white/20 bg-white/20 dark:bg-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Terminal Body */}
          <div className="p-4 overflow-y-auto max-h-[60vh] space-y-4">
            {/* Initial prompt typing */}
            <div className="text-blue-500">
              {promptText}
              {promptText.length < promptFull.length && (
                <span className="animate-blink ml-1">|</span>
              )}
            </div>

            {/* Command responses */}
            {terminalLines.map((line, i) => (
              <pre key={i} className="whitespace-pre-wrap leading-relaxed">
                {line}
              </pre>
            ))}

            {/* Command Input */}
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-blue-500">➜ ~</span>
              <input
                type="text"
                ref={inputRef}
                autoFocus
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                className="bg-transparent border-none outline-none ml-2 w-full placeholder-gray-400 text-gray-800 dark:text-gray-100 caret-blue-500"
                placeholder="Type a command (try 'help')..."
              />
            </form>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm hover:bg-white/50 dark:hover:bg-white/20 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
