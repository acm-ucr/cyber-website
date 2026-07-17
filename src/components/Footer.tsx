import Image from "next/image";
import Link from "next/link";
import Discord from "@/public/Discord.svg";
import Instagram from "@/public/Instagram.svg";
import LinkedIn from "@/public/Linkedin.svg";
import Email from "@/public/Mail.svg";

const Footer = () => {
  return (
    <div className="mr-8 flex w-4/5 justify-end gap-2">
      <Link href="mailto:cyberucr@gmail.com">
        <Image src={Email} alt="Email icon" className="p-0.5" />
      </Link>

      <Link
        href="https://www.instagram.com/cyber_ucr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={Instagram} alt="Instagram icon" className="p-0.5" />
      </Link>

      <Link
        href="https://discord.ucrcyber.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={Discord} alt="Discord icon" className="p-0.5" />
      </Link>

      <Link
        href="https://linkedin.com/company/cyberucr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={LinkedIn} alt="LinkedIn icon" className="p-0.5" />
      </Link>
    </div>
  );
};

export default Footer;
