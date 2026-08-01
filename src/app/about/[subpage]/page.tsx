import { notFound } from "next/navigation";
import AboutEntry from "@/components/about/AboutEntry";
import Sidebar from "@/components/sidebar";
import { aboutData } from "@/data/about";

interface PageProps {
  params: Promise<{
    subpage: string;
  }>;
}

const dynamicParams = false;

const generateStaticParams = async () => {
  return Object.keys(aboutData).map((key) => ({
    subpage: key,
  }));
};

const AboutSubpage = async ({ params }: PageProps) => {
  const { subpage } = await params;
  const data = aboutData[subpage];

  if (!data) {
    notFound();
  }

  return (
    <div className="bg-cyber-black/10 border-cyber-neongreen flex min-h-screen border-collapse border-t-1 backdrop-blur-[26px]">
      <Sidebar type="about" />
      <main className="flex-1 p-8 md:p-12">
        <AboutEntry data={data} />
      </main>
    </div>
  );
};

export { dynamicParams, generateStaticParams };
export default AboutSubpage;
