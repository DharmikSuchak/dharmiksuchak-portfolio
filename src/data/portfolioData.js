export const personalInfo = {
  name: "Dharmik Suchak",
  tagline: "Software Engineer",
  roles: ["Backend Developer", "Full Stack Developer", "Problem Solver", "Software Engineer", "Open Source Enthusiast"],
  email: "dharmiksuchak1@gmail.com",
  phone: "+917435885759",
  location: "Gandhinagar, India",
  linkedin: "https://www.linkedin.com/in/dharmiksuchak",
  github: "https://github.com/DharmikSuchak",
  codolio: "https://codolio.com/profile/Dharmik_Suchak",
  bio: "Building systems that are not just functional, but scalable, efficient, and future-ready. Exploring the intersections of Backend Engineering, Full Stack Development, and AI/LLM applications.",
  stats: [
    { label: "Projects Built", value: "10+" },
    { label: "DSA Problems", value: "800+" },
    { label: "Students Mentored", value: "950+" },
    { label: "Instagram Followers", value: "113K+" },
  ],
  available: true,
};

export const education = [
  {
    institution: "Dhirubhai Ambani University (formerly known as DA-IICT)",
    shortName: "Dhirubhai Ambani University, Gandhinagar",
    degree: "M.Tech in Software Systems",
    cgpa: "8.39",
    period: "2024 – 2026",
    icon: "🎓",
  },
  {
    institution: "Gujarat Technological University",
    shortName: "GTU, Rajkot",
    degree: "B.E in Computer Engineering",
    cgpa: "8.35",
    period: "2020 – 2024",
    icon: "🏛️",
  },
];

export const experience = [
  {
    company: "HM Square Solutions LLP (Speed Ecom Solution)",
    role: "Software Development Intern",
    type: "Full-time · Surat, India",
    period: "Jan 2026 – June 2026",
    note: "PPO Offered",
    highlights: [
      "Built and deployed a multi-database data reconciliation platform with RESTful APIs, serving 1,000+ active e-commerce sellers — enabling automated SKU-wise P&L tracking and financial settlement management across 5 production server instances.",
      "Engineered a load-balanced worker system with residential IP rotation to automate Meesho data sync on a 7-day scheduled auto-fetch cycle, achieving a 90%+ request success rate against Akamai bot protection. Designed a 5-tier RBAC system with JWT auth, token-bucket rate limiting, and CORS hardening to enforce strict data isolation across Super Admin, SBM, RM, Admin, and User roles.",
      "Reduced server CPU load by ~50% through systematic database index optimization, and improved UI responsiveness with server-side pagination and lazy loading for high-volume data views.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis", "Docker", "GCP"],
    color: "#0284c7",
  },
  {
    company: "Neuralquark Computing LLP",
    role: "Software Engineer Intern",
    type: "Full-time · Rajkot, India",
    period: "Jan 2024 – June 2024",
    note: null,
    highlights: [
      "Built a content aggregation proxy layer using Express.js and Prisma to route requests through premium news APIs with paywall authentication — achieving a 100% request pass-through rate and delivering free content to end users via a scheduled ingestion pipeline refreshing every 30 minutes.",
      "Developed SwipeToShare and Article Bookmarking features in Flutter for a live news aggregator app published on the Google Play Store, improving user engagement and content discoverability.",
    ],
    tech: ["Flutter", "Node.js", "Express.js", "Prisma", "MySQL"],
    color: "#0ea5e9",
  },
];

export const projects = [
  {
    title: "Medibot — Medical Conversational AI",
    description:
      "A benchmarking tool comparing 6 LLMs (GPT-4o, Gemini 1.5 Pro, LLaMA 3, DeepSeek) on medical Q&A tasks. Used LangChain & RAG to ground responses, applied Chain-of-Thought prompting to improve diagnostic reasoning.",
    tech: ["Python", "LangChain", "RAG", "GPT-4o", "Gemini", "LLaMA 3", "DeepSeek"],
    github: "https://github.com/DharmikSuchak",
    demo: null,
    category: "AI/ML",
    color: "#0284c7",
    image: "/pic6.png",
    guide: "Prof. Jayprakash Lalchandani",
  },
  {
    title: "GovSetu",
    description:
      "Multilingual government scheme aggregator for rural areas with an integrated chatbot, video lessons, and a logic-based eligibility checker. State Finalist at Azadi Ka Amrit Mahotsav Hackathon.",
    tech: ["Django", "JavaScript", "HTML/CSS", "Chatbot"],
    github: "https://github.com/DharmikSuchak",
    demo: null,
    category: "Web Dev",
    color: "#0ea5e9",
    image: "/pic7.png",
  },
];


export const skills = {
  Languages: ["C++", "Python", "Java", "JavaScript", "SQL"],
  "Backend & Frontend": ["Node.js", "Express.js", "React.js", "Flutter"],
  Databases: ["MongoDB", "PostgreSQL", "Redis"],
  "Cloud & DevOps": ["Docker", "GCP", "Git", "Linux"],
  "AI/ML": ["LangChain", "RAG", "Chain-of-Thought"],
};

export const achievements = [
  {
    title: "Intellectual Property Grant",
    description: "Online Application for Customers to Incentivize E-Waste Disposal",
    detail: "Ap-No. 202421033126",
    icon: "📜",
    color: "#f59e0b",
  },
  {
    title: "Competitive Programming",
    description: "Solved 800+ problems across platforms",
    detail: "LeetCode 1471 (Peak) · CodeChef 1431 (2★)",
    icon: "⚔️",
    color: "#0284c7",
  },
  {
    title: "Hackathon Recognition",
    description: "5th Runner-up at IECSE (IIIT Surat) for E-waste Management",
    detail: "State Finalist — Azadi Ka Amrit Mahotsav (GovSetu)",
    icon: "🏆",
    color: "#10b981",
  },
  {
    title: "Instagram Influencer",
    description: "Fan page with 113,000+ followers",
    detail: "Social Media Content Creator",
    icon: "📱",
    color: "#db2777",
  },
];

export const leadership = [
  {
    id: "gdsc-cloud-lead",
    org: "Google Developer Student Club (GDSC)",
    role: "Cloud Lead (Core Team Member)",
    period: "Aug 2022 – Jul 2023",
    location: "Rajkot, Gujarat",
    highlights: [
      "As Cloud Lead, planned and ran cloud-focused events for the GDSC core team, giving students hands-on exposure to cloud platforms beyond the classroom.",
      "Conducted hands-on GCP workshops, promoting cloud awareness and skill development across the campus community.",
    ],
    icon: "🌐",
  },
  {
    id: "algorithm-arena",
    org: "Algorithm Arena | Dept. of CE, Marwadi University × IEEE",
    role: "Event Organizer & Coordinator",
    period: "Sep 2023 – Oct 2023",
    location: "Rajkot, Gujarat",
    highlights: [
      "Organized and coordinated a competitive programming event hosted by the Department of Computer Engineering at Marwadi University in collaboration with IEEE.",
      "Designed DSA contest tracks targeting junior students, fostering a competitive programming culture on campus.",
    ],
    icon: "🏆",
  },
  {
    id: "arcade-facilitator",
    org: "Google Cloud Skills Boost",
    role: "Arcade Facilitator",
    period: "Apr 2023 – Jun 2023",
    location: "Remote",
    highlights: ["Facilitated Google Cloud Arcade, guiding participants through hands-on cloud labs and helping them earn completion badges."],
    icon: "☁️",
  },
  {
    id: "cloud-facilitator",
    org: "Google Cloud Facilitator Program",
    role: "Program Facilitator",
    period: "Mar 2022 – Jul 2022",
    location: "India",
    highlights: ["Mentored 700+ learners in cloud computing, helping them work through technical doubts and reach program milestones."],
    icon: "☁️",
  },
];
