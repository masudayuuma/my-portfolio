import { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGem,
  FaTrain,
  FaDatabase,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaTerminal,
  FaCloud,
} from "react-icons/fa";

export type SkillCategory = "frontend" | "backend" | "tools";

export interface Skill {
  name: string;
  icon: IconType;
  proficiency: number; // 0-100
  category: SkillCategory;
}

export const skills: Skill[] = [
  {
    name: "HTML5",
    icon: FaHtml5,
    proficiency: 95,
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    proficiency: 90,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    proficiency: 85,
    category: "frontend",
  },
  {
    name: "React",
    icon: FaReact,
    proficiency: 80,
    category: "frontend",
  },
  {
    name: "Ruby",
    icon: FaGem,
    proficiency: 90,
    category: "backend",
  },
  {
    name: "Ruby on Rails",
    icon: FaTrain,
    proficiency: 95,
    category: "backend",
  },
  {
    name: "SQL",
    icon: FaDatabase,
    proficiency: 85,
    category: "backend",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    proficiency: 70,
    category: "backend",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    proficiency: 90,
    category: "tools",
  },
  {
    name: "Docker",
    icon: FaDocker,
    proficiency: 75,
    category: "tools",
  },
  {
    name: "Linux/Unix",
    icon: FaTerminal,
    proficiency: 80,
    category: "tools",
  },
  {
    name: "AWS",
    icon: FaCloud,
    proficiency: 65,
    category: "tools",
  },
];
