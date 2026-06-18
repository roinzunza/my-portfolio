export const resumeData = {
  name: "Rosendo Inzunza",
  email: "RosendoInzunza@gmail.com",
  website: "www.rosendoinzunza.com",
  phone: "714-342-7492",

  summary:
    "Systems engineer with 6 years in infrastructure and systems engineering, most recently at Cloudflare and TikTok. Set technical direction for control planes, ML training systems, and distributed tooling at global scale. Strength is driving architectural changes that span multiple teams, from RFC and stakeholder alignment through production delivery, and unblocking initiatives stalled by scale or blast-radius risk. Also founded and shipped SideQuest, a live iOS marketplace, solo.",

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
        "Led the initiative to migrate the remaining assets off the legacy system onto the control plane, authoring the RFC, delegating workstreams, and validating delivery, while preserving the existing API contract so downstream teams required no changes.",
        "Set the direction for consolidating the company's logical asset data model, authoring the RFC and aligning multiple teams to unify legacy and modern systems under one authoritative control plane, cutting sync errors and manual provisioning by 80%.",
        "Built high-throughput reconciliation workers to sync DCIM systems and automate orphan asset cleanup, ending persistent manual drift that had required ongoing operational intervention.",
        "Drove the Ray ID redesign: authored the RFC and designed a backward-compatible migration, validated in staging with no customer-facing regressions.",
        "Unblocked a long-stalled migration of the control plane onto the Release Manager by aligning the owning teams and building a breakglass recovery path, clearing a circular dependency across Salt, the Release Manager, and the control plane.",
        "Expanded internal platform adoption by building an MCP server over the control plane API, enabling teams to integrate without writing custom clients or CLI tooling.",
        "Established an AI-assisted development workflow across the team, covering codebase context indexing, pre-commit verification, and test generation, reducing onboarding and review cycle time.",
      ],
    },
    {
      title: "Site Reliability Engineer - Machine Learning Infrastructure",
      company: "TikTok",
      logo: "tiktok.jpg",
      coverBg: "#ffffff",
      location: "Remote, US",
      period: "07/2022 – 07/2024",
      bullets: [
        "Designed and shipped a diagnostics platform adopted by 200+ engineers, reducing mean time to resolution by 72% (80 min to 22 min) by centralizing root cause analysis workflows.",
        "Authored the RFC and implemented self-healing automation for parameter servers and distributed training jobs, reducing manual incident volume by 25%.",
        "Consolidated 4 divergent regional codebases for the parameter server observability system into a single unified release with per-region DNS routing, ending configuration drift and simplifying cross-region deployments.",
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
        "Built and maintained a Flask API for hardware configuration management in radar systems; automated the ARM64 Debian package release process, integrating with legacy build infrastructure.",
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
        "Built data pipelines to parse and reconcile multi-schema customer files into a unified format; trained a CNN on home images to predict property value; established GitLab CI/CD for the team.",
      ],
    },
  ],

  skills: {
    Languages: ["Rust", "Python", "Go", "TypeScript", "Swift", "C++", "Java"],
    "Frameworks / Libraries": ["Axum", "Actix", "SeaORM", "Diesel", "FastAPI", "Flask", "Spring", "React"],
    Infrastructure: ["Terraform", "Helm", "Kubernetes", "Docker", "SaltStack", "gRPC", "Protobuf", "PostgreSQL", "Redis"],
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
    url: "https://www.sidequestapp.io/",
    bullets: [
      "Founded and shipped a two-sided iOS job marketplace live on the App Store.",
      "Architected a Rust/Axum backend with a service-oriented route pattern, PostgreSQL via SeaORM, JWT auth, and Apple/Google SSO.",
      "Built real-time in-app messaging using WebSockets with a concurrent DashMap hub and APNs push notification delivery.",
      "Integrated Stripe and RevenueCat for tiered subscriptions, IAP add-ons, and entitlement management across business and applicant roles.",
    ],
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "California State University, Fullerton · 2019",
  },
};
