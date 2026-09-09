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
    period: "Jan 2026 – June 2026",
    note: "PPO Offered",
    highlights: [
      "Built the backend security layer from scratch — JWT/bcrypt auth, CORS, rate limiting on auth routes, then rolled out a 5-tier RBAC system across a 5-server production setup handling 800+ users.",
      "Automated the entire Meesho data sync (orders, payments, returns, claims) using a custom proxy routing system that distributed requests across multiple IPs to avoid platform-side blocks.",
      "Owned the full release pipeline — local testing, staging validation, production across 5 instances with PgCat pooling & clustered Node.js workers. Added missing DB indexes that dropped server load by ~50%.",
    ],
    tech: ["Node.js", "MongoDB", "PostgreSQL", "Redis", "PgCat", "JWT", "RBAC"],
    color: "#0284c7",
  },
  {
    company: "Neuralquark Computing LLP",
    role: "Software Engineer Intern",
    type: "Full-time · Rajkot, India",
    period: "Jan 2024 – June 2024",
    note: null,
    highlights: [
      "Developed SwipetoShare and Article Bookmarking features in Flutter for Kutchsetu, a live news aggregator app on the Play Store.",
      "Built a proxy layer to route requests through third-party news APIs, enabling free content delivery to users without direct API cost exposure.",
    ],
    tech: ["Flutter", "Dart", "Express.js", "REST APIs"],
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
