export const profile = {
  name: "Balakrishnan Srinivasan",
  initials: "BS",
  title: "Senior Software Engineer",
  subtitle: "React Native & React.js · Full-Stack Development",
  location: "Chennai, India",
  email: "balakrishnan.srini64@gmail.com",
  phone: "+91 75980 58190",
  linkedin: "https://linkedin.com/in/balki14101",
  github: "https://github.com/balki14101",
  resumeUrl: "/Balakrishnan_Srinivasan_Resume.pdf",
  tagline:
    "I build enterprise-grade React Native & React.js applications end to end — from frontend architecture to backend APIs and cloud deployment.",
  summary:
    "Senior Software Engineer with 4 years of experience delivering enterprise-grade React Native and React.js applications across the full development lifecycle, from frontend architecture to backend API design and cloud deployment. Led frontend development for an enterprise mental health assessment platform, maintaining feature parity across mobile and web through a modular, reusable component architecture. Skilled in REST API design and integration (Python, Flask/FastAPI, Node.js), dynamic survey/workflow logic, AWS EC2/Docker-based deployment, and CI/CD pipelines. Has also guided backend and database architecture decisions and mentored developers across production systems, including a healthcare data platform.",
  stats: [
    { label: "Years of experience", value: "4+" },
    { label: "REST APIs integrated", value: "25+" },
    { label: "Production apps shipped", value: "6+" },
    { label: "Developers mentored", value: "5+" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Redux",
      "HTML5",
      "CSS3",
      "Responsive Web Design",
      "REST API Integration",
      "JWT / OAuth",
    ],
  },
  {
    category: "Mobile",
    items: [
      "React Native CLI",
      "Expo",
      "Cross-Platform Development",
      "Native Modules",
      "React Navigation",
      "Push Notifications",
      "Async Storage",
      "Play Store Deployment",
    ],
  },
  {
    category: "Backend, Database & Cloud",
    items: [
      "Python (Flask, FastAPI)",
      "Node.js",
      "Express.js",
      "REST API Design",
      "MongoDB",
      "Mongoose",
      "AWS (EC2, S3)",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Firebase",
    ],
  },
  {
    category: "Testing & Tools",
    items: [
      "Android Studio",
      "Postman",
      "Integration Testing",
      "Unit Testing (Jest)",
      "Performance Optimisation",
      "Debugging",
      "Git & GitHub",
      "Jira",
      "Agile/Scrum",
      "Claude Code",
    ],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Exafluence",
    location: "Chennai, India",
    period: "06/2022 – Present",
    description:
      "Enterprise-focused data, analytics, and AI solutions provider serving global clients.",
    projects: [
      {
        title: "Enterprise Mental Health Assessment Platform",
        points: [
          "Achieved consistent feature parity across React Native (mobile) and React.js (web) by architecting a modular, reusable UI component library.",
          "Simplified complex survey logic by engineering dynamic, branching workflows with real-time scoring and adaptive navigation across conditional question paths.",
          "Automated post-survey reporting by building a Python-based report-generation module that extracted survey data and integrated it directly into the core application workflow.",
          "Strengthened application security by designing OTP-based authentication and authorization mechanisms, alongside Flask/FastAPI REST API integrations, validated through Postman-driven integration testing and debugging before release.",
          "Improved release reliability by implementing CI/CD pipelines and Docker/AWS EC2 deployments for Android/Play Store releases, following agile development processes and sprint planning.",
        ],
      },
      {
        title:
          "Native-to-Cross-Platform Migration — Silicon Valley-Based Client",
        points: [
          "Modernised a native Android/iOS application by migrating biometrics, push notifications, and chat functionality into a unified React Native codebase with platform-specific native modules.",
          "Reduced cross-platform inconsistencies by standardising the UI through reusable React Native components, resolving integration issues surfaced during migration.",
        ],
      },
      {
        title: "Healthcare Data Platform — Architecture & Technical Guidance",
        points: [
          "Strengthened platform scalability and security by guiding backend and database architecture for a Node.js application, implementing role-based access control for authorization.",
          "Accelerated team ramp-up by providing technical guidance and mentorship to junior developers on project setup and deployment planning, while collaborating with backend developers and QA teams and contributing to report-generation functionality.",
        ],
      },
    ],
    note: "Also contributed to smaller internal POCs and development tasks across the team.",
  },
  {
    role: "React Native Developer Intern",
    company: "SketchMonk",
    location: "Bangalore, India",
    period: "01/2022 – 05/2022",
    description: "",
    projects: [
      {
        title: null,
        points: [
          "Built 5 production UI modules and integrated 10+ REST APIs, contributing to a 60% increase in user retention while improving app speed by 25% through rendering and state-management optimisation.",
        ],
      },
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Trikara Technologies",
    location: "Bangalore, India",
    period: "07/2021 – 10/2021",
    description: "",
    projects: [
      {
        title: null,
        points: [
          "Built responsive UI components and integrated REST APIs for a booking and service-based application.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: "DueMate",
    stack: ["React Native", "Expo", "AsyncStorage"],
    description:
      "A task-reminder app with customizable recurring schedules and due-date notifications, using AsyncStorage to handle data caching and offline functionality for local persistence.",
    link: "https://github.com/balki14101/duemate/releases/tag/v1.0.0",
    linkLabel: "View Release",
    status: "Shipped",
  },
  {
    name: "Inshorts Clone",
    stack: ["React Native", "Redux"],
    description:
      "A cross-platform news app with Redux, category-based browsing, and integration with the official Inshorts developer API.",
    link: "https://github.com/balki14101/inshorts-clone/releases/tag/v1.0",
    linkLabel: "View Release",
    status: "Shipped",
  },
  {
    name: "QuickServe",
    stack: ["React Native", "React.js", "Node.js", "MongoDB"],
    description:
      "A multi-provider slot-booking marketplace with JWT role-based auth and atomic slot-locking to prevent double-booking. Backend fully built and tested (15+ endpoints); React.js and React Native clients in development.",
    link: "https://github.com/balki14101/quickserve",
    linkLabel: "View on GitHub",
    status: "In Progress",
  },
];

export const achievements = [
  {
    title: "Company Recognition Award",
    subtitle: "Project Delivery Excellence",
    description:
      "Recognized by Exafluence leadership for end-to-end ownership in delivering enterprise-grade applications, from architecture through production.",
  },
  {
    title: "Engineering Excellence Certificate",
    subtitle: "Consistent Performance",
    description:
      "Awarded for sustained high performance on high-visibility product features across multiple project cycles.",
  },
];

export const education = {
  degree: "B.Tech, Computer Science",
  school: "SRM IST Chennai",
  period: "06/2018 – 05/2022",
};
