import Link from "next/link";
import { incidentResponseData } from "@/data/incidentResponse";

const IncidentResponse = () => {
  return (
    <div className="font-cyber-main">
      <div className="flex flex-col gap-6">
        <div className="text-cyber-white text-5xl font-bold">
          {incidentResponseData.title}
        </div>

        <div className="text-cyber-lightgreen text-2xl">
          {incidentResponseData.subtitle}
        </div>

        <div className="text-cyber-white flex flex-col text-2xl">
          <br />
          {incidentResponseData.body.map((link, i) => (
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
    </div>
  );
};

export default IncidentResponse;
