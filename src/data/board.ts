import { StaticImageData } from "next/image";
import Kiana from "@/public/board/kiana.png";
import Siddharth from "@/public/board/siddharth.jpg";
import Felicia from "@/public/board/felicia.jpg";
import Shantel from "@/public/board/shantel.png";
import Jacob from "@/public/board/jacob.jpg";
import Celso from "@/public/board/celso.png";

export interface BoardData {
  name: string;
  role: string;
  image: StaticImageData;
  link: string;
}

export const boardData: Record<string, BoardData> = {
  kiana: {
    name: "kiana",
    role: "president",
    image: Kiana,
    link: "/board/kiana",
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
