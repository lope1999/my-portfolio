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