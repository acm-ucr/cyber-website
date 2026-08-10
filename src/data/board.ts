import type { StaticImageData } from "next/image";
import kiana from "@/public/board/kiana.svg";

export type BoardMember = {
  name: string;
  email: string;
  position: string;
  image: StaticImageData | string;
  bio: string;
};

export const boardData: BoardMember[] = [
  {
    name: "Kiana Hosseinzadeh",
    email: "khoss010@ucr.edu",
    position: "president",
    image: kiana,
    bio: "Hi! I'm the President of Cyber@UCR and a Computer Science with Business Applications student. I enjoy organizing events and helping grow the club, while creating opportunities for members to get involved. I'm especially interested in Windows systems and cybersecurity, and I'm always looking to expand my knowledge and bring more hands-on projects into the club. Feel free to reach out if you have any questions or want to get involved!",
  },
];
