import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  solidity,
  next,
  fynd,
  pensil,
  threejs,
  fightclub,
  jarvis,
  hitfit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "NextJs Developer",
    icon: mobile,
  },
  {
    title: "ThreeJs Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Next Js",
    icon: next,
  },
];

const experiences = [
  {
    title: "Blockchain Developer Trainee",
    company_name: "Fynd",
    icon: fynd,
    iconBg: "#383E56",
    date: "May 2022 - November 2022",
    points: [
      "Attained a comprehensive understanding of blockchain technology.",
      "Created a fully functional Auction Bidding system smart contract on the Ethereum blockchain using Solidity.",
      "Designed and implemented a Stake and Reward smart contract using the Solidity programming language.",
      "Provided mentorship to junior team members, offering guidance and support for their projects.",
      "Actively contributed to open-source projects led by the Sourabh Tech team.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Pensil",
    icon: pensil,
    iconBg: "#383E56",
    date: "Feb 2023 - Aug 2023",
    points: [
      "Developed and maintained web apps for Pensil and its subsidiary companies, maintaining production-level quality from inception.",
      "Collaborated closely with Pensil teams to achieve project goals.",
      "Implemented major features including group chat, course management, Google Meet integration, and Mixpanel analytics.",
      "Successfully converted multiple Figma designs into functional web apps for the Pensil community.",
      "Successfully migrated existing codebase to TypeScript, enhancing code quality and maintainability.",
      "Contributed to backend development in coordination with senior backend developers, optimizing the existing backend codebase.",
    ],
  },
];

const projects = [
  {
    name: "Fight Club",
    description:
      "FightClub is a MERN web app for combat sports. Admin manages courses (CRUD), users view them. It's a full-stack site with advanced login, signup, and Razorpay-based subscriptions.",
    tags: [
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "text-teal-500",
      },
      {
        name: "chartjs",
        color: "text-rose-500",
      },
      {
        name: "redux",
        color: "text-sky-500",
      },
      {
        name: "razorpay",
        color: "text-blue-500	",
      },
    ],
    image: fightclub,
    source_code_link: "https://github.com/razakhan05/fightclub",
    project_link: "https://newfightclub.vercel.app/",
  },
  {
    name: "Jarvis Ai",
    description:
      "A Next.js full-stack web app for diverse AI conversations: chat, image, video, music, and code generation. Advanced login, signup, protected routes, chat-bot and a subscription model—5 free subscriptions via Stripe integration, offering both free and paid options.",
    tags: [
      {
        name: "nextjs",
        color: "text-gray-500",
      },
      {
        name: "typescript",
        color: "text-blue-500	",
      },
      {
        name: "prisma",
        color: "text-gray-300",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "text-sky-500",
      },
      {
        name: "tailwindcss",
        color: "text-cyan-500",
      },
      {
        name: "open-ai",
        color: "text-slate-500	",
      },
      {
        name: "stripe",
        color: "text-gray-100",
      },
    ],
    image: jarvis,
    source_code_link: "https://github.com/razakhan05/jarvis",
    project_link: "https://jarvis-six-zeta.vercel.app/",
  },
  {
    name: "Hit Fit",
    description:
      "HiFit is a web application built with React that serves as a virtual fitness club. It provides a comprehensive collection of exercises categorized by targeted body parts and types, encompassing both bodyweight and machine-assisted workouts. This all-inclusive platform offers a visually appealing and responsive web experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "text-blue-500",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "rapid-api",
        color: "text-gray-500",
      },
    ],
    image: hitfit,
    source_code_link: "https://github.com/razakhan05/hit-fit-club",
    project_link: "https://hitfitclub.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
