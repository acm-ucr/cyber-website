"use client";

import { navigations } from "@/data/navigation";
import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/cyberlogo.svg";
import { useNavbarTheme } from "@/app/context/navbar-context";

const Navbar = () => {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme } = useNavbarTheme();
  const boxClasses =
    theme === "red"
      ? "bg-red-500/10 border border-red-500/30 text-red-400"
      : "bg-cyber-lightgreen/10 border border-cyber-lightgreen/30 text-cyber-lightgreen";

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });

      setTime(currentTime);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between px-5 py-5">
      <Link href="/">
        <div className={`flex items-center rounded-sm px-4 py-2 ${boxClasses}`}>
          <Image src={Logo} alt="cyber-logo" />
        </div>
      </Link>

      <div
        className={`font-cyber-main flex items-center rounded-lg px-3 py-1 font-semibold backdrop-blur-sm ${boxClasses}`}
      >
        {navigations.map(({ link, name }, index) => (
          <Fragment key={link}>
            <Link href={link} className="px-7">
              {name}
            </Link>

            {index < navigations.length - 1 && <span>|</span>}
          </Fragment>
        ))}
      </div>

      <div
        className={`font-cyber-main flex items-center rounded-lg px-4 py-2 font-extralight ${boxClasses}`}
      >
        〈 at {mounted ? time : ""}
      </div>
    </div>
  );
};

export default Navbar;
