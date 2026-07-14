import { ReactNode } from "react";

interface WindowProps {
  children: ReactNode;
  command: string;
  is404?: boolean;
}

const Window = ({ children, command, is404 = false }: WindowProps) => {
  const borderColor = is404 ? "border-cyber-red" : "border-cyber-neongreen";

  const textColor = is404 ? "text-cyber-red" : "text-cyber-white";

  const glow = is404
    ? "shadow-[0_0_35px_#ff000066]"
    : "shadow-[0_0_35px_#00ff0040]";

  return (
    <div
      className={`mx-auto mt-12 h-[75vh] max-h-[750px] min-h-[500px] w-[90%] max-w-[1400px] overflow-hidden rounded-[28px] border-[3px] ${borderColor} ${glow} bg-cyber-black/45 backdrop-blur-md`}
    >
      <div
        className={`flex h-12 items-center justify-center border-b-2 ${borderColor} bg-cyber-black/30 font-cyber-main text-cyber-white text-xl`}
      >
        cyberterm - cybersh
      </div>

      <div
        className={`h-[calc(100%-3rem)] overflow-y-auto p-8 pr-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent ${is404 ? "[&::-webkit-scrollbar-thumb]:bg-cyber-red" : "[&::-webkit-scrollbar-thumb]:bg-cyber-lightgreen"}`}
      >
        <div className="font-cyber-main mb-8 text-4xl">
          <span className="text-cyber-white font-bold">cyber@ucr:~$</span>{" "}
          <span className={textColor}>{command}</span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Window;
