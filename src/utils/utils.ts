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
  FaJava
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { SocialLink, Tech } from "./type";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SULIAT_01 } from "../assets";

export const projects = [
  { id: 1, title: "Portfolio Website", category: "Web Development", image: SULIAT_01, link:'#' },
  { id: 2, title: "E-Commerce Store", category: "E-Commerce", image: SULIAT_01, link:'#' },
  { id: 3, title: "AI Chatbot", category: "AI & ML", image: SULIAT_01, link:'#' },
  { id: 4, title: "Mobile App UI", category: "UI/UX", image: SULIAT_01, link:'#' },
  { id: 5, title: "Dashboard Design", category: "UI/UX", image: SULIAT_01, link:'#' }
];

export const techStacks: Tech[] = [
  { name: "React", icon: FaReact, color: "#20D9FE" },
  { name: "Node.js", icon: FaNodeJs, color: "#388039" },
  { name: "Java", icon: FaJava, color: "#4E88C3" },
  { name: "JavaScript", icon: FaJs, color: "#F0DC57" },
  {name: 'TypeScript', icon:SiTypescript, color:'#127ECE'},
  { name: "HTML", icon: FaHtml5, color: "#FF5227" },
  { name: "CSS", icon: FaCss3, color: "#58A7DF" },
  { name: "Git", icon: FaGit, color: "#080808" },
];


export const socialLinks: SocialLink[] = [
  { href: "mailto:alagasuliattitilope@gmail.com", icon: MdAlternateEmail, color: "#F15649" },
  { href: "https://www.linkedin.com/in/suliat-titilope-alaga", icon: FaLinkedin, color: "#126ACA" },
  { href: "https://github.com/lope1999", icon: FaGithub, color: "#080808" },
  { href: "https://twitter.com/AlagaSuliat", icon: FaTwitter, color: "#1BA5F6" },
  { href: "https://www.instagram.com/___lope/profilecard/?igsh=ODZwY3Z6bzc4bHVm", icon: FaInstagram, color: "#FFC057" },
];

export const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#contact", label: "Contact" },
];

export const projectCategories = ["All", "Web Development", "E-Commerce", "AI & ML", "UI/UX"];

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
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  font-weight: 300;
  opacity: 0.9;
`;


