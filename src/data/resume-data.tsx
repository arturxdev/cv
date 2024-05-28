import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Arturo Guerrero",
  initials: "BJ",
  location: "Mexico City, Mexico",
  locationLink: "https://maps.app.goo.gl/amWo1TKLr9Kh6tbn7",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/68799786?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "arturo8gll@gmail.com",
    tel: "+525533397755",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/arturxdev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arturo-guerrero-lopez/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/arturoxdev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Autonoma de Mexico (UNAM)",
      degree: "Applied Mathematics and computer science",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Koibanx",
      link: "https://koibanx.com/",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "Present",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Wiggi",
      link: "https://wiggi.mx/",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "2022",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "GoNet",
      link: "https://www.gonet.us/",
      badges: ["Remote"],
      title: "Front end developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Insaite",
      link: "https://insaite.io/en/",
      badges: [],
      title: "Full stack developer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2021",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Univerisad Nacional Autonoma de Mexico (UNAM)",
      link: "https://www.unam.mx/",
      badges: [],
      title: "Full stack developer",
      logo: NSNLogo,
      start: "2018",
      end: "2020",
      description: "Creating and testing software for LTE base stations",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Node.js",
    "GraphQL",
    "MongoDB",
    "Mysql",
    "Python",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
