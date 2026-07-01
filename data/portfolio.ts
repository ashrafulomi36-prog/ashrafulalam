// ============================================================================
// PORTFOLIO CONTENT — single source of truth.
// Edit this file to update anything on the site. No other file should
// contain hardcoded personal content.
// ============================================================================

export const personal = {
  name: "Ashraful Alam Omi",
  firstName: "Ashraful",
  initials: "AO",
  location: "Chattogram, Bangladesh",
  role: "9th Semester CSE Student, East Delta University",
  tagline:
    "I build things at the intersection of software, intelligence, and automation.",
  summary:
    "Analytical Computer Science student passionate about Artificial Intelligence, Machine Learning, Software Engineering, Automation, Competitive Programming, and Entrepreneurship. Experienced in building production-ready web applications, AI-powered automation systems, and leading student initiatives. Interested in solving real-world problems through technology while continuously learning modern software engineering practices.",
  email: "ashrafulalamomi@gmail.com",
  resumeUrl: "/resume.pdf",
  roles: [
    "AI Engineer",
    "ML Enthusiast",
    "Software Developer",
    "Full Stack Developer",
    "Competitive Programmer",
    "Entrepreneur",
    "Research Enthusiast",
  ],
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    email: "mailto:ashrafulalamomi@gmail.com",
  },
};

export const about = {
  paragraphs: [
    "I'm a Computer Science & Engineering student at East Delta University, currently in my 9th semester, spending most of my time at the crossing of applied machine learning and full-stack software engineering.",
    "My work ranges from building production Next.js applications for real clients and my own ventures, to designing n8n-based AI automation pipelines that replace hours of manual work with a single trigger. I compete in programming contests, mentor peers in data structures and algorithms, and lead student technical societies on campus.",
    "Outside of coursework, I run two small ventures — DRAPECURVE, a premium clothing brand, and OpdexStudio, a design & development studio — where I get to apply engineering discipline to real business problems.",
  ],
  focus: [
    "Applied Machine Learning & AI systems",
    "Full-stack product engineering (Next.js / TypeScript)",
    "AI-driven workflow automation (n8n, Gemini, Sheets, Gmail)",
    "Competitive programming & algorithmic problem solving",
  ],
};

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "East Delta University",
    period: "2021 — Present",
    detail: "Currently in 9th Semester · CGPA 3.48 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "CUET School & College",
    period: "Completed",
    detail: "Science",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Noapara High School",
    period: "Completed",
    detail: "Science",
  },
];

export const skillCategories = [
  {
    title: "Programming",
    icon: "Code2",
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 88 },
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "HTML / CSS", level: 92 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "BrainCircuit",
    skills: [
      { name: "NumPy", level: 82 },
      { name: "Pandas", level: 85 },
      { name: "Matplotlib", level: 78 },
      { name: "Scikit-Learn", level: 80 },
      { name: "Gemini API", level: 84 },
    ],
  },
  {
    title: "Web Development",
    icon: "Globe",
    skills: [
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 82 },
      { name: "Three.js", level: 70 },
    ],
  },
  {
    title: "Automation",
    icon: "Workflow",
    skills: [
      { name: "n8n", level: 88 },
      { name: "Google Sheets API", level: 80 },
      { name: "Gmail API", level: 78 },
      { name: "Graph API", level: 72 },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: "Cloud",
    skills: [
      { name: "Vercel", level: 90 },
      { name: "Cloudflare", level: 75 },
      { name: "GitHub", level: 92 },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
    ],
  },
];

export const experience = [
  {
    role: "Founder",
    org: "DRAPECURVE",
    period: "2024 — Present",
    description:
      "Founded and built a premium clothing brand from the ground up, including its full e-commerce presence and brand identity.",
    tags: ["Entrepreneurship", "Next.js", "Brand"],
  },
  {
    role: "Founder",
    org: "OpdexStudio",
    period: "2024 — Present",
    description:
      "Design & development studio delivering production-grade websites and automation systems for clients.",
    tags: ["Entrepreneurship", "Web Dev", "Automation"],
  },
  {
    role: "Sub Executive — AI Research",
    org: "Computer Club, East Delta University",
    period: "2023 — Present",
    description:
      "Leading AI research initiatives and knowledge-sharing sessions within the university's Computer Club.",
    tags: ["Leadership", "AI Research"],
  },
  {
    role: "Sub Executive",
    org: "Robotics Society, East Delta University",
    period: "2023 — Present",
    description:
      "Contributing to robotics projects and organizing technical workshops for students.",
    tags: ["Leadership", "Robotics"],
  },
  {
    role: "Founder",
    org: "Science Club, Noapara High School",
    period: "Earlier",
    description:
      "Founded the school's Science Club and organized its first Science Fair.",
    tags: ["Leadership", "Science"],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  challenges: string;
  learned: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "drapecurve",
    title: "DRAPECURVE",
    category: "E-commerce / Brand",
    description:
      "A premium clothing brand website built end-to-end — from brand identity to a fast, conversion-focused storefront.",
    features: [
      "Custom product showcase with motion-driven detail pages",
      "Mobile-first responsive storefront",
      "Optimized Core Web Vitals for a premium feel",
    ],
    challenges:
      "Balancing a luxury visual identity with fast load times and a lean, database-free architecture.",
    learned:
      "How to translate brand direction into a coherent design system, and ship a real commercial product end-to-end.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    live: "https://drapecurvee.vercel.app/",
    featured: true,
  },
  {
    slug: "sumaita-portfolio",
    title: "Sumaita Islam — Portfolio",
    category: "Web Design",
    description:
      "A production-ready personal portfolio for a CS & web design student, with a soft gradient aesthetic and scroll-driven motion.",
    features: [
      "Fully animated section reveals with Framer Motion",
      "Custom project & skills architecture",
      "Deployed on Vercel with a clean CI pipeline",
    ],
    challenges:
      "Designing a distinct visual identity that felt personal rather than templated, on a tight content structure.",
    learned:
      "Iterating a design system quickly, and simplifying a CMS-driven build into a maintainable static one.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
  {
    slug: "minimals-by-afroja",
    title: "Minimals By Afroja",
    category: "E-commerce",
    description:
      "An e-commerce site for a Bangladeshi home bakery, covering cakes, ice cream, and brownies with WhatsApp-based ordering.",
    features: [
      "Sanity-powered content management for the catalog",
      "WhatsApp ordering flow tailored to local buying habits",
      "Incremental Static Regeneration for fast, fresh pages",
    ],
    challenges:
      "Designing an ordering flow that matched how local customers actually shop, without a traditional cart/checkout.",
    learned:
      "Structuring a CMS schema for a real small business, and shipping ISR-driven commerce pages.",
    tech: ["Next.js", "Sanity", "Framer Motion"],
    featured: true,
  },
  {
    slug: "cpu-scheduling-visualizer",
    title: "CPU Scheduling Visualizer",
    category: "Systems / Education",
    description:
      "An interactive visualizer for classic CPU scheduling algorithms, built for coursework and self-study.",
    features: [
      "Step-by-step Gantt chart animation",
      "Support for FCFS, SJF, Round Robin, and Priority scheduling",
      "Live computation of waiting & turnaround time",
    ],
    challenges: "Rendering accurate, readable timelines for algorithms with very different scheduling behavior.",
    learned: "Deepened understanding of OS scheduling internals by having to visualize them precisely.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "maze-game",
    title: "Maze Game",
    category: "Desktop / OOP",
    description: "A maze-solving desktop game built to practice object-oriented design principles in Java.",
    features: ["Procedural maze generation", "Player movement & collision system", "Clean OOP class architecture"],
    challenges: "Structuring game state and rendering cleanly using OOP rather than procedural shortcuts.",
    learned: "Practical object-oriented design patterns beyond the classroom.",
    tech: ["Java", "OOP"],
  },
  {
    slug: "note-summary-quiz-generator",
    title: "Note Summary & Quiz Generator",
    category: "AI / Machine Learning",
    description: "An AI tool that condenses study notes into summaries and auto-generates quiz questions from them.",
    features: [
      "Automatic text summarization",
      "AI-generated multiple-choice quiz questions",
      "Designed for exam-prep workflows",
    ],
    challenges: "Getting reliable, non-hallucinated question generation from source notes.",
    learned: "Prompt design and evaluation strategies for AI-generated educational content.",
    tech: ["Python", "AI/ML"],
  },
  {
    slug: "facebook-product-automation",
    title: "Facebook Product Automation",
    category: "Automation",
    description:
      "An automation pipeline that syncs and publishes product listings across Facebook and Shopify using AI-generated content.",
    features: [
      "AI-generated product descriptions via Gemini API",
      "Automated publishing through the Graph API",
      "Shopify catalog synchronization",
    ],
    challenges: "Chaining multiple third-party APIs reliably without manual intervention.",
    learned: "Designing resilient, multi-step automation workflows in n8n.",
    tech: ["n8n", "Gemini API", "Graph API", "Shopify"],
  },
  {
    slug: "cartoon-content-automation",
    title: "Cartoon Content Automation",
    category: "AI Automation",
    description:
      "An 18-node automation workflow that generates, voices, and publishes short cartoon content end-to-end.",
    features: [
      "Automated script generation",
      "AI video & voice generation pipeline",
      "Fully automated publishing step",
    ],
    challenges: "Coordinating 18 interdependent automation nodes without a single point of failure.",
    learned: "Large-scale workflow orchestration and failure handling in n8n.",
    tech: ["n8n", "AI Video", "Voice AI"],
  },
  {
    slug: "cold-email-automation",
    title: "Cold Email Automation",
    category: "Automation",
    description: "A cold outreach system that personalizes and sends emails at scale using AI-written copy.",
    features: [
      "Google Sheets as a lightweight lead database",
      "Gemini AI-personalized email copy",
      "Automated sending through Gmail API",
    ],
    challenges: "Keeping outreach personalized and non-spammy while fully automated.",
    learned: "Practical use of AI copywriting inside a real outbound sales workflow.",
    tech: ["n8n", "Google Sheets", "Gmail", "Gemini AI"],
  },
];

export const competitions = [
  {
    year: "2026",
    title: "SciBlitz AI Challenge",
    detail: "Project ideation for the IEEE CUET national security AI track.",
  },
  {
    year: "2025",
    title: "Hackathon at East Delta University",
    detail: "Competed in a university-wide hackathon.",
  },
  {
    year: "2025",
    title: "NSU Business Case Competition",
    detail: "Competed in a national business case competition.",
  },
  {
    year: "2025",
    title: "Hult Prize — Campus Round",
    detail: "Placed in the Top 5.",
  },
  {
    year: "2025",
    title: "3 Minute Thesis Competition",
    detail: "Winner.",
  },
  {
    year: "2024",
    title: "EDU Intra University Coding Competition",
    detail: "Placed in the Top 10.",
  },
  {
    year: "2024",
    title: "ICPC Preliminary",
    detail: "Competed at the preliminary round.",
  },
  {
    year: "2024",
    title: "NCPC Preliminary",
    detail: "Competed at the preliminary round.",
  },
];

export const certifications = [
  { title: "Winner — 3 Minute Thesis Competition", issuer: "East Delta University", year: "2025" },
  { title: "Introduction to Python", issuer: "DataCamp", year: "" },
  { title: "Computer Office Application", issuer: "Bangladesh Technical Education Board", year: "" },
];

export const achievements = [
  { title: "Winner — 3 Minute Thesis Competition", year: "2025" },
  { title: "Top 10 — EDU Intra University Coding Competition", year: "2024" },
  { title: "Top 5 — Hult Prize Campus Round", year: "2025" },
  { title: "Founder — Science Club, Noapara High School", year: "" },
  { title: "Organizer — School Science Fair", year: "" },
];

export const contentCreation = {
  description:
    "I create educational content focused on Data Structures, Algorithms, Competitive Programming, and problem solving — aimed at helping other students build strong fundamentals.",
  topics: ["Data Structures", "Algorithms", "Competitive Programming", "Problem Solving"],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Competitions", href: "#competitions" },
  { label: "Contact", href: "#contact" },
];
