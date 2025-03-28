import { IconType } from "react-icons";

export interface Tech {
  name: string;
  icon: IconType;
  color: string;
}

export interface SocialLink {
    href: string;
    icon: IconType;
    color: string;
  }


export interface NavbarProps {
    scrolled: boolean;
  }

export interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
  category?: string;
  id: string;
  order: number;
  hidden?: boolean;
}

export type ToastType = "success" | "info" | "error" | "warning";
