export const resumeData = {
  name: "Rosendo Inzunza",
  email: "RosendoInzunza@gmail.com",
  website: "www.rosendoinzunza.com",
  phone: "714-342-7492",

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
      title: "Software Engineer, Infrastructure",
      company: "Cloudflare",
      logo: "Cloudflare.png",
      coverBg: "#ffffff",
      location: "Remote, US",
      period: "07/2024 – 05/2026",
      summary: "",
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
      title: "Site Reliability Engineer - Machine Learning Infrastructure",
      company: "TikTok",
      logo: "tiktok.jpg",
      coverBg: "#ffffff",
      location: "Remote, US",
      period: "07/2022 – 07/2024",
      summary: "",
      bullets: [
        "Designed and shipped a centralized diagnostics and on-call automation platform adopted by 200+ engineers, exposing parameter server and model training operations (health checks, restarts, model reassignment) through a ChatOps command API; cut MTTR 72% (80 to 22 min).",
        "Provisioned it across four regions in TikTok's private cloud with Terraform and Helm, templating infrastructure and DNS into a reusable per-region module.",
        "Consolidated 4 divergent regional codebases for the parameter server observability system into a unified release, ending configuration drift across regions.",
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
      summary: "",
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
      summary: "",
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
