import React from "react";
import { gnuLinuxData } from "@/data/gnuLinux";

const GnuLinux = () => {
  return (
    <div className="font-cyber-main">
      <div className="flex flex-col gap-6">
        <div className="text-cyber-white text-5xl font-bold">
          { gnuLinuxData.title }
        </div>
        
        <div className="text-cyber-lightgreen text-2xl">
          { gnuLinuxData.subtitle }
        </div>

        <div className="flex flex-col text-cyber-white text-2xl"> {
        
          gnuLinuxData.body.map ((link, i) => (
            <a href={ link } key={i} target="_blank" rel="noopener noreferrer" w-fit className="text-cyber-white underline hover:text-cyber-neongreen">
              { link }
            </a>
          ))}
        </div>
      </div>
      
      <div className="select-none text-cyber-lightgreen opacity-5 text-2xl">
          { gnuLinuxData.subtle }

      </div>
    </div>
  );
};

export default GnuLinux;