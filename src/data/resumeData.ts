export const resumeData = {
  name: "Rosendo Inzunza",
  email: "RosendoInzunza@gmail.com",
  website: "www.rosendoinzunza.com",
  phone: "714-342-7492",

  experience: [
    {
      title: "Systems Engineer 3 - Infrastructure",
      company: "Cloudflare",
      location: "Remote, US",
      period: "07/2024 – Present",
      summary:
        "Key contributor to the Infrastructure Platform team, architecting the control plane that serves as the authoritative source of truth for the company's global fleet. Engineered high throughput reconciliation logic to synchronize logical assets across multi-region DCIM systems, ensuring strict data consistency and 99.9% API availability.",
      bullets: [
        "Architected the technical strategy and authored the RFC to unify the company's logical asset data model. Consolidated legacy and modern systems into a single authoritative control plane to eliminate cross-fleet data fragmentation.",
        "Built high throughput reconciliation workers to sync data between DCIM systems, resolving long-standing conflicts between name-based and ID-based constraints. Automated the cleanup of orphan assets, effectively ending manual sync drift.",
        "Developed versioned, service-oriented APIs using tagged unions and structured migration paths. Stabilized the internal contract, reducing breaking changes for downstream consumers while maintaining high availability uptime.",
        "Reduced MTTR by engineering a sub-minute rollback mechanism for Rust/Axum-based services. Automated the sync of production data to staging environments, allowing for high-fidelity testing and safer deployment cycles.",
        "Owned infrastructure reliability by leading on-call rotations and resolving complex bottlenecks in data ingestion and permissions. Implemented comprehensive integration testing and CI/CD hardening.",
      ],
    },
    {
      title: "Site Reliability Engineer - Applied Machine Learning",
      company: "TikTok (ByteDance)",
      location: "Los Angeles, CA",
      period: "07/2022 – 07/2024",
      summary:
        "SRE for the Applied Machine Learning team, responsible for the reliability and automation of distributed training and inference clusters at petabyte scale. Focused on building self-healing systems and observability tooling to maintain 99.99% uptime for Ads and Video Recommendation engines.",
      bullets: [
        "Authored and led an RFC introducing self-healing automation for parameter servers, training jobs, and Kafka pipelines. Developed logic to automatically detect and remediate common failure modes, cutting manual incident load by 25%.",
        "Architected a diagnostics and introspection platform used by 200+ engineers to visualize distributed system state. Reduced MTTR for Ads and Video Recommendation services from 80 minutes to 22 minutes.",
        "Automated resource optimization and pipeline stability for large-scale ML inference, improving CPU/GPU utilization by identifying and eliminating orchestration bottlenecks via custom monitoring scripts.",
        "Owned microservice reliability for high-traffic ML workloads, ensuring 99.99% uptime. Managed full-stack health by instrumenting Python-based services and optimizing RDS query performance.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Digital Force Technologies",
      location: "San Diego, CA",
      period: "10/2021 – 07/2022",
      bullets: [
        "Optimized hardware-software interfaces by developing high-performance REST endpoints and caching layers for ARM64 systems.",
        "Built tools enabling rapid configuration for testing and automated package deployment.",
      ],
    },
    {
      title: "Professional Automation Engineer",
      company: "CoreLogic",
      location: "Irvine, CA",
      period: "09/2020 – 10/2021",
      bullets: [
        "Automated property tax workflows across all 50 states and integrated Salesforce with Python/Java services.",
        "Led an ML initiative predicting home prices and implemented backend caching reducing external API calls by 50%.",
      ],
    },
  ],

  stack: [
    "Rust", "Axum", "SeaORM", "Diesel ORM",
    "Python", "Flask", "FastAPI",
    "PostgreSQL", "Redis", "Docker",
    "AWS", "Nginx", "Grafana",
  ],

  project: {
    name: "SideQuest",
    role: "Founder & Full-Stack Engineer",
    tech: "iOS · Swift · Rust · Axum · SeaORM",
    url: "https://www.sidequestapp.io/",
    bullets: [
      "Founded and built a two-sided local job marketplace that eliminates resumes and cover letters — applicants swipe through short job cards and apply instantly via profile and intro video, while businesses list openings and hire directly.",
      "Designed a modular Rust backend using Axum + SeaORM with secure auth, structured domain models, profile management, job listings, and messaging threads.",
      "Built a polished card-based iOS UI in Swift covering applicant and business onboarding, swipe-based job discovery, and profile creation with intro video support.",
      "Implemented media uploads via Cloudflare R2, push notification delivery via AWS SNS, and integration-tested flows covering registration, login, and profile updates.",
      "Integrated Core Location for GPS-based job discovery, enabling applicants to browse and filter nearby gigs by proximity — core to SideQuest's local-first hiring model.",
    ],
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "California State University, Fullerton",
  },
};
