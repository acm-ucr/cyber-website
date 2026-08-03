import { StaticImageData } from "next/image";
import Discord from "@/public/Discord.svg";
import Instagram from "@/public/Instagram.svg";
import LinkedIn from "@/public/Linkedin.svg";
import Email from "@/public/Mail.svg";

export interface FooterLink {
  href: string;
  icon: StaticImageData;
  alt: string;
  external: boolean;
}

export const footerLinks: FooterLink[] = [
  {
    href: "mailto:cyberucr@gmail.com",
    icon: Email,
    alt: "Email icon",
    external: false,
  },
  {
    href: "https://www.instagram.com/cyber_ucr/",
    icon: Instagram,
    alt: "Instagram icon",
    external: true,
  },
  {
    href: "https://discord.ucrcyber.org/",
    icon: Discord,
    alt: "Discord icon",
    external: true,
  },
  {
    href: "https://linkedin.com/company/cyberucr",
    icon: LinkedIn,
    alt: "LinkedIn icon",
    external: true,
  },
];
