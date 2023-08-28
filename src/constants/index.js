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
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "ReactJs Developer",
    icon: web,
  },
  {
    title: "NextJs Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
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
    title: "ReactJs Developer",
    company_name: "Pensil",
    icon: pensil,
    iconBg: "#383E56",
    date: "Feb 2022 - Aug 2023",
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Abhishek Gupta",
    designation: "SDE-2",
    company: "Fynd",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Surender Singh",
    designation: "Co_founder",
    company: "Pensil",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Anil meena",
    designation: "CTO",
    company: "Pensil",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
