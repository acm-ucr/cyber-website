import Link from "next/link";
import { AboutData } from "@/data/about";

interface AboutEntryProperties {
  data: AboutData;
}

const AboutEntry = ({ data }: AboutEntryProperties) => {
  return (
    <div className="font-cyber-main">
      <div className="flex flex-col gap-6">
        <div className="text-cyber-white text-5xl font-bold">{data.title}</div>

        {data.subtitle && (
          <div className="text-cyber-lightgreen text-2xl">{data.subtitle}</div>
        )}

        {data.discordLink && (
          <div className="text-cyber-lightgreen mt-2 flex flex-col text-2xl">
            <p>{data.discordLink.text}</p>
            <Link
              href={data.discordLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-white hover:text-cyber-neongreen w-fit break-all underline"
            >
              {data.discordLink.linkText}
            </Link>
          </div>
        )}

        {data.sections && data.sections.length > 0 && (
          <div className="mt-4 flex flex-col gap-8">
            {data.sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                {section.heading && (
                  <div className="text-cyber-white text-3xl font-bold">
                    {section.heading}
                  </div>
                )}

                {section.body && section.body.length > 0 && (
                  <div className="text-cyber-lightgreen flex flex-col pl-4 text-2xl">
                    {section.body.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {data.subtle && (
        <div className="text-cyber-lightgreen mt-12 text-2xl opacity-5 select-none">
          {data.subtle}
        </div>
      )}
    </div>
  );
};

export default AboutEntry;
