export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string; // Strictly only included if a verified live URL exists
  category: string;
  featured: boolean;
  visualType: "ai-screening" | "financial-system" | "developer-telemetry" | "ecommerce-matrix";
  metrics: { label: string; value: string }[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "automated-resume-screening",
    number: "01",
    title: "AUTOMATED RESUME SCREENING",
    subtitle: "AI-Powered Candidate Evaluation & NLP Semantic Engine",
    description:
      "Intelligent talent screening platform that parses unstructured resumes in PDF/DOCX formats, extracts core technical competencies, and performs multi-dimensional semantic scoring against job specifications using NLP algorithms.",
    technologies: [
      "Python",
      "FastAPI",
      "NLP",
      "Scikit-Learn",
      "Spacy",
      "React",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/piyushdubey26/Automated-ResumeScreening",
    category: "AI & Machine Learning",
    featured: true,
    visualType: "ai-screening",
    metrics: [
      { label: "PARSER_LATENCY", value: "<120ms" },
      { label: "ACCURACY_INDEX", value: "96.4%" },
      { label: "RANKING_ENGINE", value: "NLP_SEMANTIC" },
    ],
  },
  {
    id: "budgetwise-ai",
    number: "02",
    title: "BUDGETWISE AI",
    subtitle: "Intelligent Personal Finance & Automated Expense Telemetry",
    description:
      "Comprehensive personal finance platform engineered with automated recurring bill schedulers, Tesseract.js OCR receipt intelligence, Google Gemini AI advisory streams, and dynamic statement compilation.",
    technologies: [
      "Node.js",
      "Express",
      "React",
      "MongoDB",
      "Google Gemini AI",
      "Tesseract OCR",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/piyushdubey26/budgetwise-ai",
    category: "Full Stack & AI Systems",
    featured: true,
    visualType: "financial-system",
    metrics: [
      { label: "OCR_ENGINE", value: "TESSERACT_V5" },
      { label: "AI_ADVISOR", value: "GEMINI_FLASH" },
      { label: "DB_ARCHITECTURE", value: "DUAL_MODE" },
    ],
  },
  {
    id: "piyushdubey26",
    number: "03",
    title: "PIYUSH DUBEY",
    subtitle: "Dynamic GitHub Activity & Automation Telemetry",
    description:
      "Automated developer ecosystem and activity telemetry pipeline utilizing GitHub Actions CI/CD workflows, real-time repository metric generators, and automated SVG telemetry feeds.",
    technologies: [
      "GitHub Actions",
      "CI/CD Pipelines",
      "Markdown",
      "Workflow Automation",
      "SVG Generation",
    ],
    githubUrl: "https://github.com/piyushdubey26/piyushdubey26",
    category: "Automation & CI/CD",
    featured: false,
    visualType: "developer-telemetry",
    metrics: [
      { label: "WORKFLOWS", value: "AUTOMATED_DAILY" },
      { label: "METRICS_SYNC", value: "REAL_TIME" },
    ],
  },
  {
    id: "shopsphere-ecommerce",
    number: "04",
    title: "SHOPSPHERE E-COMMERCE",
    subtitle: "Scalable Full-Stack MERN Commerce Architecture",
    description:
      "Production-ready e-commerce platform engineered with real-time product catalogs, centralized Redux state synchronization, secure JWT authorization lifecycles, and administrative inventory analytics.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "REST APIs",
    ],
    githubUrl: "https://github.com/piyushdubey26/shopsphere-ecommerce",
    category: "Full Stack Web Architecture",
    featured: false,
    visualType: "ecommerce-matrix",
    metrics: [
      { label: "STATE_ENGINE", value: "REDUX_TOOLKIT" },
      { label: "AUTH_PROTOCOL", value: "JWT_BEARER" },
    ],
  },
];
