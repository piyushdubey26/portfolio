export interface SkillCategory {
  id: string;
  number: string;
  name: string;
  tagline: string;
  badge: string;
  featured?: boolean;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    number: "01",
    name: "LANGUAGES",
    tagline: "Core syntax & typed systems",
    badge: "CORE_SYNTAX",
    featured: false,
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C++",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "ai-ml",
    number: "02",
    name: "AI / MACHINE LEARNING",
    tagline: "Neural pipelines, NLP & LLM architectures",
    badge: "INTELLIGENT_SYSTEMS",
    featured: true,
    skills: [
      "Machine Learning",
      "NLP",
      "PyTorch",
      "Scikit-Learn",
      "Gemini / Generative AI",
      "AI Integration",
      "Semantic Search",
      "LLM Applications",
    ],
  },
  {
    id: "full-stack",
    number: "03",
    name: "FULL STACK",
    tagline: "Modern frameworks & distributed services",
    badge: "WEB_ARCHITECTURE",
    featured: true,
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "REST APIs",
      "Tailwind CSS",
      "Responsive UI",
      "Authentication",
    ],
  },
  {
    id: "data-database",
    number: "04",
    name: "DATA / DATABASE",
    tagline: "Schema modeling, ETL & storage engines",
    badge: "DATA_LAYER",
    featured: false,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Data Processing",
      "Data Modeling",
      "ETL",
      "SQL",
      "JSON / API Data",
    ],
  },
  {
    id: "tools-engineering",
    number: "05",
    name: "TOOLS / ENGINEERING",
    tagline: "CI/CD, containerization & workflow tooling",
    badge: "DEVOPS_TOOLING",
    featured: false,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Linux",
      "VS Code",
      "System Design",
      "API Development",
    ],
  },
];
