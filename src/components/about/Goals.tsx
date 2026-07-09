import { goalsData } from "@/data/goals";
const Goals = () => {
  const {
    title,
    description,
    topics,
    topicsTitle,
    competitions,
    competitionsTitle,
  } = goalsData;
  return (
    <div className="space-y-12 font-mono text-white">
      <div className="space-y-4">
        <div className="text-4xl font-bold tracking-tight">{title}</div>
        <p className="text-cyber-lightgreen max-w-2xl text-lg leading-relaxed">
          {description}
        </p>
      </div>

      <div className="space-y-4">
        <div className="text-3xl font-bold tracking-tight">{topicsTitle}</div>
        <div className="text-cyber-lightgreen space-y-2 pl-4 text-lg">
          {topics.map((topic, index) => (
            <p key={index}>{topic}</p>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-3xl font-bold tracking-tight">
          {competitionsTitle}
        </div>
        <div className="text-cyber-lightgreen space-y-2 pl-4 text-lg">
          {competitions.map((competition, index) => (
            <p key={index}>{competition}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
