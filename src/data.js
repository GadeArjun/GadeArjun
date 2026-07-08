export const profile = {
  name: "Arjun Gade",
  role: "Full Stack Software Engineer",
  subrole: "MERN Stack Developer · AI Application Developer",
  location: "Pune, Maharashtra, India",
  phone: "+91 7378586630",
  email: "gadearjun24@gmail.com",
  github: "https://github.com/GadeArjun",
  linkedin: "https://www.linkedin.com/in/arjun-gade-7500a7291/",
  summary:
    "Full Stack & AI Application Developer building MERN applications, realtime systems, and AI-powered workflows. Currently shipping production features as a MERN Stack Developer Intern at LSOYS Games & Apps — scalable frontend architecture, REST API integrations, Socket.IO/WebRTC pipelines, deployment and production support.",
};

export const bootLines = [
  "> whoami",
  "arjun_gade — full-stack + ai application developer",
  "> status --stack",
  "MERN · Socket.IO · WebRTC · LangChain/LangGraph · online",
];

// event log ticker — drawn from real Socket.IO events emitted by SlideAI's
// generation pipeline, used here as the page's signature motif
export const eventTicker = [
  "project:created:start",
  "intent:completed",
  "planner:start",
  "planner:slide:status",
  "planner:completed",
  "coder:start",
  "coder:complete",
  "project:completed",
  "webrtc:peer:connected",
  "socket:room:joined",
  "editor:start",
  "editor:completed",
];

export const stack = [
  {
    layer: "Frontend",
    tag: "client",
    items: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Vite", "TanStack Query", "React Router", "Context API"],
  },
  {
    layer: "Backend",
    tag: "server",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT", "RBAC", "Multer", "Cloudinary", "Nodemailer"],
  },
  {
    layer: "Real-Time",
    tag: "live",
    items: ["Socket.IO", "WebRTC", "Peer-to-Peer Communication"],
  },
  {
    layer: "AI / Agentic",
    tag: "intelligence",
    items: ["LangChain", "LangGraph", "AI Agent Workflows", "Prompt Engineering", "OpenRouter API", "Groq API", "Structured Output (Zod)"],
  },
  {
    layer: "Data",
    tag: "storage",
    items: ["MongoDB", "Mongoose", "SQLite"],
  },
  {
    layer: "Tooling",
    tag: "ops",
    items: ["Git/GitHub", "Postman", "VS Code", "Render", "Vercel"],
  },
];

export const experience = [
  {
    org: "LSOYS Games & Apps",
    role: "MERN Stack Developer Intern",
    period: "Jan 2025 — Jun 2026",
    points: [
      "Developed and maintained multiple production-ready MERN applications with scalable frontend architecture and reusable React components.",
      "Built real-time communication workflows using Socket.IO and WebRTC, contributing to deployment, debugging, and production issue resolution on Render.",
      "Contributed to FuelMatrix, TravelBuddy, ERP, and other production applications.",
    ],
  },
];

export const projects = [
  {
    name: "SlideAI",
    tagline: "AI PowerPoint presentation generator",
    description:
      "An AI-driven MERN platform that turns a single prompt into a fully designed, editable presentation. A custom agent pipeline handles intent extraction, slide planning, and content generation, streaming live progress to the client over Socket.IO — pause, resume, and per-slide status included.",
    tech: ["MERN", "Socket.IO", "Zustand", "TanStack Query", "Tailwind CSS", "OpenRouter", "GPT-OSS-120B"],
    github: "https://github.com/GadeArjun/SlideAI",
    demo: "https://slide-ai-two.vercel.app/",
    status: "live",
  },
  {
    name: "MarketMint",
    tagline: "Lead discovery platform for agencies & freelancers",
    description:
      "A full-stack tool for agencies and freelancers to discover local businesses by category and location, audit their digital presence, score the opportunity, and generate ready-to-send outreach messages.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Cheerio", "Recharts", "OpenStreetMap API"],
    github: "https://github.com/GadeArjun/market-mint",
    demo: "https://marketmint-vert.vercel.app/",
    status: "live",
  },
  {
    name: "Career Finder",
    tagline: "AI career discovery platform",
    description:
      "An AI-powered career guidance platform that pairs a recommendation engine with competency analysis and cosine similarity matching to help students discover relevant career paths and the skills to get there.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cosine Similarity", "AI Integration"],
    github: "https://github.com/GadeArjun/career-finder",
    demo: "https://careerfinder-qbs2.onrender.com",
    status: "live",
  },
  {
    name: "MeetFlow",
    tagline: "Real-time video meeting & collaboration platform",
    description:
      "A Zoom-like collaboration platform engineered on WebRTC and Socket.IO for multi-user video/audio conferencing, with JWT auth, meeting scheduling, participant management, live chat, and Cloudinary-based media uploads.",
    tech: ["React", "Vite", "WebRTC", "Socket.IO", "JWT", "MongoDB", "Cloudinary", "Nodemailer"],
    github: "https://github.com/GadeArjun/MeetFlow",
    demo: "https://meet-flow-puce.vercel.app/",
    status: "live",
  },
  {
    name: "TravelBuddy",
    tagline: "Real-time travel & social companion platform",
    description:
      "A travel and social networking platform that matches solo travelers heading to the same destination, with destination-based discovery, real-time chat, and join-request workflows on a modular Express backend.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Context API"],
    github: "https://github.com/GadeArjun/TravelBuddy",
    demo: "https://travel-buddy-dest.vercel.app/",
    status: "live",
  },
];

export const education = {
  degree: "Bachelor of Engineering (B.E.) in Computer Science Engineering",
  school: "TSSM's Bhivarabai Sawant College of Engineering & Research (TSSM BSCOER), Pune",
  university: "Savitribai Phule Pune University (SPPU)",
  year: "Graduated: 2026",
  cgpa: "CGPA: 9.20 / 10",
};
