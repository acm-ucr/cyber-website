import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface PartnerBadgeProps {
  title: string;
  description: string;
  link: string;
}

const PartnerBadge = ({ title, description, link }: PartnerBadgeProps) => {
  return (
    <div className="font-cyber-main flex h-32 w-lg items-center gap-1">
      <div className="bg-cyber-darkgreen border-cyber-lightgreen flex flex-1 flex-col gap-2 rounded-l-2xl border p-6 text-center">
        <h3 className="text-cyber-white text-xl font-bold">{title}</h3>
        <p className="text-cyber-lightgreen">{description}</p>
      </div>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyber-white hover:text-cyber-neongreen bg-cyber-darkgreen border-cyber-lightgreen flex h-full w-14 items-center justify-center rounded-r-2xl border p-0.5 text-2xl transition-colors duration-300"
      >
        <ExternalLink />
      </Link>
    </div>
  );
};

export default PartnerBadge;
