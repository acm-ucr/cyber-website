import Link from "next/link";
import { ctfData } from "@/data/ctf";

const CTF = () => {
  return (
    <div className="font-cyber-main">
      <div className="flex flex-col gap-6">
        <div className="text-cyber-white text-5xl font-bold">
          {ctfData.title}
        </div>

        <div className="text-cyber-lightgreen text-2xl">
          {ctfData.subtitle}
        </div>

        <div className="text-cyber-white flex flex-col text-2xl">
          <br />
          {ctfData.body.map((link, i) => (
            <Link
              href={link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-white hover:text-cyber-neongreen underline"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTF;
