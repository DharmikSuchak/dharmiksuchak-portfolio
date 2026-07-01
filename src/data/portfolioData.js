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
    institution: "Dhirubhai Ambani Institute of Information & Communication Technology",
    shortName: "DA-IICT, Gandhinagar",
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
    period: "Jan 2026 – May 2026",
    note: "PPO Offered",
    highlights: [
      "Built the backend security layer from scratch — JWT/bcrypt auth, CORS, rate limiting on auth routes, then rolled out a 5-tier RBAC system across a 5-server production setup handling 800+ users.",
      "Automated the entire Meesho data sync (orders, payments, returns, claims) using a custom proxy routing system that distributed requests across multiple IPs to avoid platform-side blocks.",
      "Owned the full release pipeline — local testing, staging validation, production across 5 instances with PgCat pooling & clustered Node.js workers. Added missing DB indexes that dropped server load by ~50%.",
    ],
    tech: ["Node.js", "MongoDB", "PostgreSQL", "Redis", "PgCat", "JWT", "RBAC"],
    color: "#6366f1",
  },
  {
    company: "Neuralquark Computing LLP",
    role: "Software Engineer Intern",
    type: "Full-time · Rajkot, India",
    period: "Jan 2024 – May 2024",
    note: null,
    highlights: [
      "Developed SwipetoShare and Article Bookmarking features in Flutter for Kutchsetu, a live news aggregator app on the Play Store.",
      "Built a proxy layer to route requests through third-party news APIs, enabling free content delivery to users without direct API cost exposure.",
    ],
    tech: ["Flutter", "Dart", "Express.js", "REST APIs"],
    color: "#8b5cf6",
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
    color: "#6366f1",
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
    color: "#8b5cf6",
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
    color: "#6366f1",
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
    color: "#ec4899",
  },
];

export const leadership = [
  {
    org: "Google Developer Student Club (GDSC)",
    role: "Cloud Lead (Core Team Member) & Event Coordinator",
    period: "Aug 2022 – Jul 2023",
    location: "Rajkot, Gujarat",
    highlights: [
      "Conducted hands-on GCP workshops for students.",
      "Co-organized a university-level Competitive Programming contest with IEEE.",
    ],
    icon: "🌐",
  },
  {
    org: "Google Cloud Skills Boost",
    role: "Arcade Facilitator",
    period: "Apr 2023 – Jun 2023",
    location: "Remote",
    highlights: ["Joined Google Cloud Arcade as an Arcade Facilitator: Empowered Users to Explore Cloud Technologies & Earn Rewards."],
    icon: "☁️",
  },
  {
    org: "Google Cloud Facilitator Program",
    role: "Program Facilitator",
    period: "Mar 2022 – Jul 2022",
    location: "India",
    highlights: ["Mentored 700+ folks learning Cloud Computing under my guidance, helping them achieve milestones by clearing all doubts and queries."],
    icon: "☁️",
  },
];
