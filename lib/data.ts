import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pbtmovie from "@/public/pbtmovie.png";
import pbtc from "@/public/pbtc.png";
import pbtportfolio from "@/public/pbtportfolio.png";

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
    title: "Bachelor's degree in Information Technology",
    location: "Nha Trang University",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Front-End Developer",
    location: "Allgrow Labo",
    description: "I worked as a front-end developer for 1 years in 1 job.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Fulltime Remote Front-End React Developer",
    location: "Ho Chi Minh City",
    description:
      "I'm now a Front-end React developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PBTMovie",
    description:
      "I worked as a front-end developer on this demo project for 1 month. This site is inspired by Netflix. Users can log in and chose movies to buy tickets.",
    tags: ["React", "Redux", "RESTful API", "Tailwind", "Ant Design"],
    imageUrl: pbtmovie,
  },
  {
    title: "PBTPortfolio",
    description:
      "A portfolio site of mine. This site is designed and built to showing who I am, what I'm doing, what I want to do in the future.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "React Email",
      "Typescript",
    ],
    imageUrl: pbtportfolio,
  },
  {
    title: "PBTC",
    description:
      "In this project, I was the front-end developer and also the UI/UX designer. It has features like searching, sorting and pagination...",
    tags: ["React", "Tailwind", "Ant Design", "RESTful API", "Redux"],
    imageUrl: pbtc,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Sass",
  "Git",
  "Framer Motion",
  "Figma",
  "Photoshop",
  "Illustrator",
  "ChatGPT",
] as const;
