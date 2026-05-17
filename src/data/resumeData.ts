export const resumeData = {
  name: "Rosendo Inzunza",
  email: "RosendoInzunza@gmail.com",
  website: "www.rosendoinzunza.com",
  phone: "714-342-7492",

  summary:
    "Systems Engineer specializing in critical infrastructure at global scale—fleet control planes, distributed systems, ML training and inference. Driving complex architectural changes end to end, from RFC authorship and stakeholder alignment to production delivery, consistently unblocking initiatives that stalled due to scale or blast radius risk.",

  experience: [
    {
      title: "Systems Engineer - Infrastructure",
      company: "Cloudflare",
      logo: "Cloudflare.png",
      coverBg: "#ffffff",
      location: "Remote, US",
      period: "07/2024 – 05/2026",
      summary:
        "Owned reliability, performance, and architectural evolution of the infrastructure control plane — the authoritative system for fleet configuration and asset management across Cloudflare's global network.",
      bullets: [
        "Improved control plane API performance 10x (5s to 500ms) by rearchitecting the data-fetching layer to parallelize requests, with an automatic fallback to serial processing under database load.",
        "Led the Ray ID redesign end to end: identified the exhaustion risk, wrote the RFC, designed a backward-compatible migration, with zero customer impact, retiring 3 years of deferred technical debt.",
        "Drove consolidation of the company's logical asset data model, authoring the RFC and leading cross-team alignment to unify legacy and modern systems under a single authoritative control plane — reducing sync errors and manual provisioning intervention by 80%.",
        "Eliminated a critical circular dependency between the control plane and Release Manager by defining a new cross-team deployment contract, including automated migration halts and a full-stack recovery path for outage scenarios.",
        "Built high-throughput reconciliation workers to sync DCIM systems and automate orphan asset cleanup, ending persistent manual drift that had required ongoing operational intervention.",
        "Expanded internal platform adoption by building an MCP server over the control plane API, enabling teams to integrate without writing custom clients or CLI tooling.",
        "Established an AI-assisted development workflow across the team — covering codebase context indexing, pre-commit verification, and test generation — materially reducing onboarding and review cycle time.",
      ],
    },
    {
      title: "Site Reliability Engineer - Applied Machine Learning",
      company: "TikTok",
      logo: "tiktok.jpg",
      coverBg: "#ffffff",
      location: "Remote, US",
      period: "07/2022 – 07/2024",
      bullets: [
        "Designed and shipped a diagnostics platform adopted by 200+ engineers, reducing mean time to resolution by 72% (80 min to 22 min) by centralizing root cause analysis workflows.",
        "Authored the RFC and implemented self-healing automation for parameter servers and distributed training jobs, reducing manual incident volume by 25%.",
        "Consolidated 4 divergent regional codebases for the parameter server observability system into a single unified release with per-region DNS routing — ending configuration drift and simplifying cross-region deployments.",
        "Served as primary on-call for ML training and parameter server infrastructure, owning incident response for Ads and Video Recommendation systems supporting millions of users.",
      ],
    },
    {
      title: "Full Stack Software Engineer",
      company: "Digital Force Technologies",
      logo: "digital_force_technologies.jpg",
      coverBg: "#000000",
      location: "Remote, US",
      period: "10/2021 – 07/2022",
      bullets: [
        "Built and maintained a Flask API for hardware configuration management in radar systems.",
        "Automated the ARM64 Debian package release process, integrating with legacy build infrastructure.",
      ],
    },
    {
      title: "Automation Engineer",
      company: "CoreLogic",
      logo: "corelogic.png",
      coverBg: "#ffffff",
      location: "Irvine, CA",
      period: "09/2020 – 10/2021",
      bullets: [
        "Built data pipelines to parse and reconcile multi-schema customer files into a unified format.",
        "Trained a CNN on home images to predict property value.",
        "Established GitLab CI/CD for the team.",
      ],
    },
  ],

  skills: {
    Languages: ["Rust", "Python", "Go", "TypeScript", "Swift", "C++"],
    "Frameworks / Libraries": ["Axum", "Actix", "SeaORM", "Diesel", "FastAPI", "Flask", "Django", "React"],
    Infrastructure: ["Kubernetes", "Docker", "SaltStack", "gRPC", "Protobuf", "PostgreSQL", "Redis"],
    Observability: ["Prometheus", "Grafana", "Splunk", "Sentry"],
    "Machine Learning": ["TensorFlow", "PyTorch"],
    Tools: ["Claude", "Codex", "OpenCode"],
  },

  project: {
    name: "SideQuest",
    logo: "sidequest_logo.png",
    coverBg: "#000000",
    role: "Founder & Full-Stack Engineer",
    tech: "iOS · Swift · Rust · Axum · SeaORM · PostgreSQL",
    url: "https://www.sidequestapp.io/",
    bullets: [
      "Founded and shipped a two-sided iOS job marketplace connecting local businesses with hourly workers — live on the App Store.",
      "Architected a Rust/Axum backend with a service-oriented route pattern, PostgreSQL via SeaORM, JWT auth, and Apple/Google SSO with PKCE.",
      "Built real-time in-app messaging using WebSockets with a concurrent DashMap hub and APNs push notification delivery.",
      "Integrated Stripe and RevenueCat for tiered subscriptions, IAP add-ons, and entitlement management across business and applicant roles.",
    ],
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "California State University, Fullerton",
  },
};
