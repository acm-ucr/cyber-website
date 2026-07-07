import Link from "next/link";
import { gnuLinuxData } from "@/data/gnuLinux";

const GnuLinux = () => {
  return (
    <div className="font-cyber-main">
      <div className="flex flex-col gap-6">
        <div className="text-cyber-white text-5xl font-bold">
          {gnuLinuxData.title}
        </div>

        <div className="text-cyber-lightgreen text-2xl">
          {gnuLinuxData.subtitle}
        </div>

        <div className="text-cyber-white flex flex-col text-2xl">
          <br />
          {gnuLinuxData.body.map((link, i) => (
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

      <div className="text-cyber-lightgreen text-2xl opacity-5 select-none">
        {gnuLinuxData.subtle}
      </div>
    </div>
  );
};

export default GnuLinux;
