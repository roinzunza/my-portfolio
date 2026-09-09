export const resumeData = {
  name: "Rosendo Inzunza",
  email: "RosendoInzunza@gmail.com",
  website: "www.rosendoinzunza.com",
  phone: "714-342-7492",
  social: {
    linkedin: "https://www.linkedin.com/in/rosendoinzunza",
    github: "https://github.com/roinzunza",
    instagram: "https://www.instagram.com/roinzunza",
  },
  personal: {
    coffee: {
      goTo: "Iced latte with almond milk",
      alternatives: ["Iced matcha with oat milk", "Cortado with oat milk"],
    },
    activities: ["Running", "Working out", "Playing PS5 occasionally"],
    games: ["007 First Light", "Madden", "the new Pokémon FireRed Switch port"],
  },

  summary:
    "Software engineer with 6+ years building backend and distributed systems across Cloudflare and TikTok, including control planes, data planes, and ML infrastructure. Drives cross-team architectural change end to end, from RFC and stakeholder alignment through implementation and production delivery. Combines backend and infrastructure depth to scale core systems for performance and reliability, building APIs, event-driven architectures, and tooling adopted by 200+ engineers.",

  competencies: [
    "Backend Engineering",
    "Distributed Systems",
    "Systems Engineering",
    "API Design",
    "Control & Data Planes",
    "Event-Driven Architecture",
    "Site Reliability Engineering (SRE)",
    "Infrastructure as Code (IaC)",
    "ML Infrastructure",
    "Incident Response & On-Call",
    "Cross-Team Technical Leadership",
  ],

  experience: [
    {
      id: "cloudflare",
      title: "Software Engineer, Infrastructure",
      company: "Cloudflare",
      logo: "Cloudflare.png",
      coverBg: "#ffffff",
      location: "Remote, US",
      period: "07/2024 – 05/2026",
      summary: "",
      description: "Backend and distributed systems work on the infrastructure control plane behind Cloudflare's global network.",
      technologies: ["Rust", "Kafka", "Redis", "Kubernetes", "Sentry", "SaltStack", "APIs"],
      conciseHighlights: [
        "Improved control-plane API performance 10x, from 5s to 500ms.",
        "Led migrations of legacy asset syncs onto the control plane.",
        "Reduced sync errors by 90% through phased migrations and Sentry analysis.",
        "Built an MCP server over the control-plane API.",
        "Designed Kafka event flows across the control and data planes.",
      ],
      bullets: [
        "Improved control plane API performance 10x (5s to 500ms) by parallelizing hydration queries in Rust across pooled per-query connections instead of one shared connection; validated with a production-scale Kubernetes load test backed by Redis.",
        "Led migration of legacy asset syncs onto the control plane. Unblocked the effort by aligning the database team to build weekly prod-to-staging syncs, creating the team's first prod-like environment to validate changes against.",
        "Prioritized migrations by blast radius using Sentry error and traffic data, then shipped a phased, RFC-gated fix that cut sync errors 90% with no API changes and became a reusable migration playbook for downstream teams.",
        "Unblocked a long-stalled migration of the control plane onto the Release Manager by aligning the owning teams and building a breakglass recovery path, clearing a circular dependency across Salt, the Release Manager, and the control plane.",
        "Expanded internal platform adoption by building an MCP server over the control plane API, enabling teams to integrate without writing custom clients or CLI tooling.",
        "Designed event-driven control and data planes, publishing domain and traffic events through Kafka for downstream analytics, logging, and observability services.",
      ],
    },
    {
      id: "tiktok",
      title: "Site Reliability Engineer - Machine Learning Infrastructure",
      company: "TikTok",
      logo: "tiktok.jpg",
      coverBg: "#ffffff",
      location: "Remote, US",
      period: "07/2022 – 07/2024",
      summary: "",
      description: "Reliability and automation for large-scale machine learning training and parameter server infrastructure.",
      technologies: ["Python", "Terraform", "Helm", "Kubernetes", "ChatOps", "ML Infrastructure"],
      conciseHighlights: [
        "Built diagnostics and on-call automation adopted by 200+ engineers.",
        "Reduced MTTR from 80 minutes to 22 minutes.",
        "Exposed ML training and parameter server operations through a ChatOps API.",
        "Provisioned the platform across four regions with Terraform and Helm.",
        "Unified four regional codebases into a single release.",
      ],
      bullets: [
        "Designed and shipped a centralized diagnostics and on-call automation platform adopted by 200+ engineers, exposing parameter server and model training operations (health checks, restarts, model reassignment) through a ChatOps command API; cut MTTR 72% (80 to 22 min).",
        "Provisioned it across four regions in TikTok's private cloud with Terraform and Helm, templating infrastructure and DNS into a reusable per-region module.",
        "Consolidated 4 divergent regional codebases for the parameter server observability system into a unified release, ending configuration drift across regions.",
        "Served as primary on-call for ML training and parameter server infrastructure, owning incident response for Ads and Video Recommendation systems supporting millions of users.",
      ],
    },
    {
      id: "digital-force",
      title: "Full Stack Software Engineer",
      company: "Digital Force Technologies",
      logo: "digital_force_technologies.jpg",
      coverBg: "#000000",
      location: "Remote, US",
      period: "10/2021 – 07/2022",
      summary: "",
      description: "Full-stack engineering for hardware configuration and release systems used in radar technology.",
      technologies: ["Python", "Flask", "ARM64", "Debian", "REST APIs"],
      conciseHighlights: [
        "Built and maintained Flask APIs for radar hardware configuration.",
        "Automated ARM64 Debian package releases.",
      ],
      bullets: [
        "Built and maintained a Flask API for hardware configuration management in radar systems; automated the ARM64 Debian package release process, integrating with legacy build infrastructure.",
      ],
    },
    {
      id: "corelogic",
      title: "Automation Engineer",
      company: "CoreLogic",
      logo: "corelogic.png",
      coverBg: "#ffffff",
      location: "Irvine, CA",
      period: "09/2020 – 10/2021",
      summary: "",
      description: "Data automation, applied machine learning, and delivery tooling for property technology.",
      technologies: ["Python", "CNN", "GitLab CI/CD", "Data Pipelines"],
      conciseHighlights: [
        "Built pipelines to reconcile multi-schema customer data.",
        "Trained a CNN for property-value prediction from home images.",
        "Established GitLab CI/CD for the team.",
      ],
      bullets: [
        "Built data pipelines to parse and reconcile multi-schema customer files into a unified format; trained a CNN on home images to predict property value; established GitLab CI/CD for the team.",
      ],
    },
  ],

  skills: {
    Languages: ["Rust", "Python", "Go", "TypeScript", "Swift", "C++", "Java"],
    "Frameworks / Libraries": ["Axum", "Actix", "SeaORM", "Diesel", "FastAPI", "Flask", "Spring", "React"],
    Infrastructure: ["Terraform", "Helm", "Kubernetes", "Docker", "SaltStack"],
    "Data & Messaging": ["PostgreSQL", "Redis", "Kafka"],
    Protocols: ["gRPC", "Protobuf"],
    Cloud: ["AWS (S3, EC2, DynamoDB, RDS, Athena, Glue, Firehose, Kinesis, SageMaker)", "Cloudflare R2"],
    Observability: ["Prometheus", "Grafana", "Splunk", "Sentry"],
    "Machine Learning": ["TensorFlow", "PyTorch"],
  },

  project: {
    name: "SideQuest",
    logo: "sidequest_logo.png",
    coverBg: "#000000",
    role: "Founder & Full-Stack Engineer",
    tech: "iOS · Swift · Rust · Axum · SeaORM · PostgreSQL",
    description: "Founded and shipped a two-sided iOS job marketplace live on the App Store.",
    conciseHighlights: [
      "Built the backend in Rust with Axum and PostgreSQL through SeaORM.",
      "Implemented JWT authentication with Apple and Google SSO.",
      "Built real-time messaging with WebSockets and APNs notifications.",
      "Integrated Stripe and RevenueCat subscriptions.",
      "Published backend events for analytics and logging.",
    ],
    url: "https://www.sidequestapp.io/",
    bullets: [
      "Architected a Rust/Axum backend with a service-oriented route pattern, PostgreSQL via SeaORM, JWT auth, and Apple/Google SSO.",
      "Built real-time in-app messaging using WebSockets with a concurrent DashMap hub and APNs push notification delivery.",
      "Integrated Stripe and RevenueCat for tiered subscriptions, IAP add-ons, and entitlement management across business and applicant roles.",
      "Set up published events on both the data plane and control plane through streaming for downstream services to track analytics and logs.",
    ],
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "California State University, Fullerton · 2019",
  },
};

export type PortfolioWorkItem = {
  id: string;
  name: string;
  role: string;
  dates: string;
  shortSummary: string;
  highlights: string[];
  technologies: string[];
  tags: string[];
  url?: string;
};

const experienceTags: Record<string, string[]> = {
  cloudflare: ["cloudflare", "rust", "control plane", "data plane", "kafka", "redis", "kubernetes", "distributed systems", "api", "backend", "sentry", "salt", "release manager", "mcp"],
  tiktok: ["tiktok", "ml", "machine learning", "ml infrastructure", "parameter server", "chatops", "terraform", "helm", "kubernetes", "sre", "reliability", "on call", "recommendation systems"],
  "digital-force": ["digital force", "dft", "flask", "python", "radar", "arm64", "debian", "api", "backend"],
  corelogic: ["corelogic", "cnn", "machine learning", "data pipeline", "gitlab", "ci cd", "python", "property"],
};

export const portfolioWork: PortfolioWorkItem[] = [
  ...resumeData.experience.slice(0, 2).map((job) => ({
    id: job.id,
    name: job.company,
    role: job.title,
    dates: job.period.replace("–", "to"),
    shortSummary: job.description,
    highlights: job.conciseHighlights,
    technologies: job.technologies,
    tags: experienceTags[job.id],
  })),
  {
    id: "sidequest",
    name: resumeData.project.name,
    role: "Founder / Software Engineer",
    dates: "Independent project",
    shortSummary: resumeData.project.description,
    highlights: resumeData.project.conciseHighlights,
    technologies: ["Rust", "Axum", "PostgreSQL", "SeaORM", "Swift", "WebSockets", "APNs", "Stripe", "RevenueCat"],
    tags: ["sidequest", "project", "founder", "ios", "swift", "rust", "axum", "postgres", "postgresql", "seaorm", "jwt", "apple sso", "google sso", "websocket", "apns", "stripe", "revenuecat", "backend", "event driven"],
    url: resumeData.project.url,
  },
  ...resumeData.experience.slice(2).map((job) => ({
    id: job.id,
    name: job.company,
    role: job.title,
    dates: job.period.replace("–", "to"),
    shortSummary: job.description,
    highlights: job.conciseHighlights,
    technologies: job.technologies,
    tags: experienceTags[job.id],
  })),
];

export const skillAnswer = {
  id: "skills",
  title: "Technical skills",
  tags: ["skills", "languages", "language", "technologies", "tech stack", "backend experience", "backend engineering", "distributed systems", "what do you know"],
  shortSummary: "Rosendo works across backend engineering, distributed systems, infrastructure, and machine learning systems.",
  technologies: Object.values(resumeData.skills).flat(),
};
