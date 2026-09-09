import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { portfolioWork, resumeData, skillAnswer, type PortfolioWorkItem } from "../data/resumeData";

type AssistantResponse = {
  title?: string;
  subtitle?: string;
  body: string;
  highlights?: string[];
  technologies?: string[];
  link?: { href: string; label: string };
};

type Message =
  | { role: "user"; text: string }
  | { role: "assistant"; response: AssistantResponse };

const fallback: AssistantResponse = {
  body: "RoGPT only knows information Rosendo has shared here. Type /help to see what you can ask.",
};
const suggestedPrompts = ["Where did he work in 2026?", "What has he built with Rust?", "What's his coffee order?", "What is he playing?"];
let gameResponseIndex = 0;

const stopWords = new Set(["a", "about", "and", "at", "did", "do", "does", "experience", "have", "he", "his", "in", "is", "me", "rosendo", "tell", "the", "what", "where", "with", "work", "you"]);
const aliases: Record<string, string> = {
  k8s: "kubernetes",
  postgres: "postgresql",
  "machine learning": "ml infrastructure",
  sre: "site reliability",
  dft: "digital force",
};

function normalize(value: string) {
  let normalized = value.toLowerCase().replace(/[^a-z0-9+# ]/g, " ").replace(/\s+/g, " ").trim();
  Object.entries(aliases).forEach(([alias, canonical]) => {
    normalized = normalized.replace(new RegExp("\\b" + alias + "\\b", "g"), canonical);
  });
  return normalized;
}

function tokens(value: string) {
  return normalize(value).split(" ").filter((token) => token.length > 1 && !stopWords.has(token));
}

function score(question: string, tags: string[]) {
  const normalized = normalize(question);
  const questionTokens = tokens(question);
  return tags.reduce((total, tag) => {
    const value = normalize(tag);
    if (normalized.includes(value)) return total + (value.includes(" ") ? 7 : 4);
    return total + value.split(" ").filter((token) => questionTokens.includes(token)).length;
  }, 0);
}

function metadata(item: PortfolioWorkItem) {
  return item.role + " · " + item.dates;
}

function companyResponse(item: PortfolioWorkItem): AssistantResponse {
  return {
    title: item.name,
    subtitle: metadata(item),
    body: item.shortSummary,
    highlights: item.highlights.slice(0, 5),
    technologies: item.technologies,
    link: item.id === "sidequest" && item.url ? { href: item.url, label: "www.sidequestapp.io ↗" } : undefined,
  };
}

function technologyResponse(technology: string, matches: PortfolioWorkItem[]): AssistantResponse {
  const relevant = matches.slice(0, 3);
  const highlights = relevant.map((item) => {
    const exact = item.highlights.find((highlight) => normalize(highlight).includes(normalize(technology)));
    return item.name + ": " + (exact ?? item.shortSummary);
  });
  return {
    title: "Yes — " + technology,
    body: "Rosendo used " + technology + " across " + relevant.map((item) => item.name).join(", ") + ".",
    highlights,
    technologies: [technology],
    link: relevant.some((item) => item.id === "sidequest")
      ? { href: resumeData.project.url, label: "www.sidequestapp.io ↗" }
      : undefined,
  };
}

function distributedSystemsResponse(): AssistantResponse {
  const ids = ["cloudflare", "tiktok", "sidequest"];
  const items = ids.map((id) => portfolioWork.find((item) => item.id === id)).filter((item): item is PortfolioWorkItem => Boolean(item));
  return {
    title: "Distributed systems",
    body: skillAnswer.shortSummary,
    highlights: items.map((item) => item.name + ": " + item.shortSummary),
    technologies: ["Rust", "Kafka", "Redis", "Kubernetes", "PostgreSQL", "WebSockets"],
    link: { href: resumeData.project.url, label: "www.sidequestapp.io ↗" },
  };
}

function answer(question: string): AssistantResponse {
  const normalized = normalize(question);

  if (normalized === "help" || normalized.includes("what can i ask")) {
    return {
      title: "Try asking me about…",
      body: "I know Rosendo's resume, projects, tools, and a few things he enjoys off the clock.",
      highlights: [
        "Work: Cloudflare, TikTok, SideQuest, Digital Force, or CoreLogic",
        "Skills: Rust, Kafka, Kubernetes, Terraform, or distributed systems",
        "Background: languages, backend experience, or ML infrastructure",
        "Easter eggs: coffee, running, workouts, or what he's playing",
      ],
      technologies: ["/coffee", "/currently", "/help"],
    };
  }

  if (normalized.includes("coffee") || normalized.includes("latte") || normalized.includes("matcha") || normalized.includes("cortado")) {
    return {
      title: "Coffee order",
      body: "Rosendo's daily go-to is an " + resumeData.personal.coffee.goTo.toLowerCase() + ".",
      highlights: ["Sometimes he switches it up with an " + resumeData.personal.coffee.alternatives[0].toLowerCase() + " or a " + resumeData.personal.coffee.alternatives[1].toLowerCase() + "."],
    };
  }

  const asksAboutCurrentWork =
    normalized.includes("currently working") ||
    normalized.includes("current job") ||
    normalized.includes("current role") ||
    normalized.includes("where does he work") ||
    normalized.includes("where is he working") ||
    normalized.includes("work in 2026") ||
    normalized.includes("working this year") ||
    (normalized.includes("working") && (normalized.includes("year") || normalized.includes("2026")));

  if (asksAboutCurrentWork) {
    const latest = portfolioWork[0];
    return {
      title: "Latest listed role",
      subtitle: metadata(latest),
      body: "Rosendo's latest role listed in the resume is at Cloudflare, from July 2024 through May 2026.",
      highlights: latest.highlights.slice(0, 3),
      technologies: latest.technologies,
    };
  }

  if (normalized.includes("playing") || normalized.includes("ps5") || normalized.includes("game") || normalized === "currently") {
    const game = resumeData.personal.games[gameResponseIndex % resumeData.personal.games.length];
    gameResponseIndex += 1;
    return {
      title: "In the rotation",
      body: "Rosendo plays occasionally. Lately, " + game + " has been in the rotation.",
      highlights: ["Other games in the mix: " + resumeData.personal.games.filter((item) => item !== game).join(" and ") + "."],
      technologies: ["PS5", "Nintendo Switch"],
    };
  }

  if (normalized.includes("run") || normalized.includes("workout") || normalized.includes("fitness") || normalized.includes("exercise") || normalized.includes("hobby") || normalized.includes("outside work")) {
    return {
      title: "Off the clock",
      body: "Outside of engineering, Rosendo enjoys " + resumeData.personal.activities.map((activity) => activity.toLowerCase()).join(", ") + ".",
      highlights: ["Current game rotation: " + resumeData.personal.games.join(" · ")],
    };
  }

  if (normalized.includes("language")) {
    return {
      title: "Languages",
      body: "Rosendo's resume lists these programming languages:",
      technologies: resumeData.skills.Languages,
    };
  }

  if (normalized.includes("distributed system") || normalized.includes("backend experience") || normalized.includes("backend engineering")) {
    return distributedSystemsResponse();
  }

  const allTechnologies = Array.from(new Set(portfolioWork.flatMap((item) => item.technologies)));
  const mentionedTechnology = allTechnologies.find((technology) => {
    const value = normalize(technology);
    return normalized.includes(value) || tokens(technology).some((token) => tokens(question).includes(token));
  });

  if (mentionedTechnology) {
    const matches = portfolioWork.filter((item) =>
      item.technologies.some((technology) => normalize(technology).includes(normalize(mentionedTechnology))) ||
      item.tags.some((tag) => normalize(tag).includes(normalize(mentionedTechnology))),
    );
    if (matches.length) return technologyResponse(mentionedTechnology, matches);
  }

  const matches = portfolioWork
    .map((item) => ({ item, score: score(question, [item.name, item.role, ...item.tags, ...item.technologies]) }))
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!matches.length) return fallback;
  if (matches.length === 1 || matches[0].score > matches[1].score + 1) return companyResponse(matches[0].item);

  const top = matches.slice(0, 2).map((match) => match.item);
  return {
    title: "Relevant experience",
    body: "The closest matches in Rosendo's resume are " + top.map((item) => item.name).join(" and ") + ".",
    highlights: top.map((item) => item.name + ": " + item.highlights[0]),
    technologies: Array.from(new Set(top.flatMap((item) => item.technologies))).slice(0, 6),
    link: top.some((item) => item.id === "sidequest")
      ? { href: resumeData.project.url, label: "www.sidequestapp.io ↗" }
      : undefined,
  };
}

function AssistantMessage({ response }: { response: AssistantResponse }) {
  return <div className="assistant-response">
    {response.title && <div className="response-head"><h3>{response.title}</h3>{response.subtitle && <p>{response.subtitle}</p>}</div>}
    <p className="response-body">{response.body}</p>
    {response.highlights && response.highlights.length > 0 && <section className="response-highlights"><h4>Highlights</h4><ul>{response.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></section>}
    {response.technologies && response.technologies.length > 0 && <div className="response-tech">{response.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>}
    {response.link && <a className="response-link" href={response.link.href} target="_blank" rel="noreferrer">{response.link.label}</a>}
  </div>;
}

export default function RoGPT() {
  const [messages, setMessages] = useState<Message[]>([{
    role: "assistant",
    response: { body: "Hi! I'm Rosendo's portfolio assistant. Ask me anything about his work, projects, or experience." },
  }]);
  const [input, setInput] = useState("");
  const messagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const lastMessage = messagesRef.current?.querySelector(".chat-message:last-of-type");
    lastMessage?.scrollIntoView({ block: "nearest" });
  }, [messages]);
  const inputRef = useRef<HTMLInputElement>(null);
  const time = new Intl.DateTimeFormat([], { hour: "numeric", minute: "2-digit" }).format(new Date());

  function ask(question: string) {
    const value = question.trim();
    if (!value) return;
    setMessages((current) => [...current, { role: "user", text: value }, { role: "assistant", response: answer(value) }]);
    setInput("");
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    ask(input);
  }

  return (
    <section className="app-chat" aria-label="RoGPT portfolio assistant">
      <div className="chat-top"><strong>RoGPT</strong><time>{time}</time></div>
      <div className="chat-messages" ref={messagesRef} aria-live="polite">
        {messages.map((message, index) => (
          <div className={"chat-message " + message.role} key={index}>
            <span>{message.role === "assistant" ? "RoGPT" : "You"}</span>
            {message.role === "assistant" ? <AssistantMessage response={message.response} /> : <p>{message.text}</p>}
          </div>
        ))}
        {messages.length === 1 && <div className="chat-prompts" aria-label="Suggested questions">{suggestedPrompts.map((prompt) => <button key={prompt} onClick={() => ask(prompt)}>{prompt}</button>)}</div>}
      </div>
      <form className="chat-input" onSubmit={submit}>
        <label className="sr-only" htmlFor="rogpt-question">Ask RoGPT</label>
        <input id="rogpt-question" ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask RoGPT..." autoComplete="off" />
        <button type="submit" disabled={!input.trim()} aria-label="Send question">↑</button>
      </form>
    </section>
  );
}
