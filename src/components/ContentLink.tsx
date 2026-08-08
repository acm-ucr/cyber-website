import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ContentLinkProps {
  link: string;
  icon: LucideIcon;
  external?: boolean;
  children: ReactNode;
}

const ContentLink = ({
  link,
  icon: Icon,
  external = false,
  children,
}: ContentLinkProps) => {
  return (
    <div className="font-cyber-main flex h-32 w-lg items-stretch gap-1">
      <div className="bg-cyber-darkgreen border-cyber-lightgreen flex flex-1 items-center rounded-l-2xl border p-6">
        {children}
      </div>

      <Link
        href={link}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="text-cyber-white hover:text-cyber-neongreen bg-cyber-darkgreen border-cyber-lightgreen flex h-full w-14 items-center justify-center rounded-r-2xl border p-0.5 text-2xl transition-colors duration-300"
      >
        <Icon />
      </Link>
    </div>
  );
};

export default ContentLink;
