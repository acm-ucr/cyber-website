import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface PartnerBadgeProps {
  title: string;
  description: string;
  link: string;
}

const PartnerBadge = ({ title, description, link }: PartnerBadgeProps) => {
  return (
    <div className="font-cyber-main bg-cyber-darkgreen border-cyber-neongreen flex h-32 w-lg items-center rounded-2xl border">
      <div className="flex flex-1 flex-col gap-2 p-6 text-center">
        <h3 className="text-cyber-white text-xl font-bold">{title}</h3>
        <p className="text-cyber-lightgreen">{description}</p>
      </div>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyber-white hover:text-cyber-neongreen border-cyber-neongreen flex h-full w-14 items-center justify-center rounded-r-2xl border-l p-0.5 text-2xl transition-colors duration-300"
      >
        <ExternalLink />
      </Link>
    </div>
  );
};

export default PartnerBadge;
