"use client";
import { ReactNode } from "react";
import { useTheme } from "@/app/context/theme-context";
import { useWindow } from "@/app/context/window-context";

interface WindowProps {
  children: ReactNode;
}

const renderCommand = (command: string) => {
  const hashIndex = command.indexOf("#");
  const main = hashIndex >= 0 ? command.slice(0, hashIndex) : command;
  const comment = hashIndex >= 0 ? command.slice(hashIndex) : "";

  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

  return (
    <>
      {main.split(emailRegex).map((part, i) =>
        emailRegex.test(part) ? (
          <a
            key={i}
            href={`mailto:${part}`}
            className="hover:text-cyber-neongreen underline"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
      {comment && <span className="opacity-40">{comment}</span>}
    </>
  );
};

const Window = ({ children }: WindowProps) => {
  const { theme } = useTheme();
  const { command } = useWindow();
  const borderColor =
    theme == "red" ? "border-cyber-red" : "border-cyber-neongreen";
  const textColor = theme == "red" ? "text-cyber-red" : "text-cyber-white";

  const glow =
    theme == "red"
      ? "shadow-[0_0_35px_var(--color-cyber-darkred)]"
      : "shadow-[0_0_35px_var(--color-cyber-darkgreen)]";

  return (
    <div
      className={`bg-cyber-black/45 mx-auto mt-5 h-full w-[90%] overflow-hidden backdrop-blur-md`}
    >
      <div
        className={`border-cyber-lightgreen bg-cyber-black/30 font-cyber-main text-cyber-white flex h-12 items-center justify-center rounded-t-[28px] border-3 border-b-0 text-xl`}
      >
        cyberterm - cybersh
      </div>

      <div
        className={`border-[3px] ${borderColor} ${glow} scrollbar-base h-[calc(100%-3rem)] overflow-hidden overflow-y-auto rounded-b-[28px] border-3 ${theme == "red" ? "scrollbar-red" : "scrollbar-default"}`}
      >
        <div className="font-cyber-main m-3 text-2xl">
          <span className="text-cyber-white font-bold">cyber@ucr:~$</span>{" "}
          <span className={textColor}>{renderCommand(command)}</span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Window;
