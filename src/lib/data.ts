export const site = {
  name: "Vaishnavi Bhalodi",
  shortName: "Vaishnavi",
  location: "Tempe, AZ",
  email: "vaishnavibhalodi1@gmail.com",
  github: "https://github.com/VaishnaviBhalodi24",
  linkedin: "https://www.linkedin.com/in/vaishnavi0124/",
  resume: "/Software_Resume.pdf",
  headshot: "/headshot.jpg",
  tagline: "Software Engineer & Data Scientist",
  sub: "M.S. Software Engineering @ Arizona State. I build full-stack systems and production ML — from schema to model to UI.",
};

export const companies = [
  "Appy.Yo",
  "RoseAI",
  "TechXi",
  "Elluminati",
  "Networld",
  "ASU (part-time)",
];

export const highlights: { title: string; body: string }[] = [
  {
    title: "6 companies",
    body: `Worked across ${companies.join(" · ")}.`,
  },
  {
    title: "15+ projects",
    body: "5+ shipped from scratch into production; the rest span research and coursework.",
  },
  {
    title: "Open May 2026",
    body: "Available for full-time software engineering or data science roles.",
  },
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
  details?: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  links: { github?: string; live?: string };
  featured: boolean;
  thumbnail?: string;
  gradient?: [string, string];
  embeddable?: boolean;
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
    id: "radiate-sign",
    title: "Radiate Sign — Shopify Builder",
    blurb: "Interactive custom-sign builder embedded in a live Shopify storefront.",
    description:
      "Shipped an interactive product-customization flow for Radiate Sign, a Canadian signage business. Shoppers configure signs on the /builder page with real-time previews that hand off cleanly into Shopify's native product and cart flow.",
    stack: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    metrics: [
      { label: "Platform", value: "Shopify" },
      { label: "Status", value: "Live" },
    ],
    links: { live: "https://www.radiatesign.ca/builder" },
    featured: true,
    gradient: ["#ef4444", "#f59e0b"],
    embeddable: false,
    thumbnail: "/projects/radiate-sign.png",
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
    title: "FortiCast — Adversarial Robustness for Time-Series Forecasting",
    blurb: "Benchmark + GATA attack + wavelet-based TSAS defense across 5 forecasting models.",
    description:
      "End-to-end adversarial robustness study across 5 forecasting architectures (Ridge, LSTM, DeepAR, MiniInformer, TFT) on 3 datasets (UCI Electricity, M4 Daily, Household Power). Designed GATA — a gradient-aware temporal attack ~15–25% stronger than PGD at the same perturbation budget — and TSAS, a wavelet-based smoothing defense that recovers a large share of clean performance at only ~2% inference overhead, validated against adaptive attacks.",
    details:
      "Forecasting models drive real decisions in load planning, demand forecasting, and financial prediction, but most adversarial ML work focuses on image classification. FortiCast benchmarked robustness end-to-end: 5 architectures spanning classical-to-modern (Ridge, LSTM, DeepAR, MiniInformer, TFT) trained to solid clean-data baselines first on UCI Electricity Load, M4 Daily, and Household Power Consumption. Attacks covered FGSM, PGD, Elastic (L1/L2 hybrid), and a custom GATA (Gradient-Aware Temporal Attack) that scales perturbations by time-step importance using attention weights + recency — respecting temporal structure instead of naively bounding L∞ like on images. Core findings: forecasting models are fragile — perturbations under 5% of signal magnitude degraded MAE by 40–180%, and transformers (MiniInformer, TFT) were MORE vulnerable than LSTM in several settings because attention concentrates perturbation energy on the most-relied-on steps. Defenses tested: adversarial training (~50–60% recovery but 3× training cost, per-model), autoencoder anomaly detection (caught ~85% of attacked inputs but detection-only, no correction), and TSAS — Daubechies-4 wavelet soft-thresholding preprocessor that recovered comparable performance to adversarial training at only ~2% inference latency, with no retraining needed. TSAS held up under ADAPTIVE attacks (attacker aware of defense, backprops through wavelet), which is what makes it credible — most defense papers only test non-adaptive. Stack: PyTorch, GluonTS, PyWavelets, Hydra + W&B for ~600 experimental runs. Extensions: query-based black-box attacks, generalizing TSAS without gradient access.",
    stack: ["PyTorch", "GluonTS", "PyWavelets", "Hydra", "W&B"],
    metrics: [
      { label: "Experimental runs", value: "~600" },
      { label: "GATA vs PGD", value: "+15–25% stronger" },
      { label: "TSAS overhead", value: "~2%" },
    ],
    links: {},
    featured: false,
    gradient: ["#7c3aed", "#f43f5e"],
  },
  {
    id: "lexrag",
    title: "LexRAG — Legal Document Q&A",
    blurb: "Hybrid retrieval + citation verifier; dropped hallucinated-citation rate from ~8% to <1%.",
    description:
      "RAG system for legal document Q&A built around legal workflow's asymmetric error cost — a hallucinated citation is catastrophic, a missed one is merely annoying. Structural clause-aware chunking, hybrid dense + BM25 retrieval via reciprocal rank fusion, cross-encoder reranking, and a citation-verifier agent that validates every quoted span against retrieved chunks. Landed ~87% Precision@5 and <1% hallucinated-citation rate at ~2.5s p95 latency.",
    details:
      "Legal RAG has an asymmetric error cost that drives the whole architecture. Ingestion runs three passes over multi-format documents (PDF, DOCX, scanned images) using PyMuPDF for clean docs and Tesseract OCR for scans, enriching each chunk with metadata (jurisdiction, parties, date, doc type, clause tags). Chunking is by clause with parent heading prepended (~300–500 tokens, ~20% overlap), treating size as a soft constraint that yields to structural integrity — default 500-token splitters destroy clause boundaries. Retrieval: metadata-filter-first (jurisdiction, date, doc type) → hybrid dense (sentence-transformers + Chroma) + BM25 (Elasticsearch) via reciprocal rank fusion → cross-encoder rerank (ms-marco-MiniLM) narrowing top 50 → top 5–8. Hybrid lifted Precision@5 by ~18% over dense-only; reranking improved citation faithfulness ~25%. Generation: 3 agents in critical path (Retriever, Synthesizer at temp 0.1 with strict [DOC_ID:page] citation format and refusal language, Verifier that parses every citation and confirms the quoted span actually appears in the retrieved chunk) + 2 sidecars (Redactor via Presidio, Auditor with append-only logs). Verifier dropped hallucinated-citation rate from ~8% baseline to <1%. Eval on ~300 curated legal questions with gold answers/citations: ~87% Precision@5, <1% hallucinations, ~2.5s p95 e2e. Stack: Python, PyMuPDF, Tesseract, sentence-transformers, Chroma, Elasticsearch, cross-encoder, on-prem Llama for PII-sensitive use, FastAPI microservices, React with a 3-tier response panel (answer / legal rationale / evidence with exact cited passages). Extensions: overruled-case detection, domain-specific embedding fine-tuning, calibrated confidence labels.",
    stack: ["Python", "FastAPI", "sentence-transformers", "Chroma", "Elasticsearch", "PyMuPDF", "Tesseract", "React"],
    metrics: [
      { label: "Precision@5", value: "~87%" },
      { label: "Hallucinations", value: "<1%" },
      { label: "p95 latency", value: "~2.5s" },
    ],
    links: {},
    featured: false,
    gradient: ["#0f172a", "#a855f7"],
  },
  {
    id: "sprintlab",
    title: "SprintLab — Agile Scrum Simulator",
    blurb: "Flight-simulator for Agile: role-based gameplay with stochastic sprint events.",
    description:
      "Educational web platform where students assume Scrum Master, Product Owner, or Developer roles and run configurable sprints end-to-end. Nine modular use cases cover the full Scrum cycle; the simulation engine uses beta distributions (that shift with user accuracy), weighted blocker sampling, and probabilistic spike outcomes to teach decision-making under uncertainty rather than just Scrum vocabulary.",
    details:
      "SprintLab (originally ScrumBoard Simulator) is a flight-simulator for Agile. Users assume one of three Scrum roles and run configurable sprints: backlog definition → planning with effort estimation → execution with probability-driven events → retrospective whose outputs feed the next sprint's parameters. Nine modular use cases cover the cycle (role assignment, story creation, backlog grooming, point estimation, sprint planning, blocker resolution, spike execution, sprint review, retrospective logging), each unit-testable and swappable. Simulation engine: effort estimation uses a beta distribution that shifts based on the user's historical estimation accuracy (so it gets harder as you get better — keeping the learning curve meaningful); blockers sampled from weighted pool based on sprint length + team size; spikes have configurable outcome distributions; velocity from actual completed points vs. planned so users see the real plan-vs-execution gap. Design tension: pedagogical clarity vs. realism — erred toward clarity for v1 (deterministic DoD, explicit action items in retros) because students can't learn from a simulation they can't trace. Stack: web frontend with role-based interaction, configurable backend simulation engine driving probability models + state transitions, scenario configuration layer letting instructors tune sprint length, team size, event probabilities, and estimation noise per session. Extensions: multi-user synchronous sessions for whole classes, LLM-driven stakeholder agent generating realistic mid-sprint backlog changes, instructor analytics on which decisions trip students up.",
    stack: ["Web", "Simulation Engine", "Probability Models", "Role-based UX"],
    metrics: [
      { label: "Scrum roles", value: "3" },
      { label: "Use cases", value: "9" },
    ],
    links: {},
    featured: false,
    gradient: ["#16a34a", "#0ea5e9"],
  },
  {
    id: "gru-traffic",
    title: "GRU Traffic Flow Forecasting",
    blurb: "PyTorch GRU with recursive multi-step prediction for real-time traffic management.",
    description:
      "Single-layer GRU (128 hidden units, 0.2 dropout) in PyTorch trained with Adam + mixed-precision (FP16/FP32) cutting memory ~40%. Implemented a recursive autoregressive prediction loop at inference so errors compound realistically — a harder test than the single-step MSE most forecasting baselines report. Trajectory plots confirmed the model learned actual temporal dynamics (morning/evening peaks, weekend dips) rather than regressing to the mean.",
    details:
      "Traffic is a hard forecasting problem — strong short-term dependencies + long-term periodicities (rush hour, day-of-week), which classical ARIMA struggles to capture simultaneously. Model: 1-layer GRU, 128 hidden units, dropout 0.2, linear projection head producing scalar flow predictions. Chose GRU over LSTM deliberately — ~25% fewer parameters (merged update gate) for the same hidden size → faster training + lower memory without a meaningful accuracy drop on this data, and cheaper for edge deployment. Training: Adam @ lr 0.001 with mixed-precision (torch.cuda.amp) cutting memory ~40%, early stopping on validation MSE, ReduceLROnPlateau @ 0.5 factor, validation set distribution matching test (with time series you can easily fool yourself validating on data temporally too close to train). Core contribution: autoregressive prediction loop at inference — the model's own outputs feed back as inputs for subsequent steps, so errors compound as they would in production. This is how you actually find out whether the model learned temporal structure or just learned to copy the previous observation. Evaluated with MSE + trajectory overlays (a single MSE hides whether the model got the shape or just the level). Stack: PyTorch, torch.cuda.amp, Pandas, NumPy, Matplotlib. Extensions: add contextual features (weather, time of day, day-of-week), transformer architecture for longer horizons where GRU loses long-range context, quantile regression heads for prediction intervals.",
    stack: ["PyTorch", "AMP", "Pandas", "NumPy", "Matplotlib"],
    metrics: [
      { label: "Params vs LSTM", value: "−25%" },
      { label: "Memory cut", value: "~40%" },
    ],
    links: {},
    featured: false,
    gradient: ["#06b6d4", "#84cc16"],
  },
  {
    id: "sopa",
    title: "SOPA — A Programming Language Built from Scratch",
    blurb: "Minimal language + compiler with hand-written lexer, DCG grammar, Yacc parser, tree-walking interpreter.",
    description:
      "Designed and implemented SOPA (Simple Original Programming Architecture) end-to-end: a high-level language for non-programmers with integers, strings, booleans, arithmetic + logical operators, repeat/unless-until loops, a ternary, and built-in sqrt. Hand-written lexer, DCG-based grammar prototyping in Prolog, Yacc for LALR parsing, and a tree-walking interpreter — deliberately no ANTLR/LLVM so I had to solve the interesting parts myself.",
    details:
      "SOPA (Simple Original Programming Architecture) was built to understand the layer below Python/Java — lexing, parsing, grammar design, execution — by designing a language end-to-end rather than leaning on frameworks that abstract the interesting parts away. Syntax: every program wrapped between start/stop keywords, which sounds trivial but gives the parser a clean program boundary and dramatically better error messages because the root node is always known. Types: int, string, bool. Operators: arithmetic, relational (<, ==), logical (and/or/not). Non-trivial constructs: repeat loop for counted iteration, unless-until loop (alternative while semantics), ternary operator for inline conditionals, built-in sqrt (forced handling a native function call inside the grammar without special-casing). Implementation: Definite Clause Grammar (DCG) in Prolog + Yacc for parser generation, running on macOS. DCG let me prototype syntax and iterate on ambiguities with natural backtracking; Yacc gave LALR parser generation for the production version. Lexer was hand-written (not Flex) — taught me tokenization, whitespace handling, keyword-vs-identifier disambiguation, emitting clean token streams. Execution via sopa_runner.sh: source file → lexer → Yacc parser → AST → tree-walking interpreter. The most educational part was grammar disambiguation — my first draft had a shift-reduce conflict around ternary and unless-until because both could begin with similar token sequences. Resolved by making ternary strictly right-associative and requiring explicit block delimiters on loops, eliminating ambiguity cleanly. Extensions: proper type checker (currently dynamically-typed with runtime errors), user-defined functions (only built-in sqrt today), bytecode compilation replacing the tree-walking interpreter.",
    stack: ["Prolog", "Yacc", "DCG", "Shell", "Compiler Design"],
    metrics: [
      { label: "Data types", value: "3" },
      { label: "Hand-built", value: "Lexer + parser" },
    ],
    links: {},
    featured: false,
    gradient: ["#fbbf24", "#ef4444"],
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
