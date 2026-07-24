import Image from "next/image";
import type { BoardMember } from "@/data/board";

const BoardEntry = ({ name, email, position, image, bio }: BoardMember) => {
  const firstName = name.trim().split(/\s+/)[0]?.toLowerCase() ?? "";

  return (
    <div className="font-cyber-main text-cyber-lightgreen mx-auto flex w-2/3 flex-col gap-8">
      <div className="flex gap-4 text-xl">
        <p className="w-2/5 shrink-0 text-white">
          <span className="font-bold">cyber@ucr:~$</span>
          <span className="ml-3">id</span>
          <a
            href={`mailto:${email}`}
            className="hover:text-cyber-neongreen ml-3 underline"
          >
            {email}
          </a>
        </p>

        <p className="text-cyber-lightgreen/40"># click to email {firstName}</p>
      </div>

      <hr className="border-cyber-lightgreen/30" />

      <div className="flex items-start gap-4">
        <div className="flex w-2/5 gap-4">
          <div className="border-cyber-lightgreen/60 flex-1 overflow-hidden rounded-2xl border-3 bg-black/70">
            <div className="p-5">
              <div className="border-cyber-lightgreen/60 relative aspect-square border-2">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="border-cyber-lightgreen/60 bg-cyber-green/20 border-t p-4 text-center">
              <p className="text-2xl font-bold text-white">{firstName}</p>
              <p className="text-2xl font-light">{position}</p>
            </div>
          </div>

          <span className="bg-cyber-lightgreen/30 my-12 w-1.5 shrink-0 rounded-full" />
        </div>

        <div className="border-cyber-lightgreen/60 bg-cyber-green/10 flex-1 rounded-2xl border-3 px-12 py-10 backdrop-blur-sm">
          <h2 className="text-6xl font-bold text-white">{name}</h2>
          <p className="mt-8 text-2xl">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardEntry;
