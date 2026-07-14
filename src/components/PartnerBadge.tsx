import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface PartnerBadgeProps {
  title: string;
  description: string;
  link: string;
}

const PartnerBadge = ({ title, description, link }: PartnerBadgeProps) => {
  return (
    <div className="font-cyber-main bg-cyber-darkgreen border-cyber-neongreen flex items-center rounded-lg border">
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-cyber-white text-xl font-bold">{title}</h3>
        <p className="text-cyber-lightgreen">{description}</p>
      </div>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyber-white hover:text-cyber-neongreen border-cyber-neongreen flex h-full items-center border-l px-6"
      >
        <ExternalLink />
      </Link>
    </div>
  );
};

export default PartnerBadge;
