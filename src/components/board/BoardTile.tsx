import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { BoardData } from "@/data/board";
import ContentLink from "@/components/ContentLink";

interface BoardTileProperties {
  data: BoardData;
}

const BoardTile = ({ data }: BoardTileProperties) => {
  return (
    <ContentLink link={data.link} icon={ChevronRight}>
      <div className="flex w-full items-center gap-4">
        <Image
          src={data.image}
          alt={`${data.name} headshot`}
          className="border-cyber-lightgreen h-20 w-20 border object-cover"
        />

        <div className="flex flex-col">
          <div className="text-cyber-white text-xl font-bold">
            ~/{data.name}
          </div>
          <div className="text-cyber-lightgreen">{data.role}</div>
        </div>
      </div>
    </ContentLink>
  );
};

export default BoardTile;
