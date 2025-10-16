import React from "react";

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
    title: "Bachelor of Technology in Artificial Intelligence & Machine Learning",
    college: "RNS Institute of Technology",
    location: "Bengaluru, Karnataka, India",
    description:
      "CGPA: 8.1",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  }as const,
  {
    title: "Higher Secondary Education",
    college: "Shri Channabasaveshwar Gurukul College ",
    location: "Bidar, Karnataka, India",
    description:
      "Percentage: 76%",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  }as const,
  {
    title: "10th Standard Education",
    college: "Shri Channabasaveshwar Gurukul School",
    location: "Bidar, Karnataka, India",
    description:
      "Percentage: 95%",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2019",
  }as const,
] as const;

export const projectsData = [
  {
    title: "MailMetrics",
    description:
      "MailMetrics is a full-stack cold email platform designed to help businesses and individuals manage, send, and analyze email campaigns efficiently.",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Express.js", "Redis", "BullMQ"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/yourusername/mailmetrics",
    liveUrl: "https://mailmetrics.com",
  },
  {
    title: "Chatterbox",
    description:
      "A real-time messaging app that enables seamless private and group conversations with fast, reliable delivery.",
    tags: ["Spring Boot", "WebSocket", "Redis", "JWT", "MongoDB", "MySQL", "Docker", "React.js", "Tailwind CSS"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/yourusername/chatterbox",
    liveUrl: "https://chatterbox.com",
  },
  {
    title: "File Sharing Application",
    description:
      "Secure file-sharing platform with unique link generation, email notifications, and support for up to 100MB files.",
    tags: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript", "Nodemailer", "UUID", "CORS"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/yourusername/file-sharing-app",
    liveUrl: "https://file-sharing-app.com",
  },

] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "ExpressJS",
  "PostgreSQL",
  "Python",
  "Springboot",
  "Docker",
  "Redis","RestAPI"
] as const;
