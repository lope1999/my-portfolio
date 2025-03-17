import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaCss3,
  FaHtml5,
  FaGit,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaJava,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { SocialLink, Tech } from "./type";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SULIAT_01 } from "../assets";
import { User, FolderOpen, Settings, Mail } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Web Development",
    image: SULIAT_01,
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    category: "E-Commerce",
    image: SULIAT_01,
    link: "#",
  },
  {
    id: 3,
    title: "AI Chatbot",
    category: "AI & ML",
    image: SULIAT_01,
    link: "#",
  },
  {
    id: 4,
    title: "Mobile App UI",
    category: "UI/UX",
    image: SULIAT_01,
    link: "#",
  },
  {
    id: 5,
    title: "Dashboard Design",
    category: "UI/UX",
    image: SULIAT_01,
    link: "#",
  },
];

export const techStacks: Tech[] = [
  { name: "React", icon: FaReact, color: "#20D9FE" },
  { name: "Node.js", icon: FaNodeJs, color: "#388039" },
  { name: "Java", icon: FaJava, color: "#4E88C3" },
  { name: "JavaScript", icon: FaJs, color: "#F0DC57" },
  { name: "TypeScript", icon: SiTypescript, color: "#127ECE" },
  { name: "HTML", icon: FaHtml5, color: "#FF5227" },
  { name: "CSS", icon: FaCss3, color: "#58A7DF" },
  { name: "Git", icon: FaGit, color: "#080808" },
];

export const socialLinks: SocialLink[] = [
  {
    href: "mailto:alagasuliattitilope@gmail.com",
    icon: MdAlternateEmail,
    color: "#F15649",
  },
  {
    href: "https://www.linkedin.com/in/suliat-titilope-alaga",
    icon: FaLinkedin,
    color: "#126ACA",
  },
  { href: "https://github.com/lope1999", icon: FaGithub, color: "#080808" },
  {
    href: "https://twitter.com/AlagaSuliat",
    icon: FaTwitter,
    color: "#1BA5F6",
  },
  {
    href: "https://www.instagram.com/___lope/profilecard/?igsh=ODZwY3Z6bzc4bHVm",
    icon: FaInstagram,
    color: "#FFC057",
  },
];

export const navItems = [
  { href: "#about", label: "About", icon: <User size={18} /> },
  { href: "#projects", label: "Projects", icon: <FolderOpen size={18} /> },
  { href: "#tech", label: "Tech Stack", icon: <Settings size={18} /> },
  { href: "#contact", label: "Contact", icon: <Mail size={18} /> },
];

export const projectCategories = [
  "All",
  "Web Development",
  "API",
  "AI & ML",
  "E-Commerce",
];

export const shapes = [
  {
    initial: { x: -100, y: 0 },
    animate: { x: 100, y: 20, rotate: 360 },
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror" as const,
    },
    style: { top: "15%", left: "5%" },
  },
  {
    initial: { x: 50, y: 0 },
    animate: { x: -50, y: -20, rotate: -360 },
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror" as const,
    },
    style: { top: "70%", left: "90%" },
  },
  {
    initial: { x: 0, y: 50 },
    animate: { x: 0, y: -50, rotate: 180 },
    transition: {
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror" as const,
    },
    style: { top: "80%", left: "30%" },
  },
  {
    initial: { x: 0, y: 50 },
    animate: { x: 0, y: -50, rotate: 180 },
    transition: {
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror" as const,
    },
    style: { top: "50%", left: "10%" },
  },
  {
    initial: { x: 0, y: 50 },
    animate: { x: 0, y: -50, rotate: 180 },
    transition: {
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror" as const,
    },
    style: { top: "10%", left: "80%" },
  },
  {
    initial: { x: -30, y: 0 },
    animate: { x: 30, y: 20, rotate: 360 },
    transition: {
      duration: 9,
      repeat: Infinity,
      repeatType: "mirror" as const,
    },
    style: { top: "30%", left: "25%" },
  },
  {
    initial: { x: 30, y: 0 },
    animate: { x: -30, y: -20, rotate: -360 },
    transition: {
      duration: 11,
      repeat: Infinity,
      repeatType: "mirror" as const,
    },
    style: { top: "50%", left: "65%" },
  },
];

/**
 * Here we wrap literal <h2> tags in spans with .tag class,
 * so React renders them as text instead of actual HTML tags.
 */
export const Title = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: 2px;
  position: relative;
  color: ${({ theme }) => theme.text};

  /* This class styles the literal <h2> and </h2> tags */
  .tag {
    font-size: 1rem;
    margin: 0 8px;
    color: ${({ theme }) => theme.text};
    opacity: 0.7;
    font-style: italic;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 1.7rem;
    text-align: center;

    .tag {
      font-size: 0.7rem;
      margin: 0 8px;
      opacity: 0.7;
    }
  }
`;

export const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  font-weight: 300;
  opacity: 0.9;
  color: ${({ theme }) => theme.text};

  margin-bottom: 20px;
  .tag {
    font-size: 0.9rem;
    margin: 0 8px;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
  }

  @media (max-width: 450px) {
    font-size: 0.6rem;
    text-align: center;

    .tag {
      font-size: 0.5rem;
      margin: 0 8px;
      opacity: 0.7;
    }
  }
`;
