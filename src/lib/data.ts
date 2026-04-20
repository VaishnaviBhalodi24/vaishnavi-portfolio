export const site = {
  name: "Vaishnavi Bhalodi",
  shortName: "Vaishnavi",
  location: "Tempe, AZ",
  email: "vaishnavibhalodi1@gmail.com",
  phone: "(623) 268-9550",
  github: "https://github.com/VaishnaviBhalodi24",
  linkedin: "https://www.linkedin.com/in/vaishnavi0124/",
  resume: "/Software_Resume.pdf",
  headshot: "/headshot.jpg",
  tagline: "Software Engineer & Data Scientist",
  sub: "M.S. Software Engineering @ Arizona State. I build full-stack systems and production ML — from schema to model to UI.",
};

export const stats = [
  { label: "Master's GPA", value: "4.00 / 4.00" },
  { label: "Records processed", value: "2.3M+" },
  { label: "Inference latency cut", value: "35%" },
  { label: "Concurrent users served", value: "100+" },
];

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Appy.Yo",
    role: "Software Developer",
    location: "Remote",
    period: "Jan 2026 — Present",
    stack: ["PostgreSQL", "Node.js", "Express", "React", "Plotly", "Streamlit"],
    bullets: [
      "Launched FlexyGig — a full-stack gig marketplace with dual worker–employer flows; architected a PostgreSQL schema with geospatial indexing for real-time skill, location, and availability matching at sub-500ms query latency.",
      "Implemented a multi-signal ranking pipeline (distance decay, skill-tag overlap, employer rating) to surface best-fit candidates per job post, reducing time-to-hire.",
      "Instrumented the full applicant funnel (Applied → Chatting → Booked → Completed) and shipped an employer-facing analytics dashboard tracking fill rate, time-to-fill, and drop-off via Plotly / Streamlit.",
      "Constructed REST APIs in Node.js/Express with role-based access control; hosted on Render with Vercel frontend, Cloudflare DNS/CDN, and SendGrid transactional notifications.",
    ],
  },
  {
    company: "Rose Technology (RoseAI)",
    role: "Software Engineering Intern",
    location: "Remote / Las Vegas, NV",
    period: "May 2025 — Aug 2025",
    stack: ["YOLOv7", "UNet", "LineFormer", "PyTorch", "Docker", "GPT-4", "Gemini"],
    bullets: [
      "Pioneered Chart2Data, a microservice converting chart images into structured, machine-readable datasets to unlock downstream analytics on previously unstructured visual data.",
      "Trained three chart-type-specific agents (YOLOv7 at 88% mAP@0.5, UNet at 94% pixel accuracy, LineFormer) delivering 82% end-to-end numeric reconstruction accuracy.",
      "Cut end-to-end inference latency by 35% via caching layers and asynchronous API workflows; integrated GPT-4 and Gemini for semantic interpretation of chart labels and metadata.",
      "Owned CI/CD for containerized model updates and led one sprint integrating the LLM orchestration layer across an 11-engineer agile team.",
    ],
  },
  {
    company: "Elluminati",
    role: "Web Developer",
    location: "Gujarat, India",
    period: "May 2024 — Aug 2024",
    stack: ["Node.js", "MongoDB", "Responsive Web"],
    bullets: [
      "Delivered the Kirti Forging corporate site, boosting mobile engagement by 40% and cutting bounce rate through responsive redesign.",
      "Overhauled a Node.js backend with MongoDB query optimization, cutting query latency by 25% and accelerating reporting workflows.",
    ],
  },
  {
    company: "TechXi",
    role: "AI/ML Intern",
    location: "Gujarat, India",
    period: "Dec 2023 — Apr 2024",
    stack: ["Python", "PyTorch", "CNN"],
    bullets: [
      "Built an ML-based fraud detection system that reduced false positives by 35% and strengthened financial risk mitigation by 40%.",
      "Implemented a CNN-based Hindi digit recognizer (94% accuracy) and a speaker recognition prototype for secure authentication.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  blurb: string;
  description: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  links: { github?: string; live?: string };
  featured: boolean;
  thumbnail?: string;
  gradient?: [string, string];
};

export const projects: Project[] = [
  {
    id: "flexygig",
    title: "FlexyGig",
    blurb: "Full-stack gig marketplace with geospatial matching and employer analytics.",
    description:
      "Dual worker–employer experience with sub-500ms matching, multi-signal ranking, and an analytics dashboard tracking the full applicant funnel. Production app built at Appy.Yo.",
    stack: ["PostgreSQL", "Node.js", "Express", "React", "Plotly", "Vercel"],
    metrics: [
      { label: "Query latency", value: "<500ms" },
      { label: "Deploy", value: "Vercel + Render" },
    ],
    links: { live: "https://flexigig-dun.vercel.app" },
    featured: true,
    gradient: ["#4f46e5", "#22d3ee"],
  },
  {
    id: "rxpulse",
    title: "RxPulse — AI Drug Policy Tracker",
    blurb: "RAG platform processing 5,000+ policy documents at sub-second semantic search.",
    description:
      "AI platform cutting manual review time by 70%. RAG pipeline with Vertex AI and pgvector, deployed on GCP Cloud Run at 300ms latency for 100+ concurrent users.",
    stack: ["React 19", "FastAPI", "Vertex AI", "Supabase", "pgvector", "GCP Cloud Run"],
    metrics: [
      { label: "Documents", value: "5,000+" },
      { label: "Accuracy", value: "90%" },
      { label: "API latency", value: "300ms" },
    ],
    links: { live: "https://rxpulse-frontend-468520442191.us-central1.run.app" },
    featured: true,
    gradient: ["#10b981", "#6366f1"],
  },
  {
    id: "air-quality",
    title: "Breathe California — Urban Air Quality Forecasting",
    blurb: "2.3M hourly records, 31 XGBoost models, explainable multi-horizon forecasts.",
    description:
      "Medallion Architecture pipeline on Azure Data Lake merging EPA OpenAQ and NOAA GHCN data across 56 CA counties. 38 multi-horizon targets, 31 XGBoost models with quantile regression and SHAP explainability.",
    stack: ["Python", "XGBoost", "Azure", "PySpark", "SHAP"],
    metrics: [
      { label: "Records", value: "2.3M" },
      { label: "Models", value: "31" },
      { label: "Counties", value: "56" },
    ],
    links: { live: "https://breathe-california.vercel.app" },
    featured: true,
    gradient: ["#0ea5e9", "#a3e635"],
  },
  {
    id: "kirti-forging",
    title: "Kirti Forging — Corporate Website",
    blurb: "Responsive corporate site with 40% mobile engagement lift and a faster Node.js backend.",
    description:
      "Redesigned and shipped the Kirti Forging corporate site while at Elluminati. Responsive frontend boosted mobile engagement by 40%, and a Node.js + MongoDB backend overhaul cut query latency by 25%.",
    stack: ["Node.js", "MongoDB", "Responsive Web", "SEO"],
    metrics: [
      { label: "Mobile engagement", value: "+40%" },
      { label: "Query latency", value: "−25%" },
    ],
    links: { live: "https://www.kirtiforging.com" },
    featured: true,
    gradient: ["#f97316", "#7c2d12"],
  },
  {
    id: "graph-analytics",
    title: "Scalable Graph Analytics Pipeline",
    blurb: "Kubernetes + Kafka streaming NYC Taxi records into Neo4j; PageRank & BFS at scale.",
    description:
      "Kubernetes pipeline with Kafka, Zookeeper, Neo4j, and Kafka Connect streaming NYC Taxi records into a graph database. PageRank and BFS analytics validated end-to-end with an automated test suite scoring 100/100.",
    stack: ["Minikube", "Kafka", "Neo4j", "Helm", "Docker"],
    metrics: [
      { label: "Tests", value: "100/100" },
      { label: "Algorithms", value: "PageRank + BFS" },
    ],
    links: {},
    featured: false,
    gradient: ["#1f2937", "#22d3ee"],
  },
  {
    id: "face-recognition",
    title: "Elastic Face Recognition on AWS",
    blurb: "Face Recognition as a Service with SQS-driven auto-scaling to 15 instances.",
    description:
      "End-to-end FR-as-a-Service platform on AWS with SQS-driven auto-scaling, real-time load balancing, and CloudWatch monitoring. Async FastAPI pipelines achieving 40% latency reduction under concurrent load.",
    stack: ["FastAPI", "PyTorch", "AWS EC2", "SQS", "Lambda", "Docker"],
    metrics: [
      { label: "Instances", value: "up to 15" },
      { label: "Latency cut", value: "40%" },
    ],
    links: {},
    featured: false,
    gradient: ["#fb923c", "#c026d3"],
  },
  {
    id: "forticast",
    title: "FortiCast — Adversarially Robust Forecasting",
    blurb: "Wavelet-based TSAS defense improving robustness by 22% on time-series models.",
    description:
      "Stress-tested LSTM, DeepAR, and Transformer models under FGSM, PGD, and custom temporal attacks. Introduced a wavelet-based TSAS defense improving adversarial robustness by 22%.",
    stack: ["PyTorch", "LSTM", "Transformers", "FGSM", "PGD"],
    metrics: [
      { label: "Robustness", value: "+22%" },
    ],
    links: {},
    featured: false,
    gradient: ["#7c3aed", "#f43f5e"],
  },
];

export type SkillGroup = { name: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C/C++", "Scala", "R", "Bash"],
  },
  {
    name: "Frontend & Backend",
    skills: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Flask", "SpringBoot", "REST APIs"],
  },
  {
    name: "Data & ML",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LangChain", "RAG", "HuggingFace", "PySpark", "Airflow", "Kafka"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "BigQuery", "Snowflake", "pgvector", "DynamoDB", "Elasticsearch"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda, SQS)", "GCP (Cloud Run, Vertex AI)", "Azure Data Lake", "Docker", "Kubernetes", "GitHub Actions", "Vercel"],
  },
  {
    name: "Analytics & Tools",
    skills: ["A/B Testing", "Tableau", "Power BI", "Streamlit", "Plotly", "MLflow", "SHAP", "JIRA"],
  },
];

export const education = [
  {
    school: "Arizona State University",
    degree: "M.S. in Software Engineering — Data Science specialization",
    period: "Aug 2024 — Present",
    gpa: "4.00 / 4.00",
    location: "Tempe, AZ",
  },
  {
    school: "Charusat University",
    degree: "B.Tech. in Computer Engineering",
    period: "Aug 2020 — Jul 2024",
    gpa: "9.25 / 10.00",
    location: "Gujarat, India",
  },
];

export const leadership = [
  {
    title: "Google Developer Student Club (GDSC)",
    role: "Lead · Charusat University",
    body: "Led a 150+ member developer community, delivering data science and cloud workshops and driving hands-on ML learning through hackathons.",
  },
  {
    title: "PYTHAKON Hackathon",
    role: "Student Coordinator · Charusat University",
    body: "Organized a 36-hour hackathon for 300+ participants, guiding teams on prototyping and data-driven project execution.",
  },
];
