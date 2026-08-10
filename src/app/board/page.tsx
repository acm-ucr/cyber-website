import BoardEntry from "@/components/board/boardEntry";
import { boardData } from "@/data/board";

const Board = () => {
  return (
    <div className="font-cyber-main flex flex-col gap-12 px-5 py-10">
      {boardData.map((member) => (
        <BoardEntry key={member.email} {...member} />
      ))}
    </div>
  );
};

export default Board;
