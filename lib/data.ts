import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Pasanusorn School",
    location: "Bangkhae District",
    description: "I graduated after 3 years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2007-2009",
  },
  {
    title: "Siam technology (Computer Business)",
    location: "Charan Sanit Wong Rd.",
    description: "I graduated after 3 years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2009-2011",
  },
  {
    title: "IT Support",
    location: "APINSUNRANCE BROKER CO.,LTD",
    description: "I'm now a support working as a IT. for agent",
    icon: React.createElement(FaReact),
    date: "2017 - 2019",
  },
  {
    title: "Programmer(jr)",
    location: "APINSUNRANCE BROKER CO.,LTD",
    description:
      "I worked as a webservices API developer for company connect more 10 insurance",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "APINSUNRANCE BROKER CO.,LTD",
    description:
      "I'm now a full-stack developer working as a company.C# asp.net Store Producer SQL Server MVC",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "C#",
  "asp.NET",
  "Web API",
  "jQuery",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "SQL",
  "Framer Motion",
] as const;
