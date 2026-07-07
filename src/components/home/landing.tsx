import Image from "next/image";
import Logo from "@/public/Cyber_Logo.svg";

const Landing = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="font-cyber-main bg-cyber-black w-4/5 overflow-hidden rounded-lg pb-9 backdrop-blur-2xl">
        <p className="text-cyber-white p-4 text-2xl font-extrabold">
          cyber@ucr:~${" "}
          <span className="font-cyber-lightgreen font-normal">cyberfetch</span>
        </p>

        <div className="flex flex-row gap-2 px-4">
          <Image
            src={Logo}
            alt="Cyber Logo"
            className="bg-cyber-black rounded-xl py-8"
          />

          <div className="flex flex-col justify-center px-4">
            <p className="text-cyber-white text-5xl font-extrabold">
              cyber@ucr
            </p>
            <p className="font-md text-cyber-lightgreen mt-4 block text-3xl">
              UC Riverside's Cybersecurity Club. Dedicated to advancing computer
              security knowledge through competitions and experimentation. We go
              by the name, Cyber@UCR!
            </p>
          </div>
        </div>

        <button className="from-cyber-black to-cyber-darkgreen float-right mx-4 rounded-lg border border-[#9DFFC3] bg-linear-to-b px-6 py-1 font-bold">
          learn more
        </button>
      </div>
    </div>
  );
};

export default Landing;
