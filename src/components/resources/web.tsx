import Link from "next/link";
import { webData } from "@/data/web";

const Web = () => {
  return (
    <div className="font-cyber-main">
      <div className="flex flex-col gap-6">
        <div className="text-cyber-white text-5xl font-bold">
          {webData.title}
        </div>

        <div className="text-cyber-lightgreen text-2xl">{webData.subtitle}</div>

        <div className="text-cyber-white flex flex-col text-2xl">
          <br />
          {webData.body.map((link, i) => (
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

export default Web;
