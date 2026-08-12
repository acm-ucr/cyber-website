import { StaticImageData } from "next/image";
import Kiana from "@/public/board/kiana.webp";
import Siddharth from "@/public/board/siddharth.webp";
import Felicia from "@/public/board/felicia.webp";
import Shantel from "@/public/board/shantel.webp";
import Jacob from "@/public/board/jacob.webp";
import Celso from "@/public/board/celso.webp";

export interface BoardData {
  name: string;
  email?: string;
  role: string;
  image: StaticImageData;
  link: string;
  bio?: string;
}

export const boardData: Record<string, BoardData> = {
  kiana: {
    name: "kiana",
    email: "khoss010@ucr.edu",
    role: "president",
    image: Kiana,
    link: "/board/kiana",
    bio: "Hi! I'm the President of Cyber@UCR and a Computer Science with Business Applications student. I enjoy organizing events and helping grow the club, while creating opportunities for members to get involved. I'm especially interested in Windows systems and cybersecurity, and I'm always looking to expand my knowledge and bring more hands-on projects into the club. Feel free to reach out if you have any questions or want to get involved!",

  },

  siddharth: {
    name: "siddharth",
    role: "vice president",
    image: Siddharth,
    link: "/board/siddharth",
  },

  felicia: {
    name: "felicia",
    role: "secretary",
    image: Felicia,
    link: "/board/felicia",
  },

  shantel: {
    name: "shantel",
    role: "ethics director",
    image: Shantel,
    link: "/board/shantel",
  },

  jacob: {
    name: "jacob",
    role: "treasurer",
    image: Jacob,
    link: "/board/jacob",
  },

  celso: {
    name: "celso",
    role: "outreach director",
    image: Celso,
    link: "/board/celso",
  },
};
