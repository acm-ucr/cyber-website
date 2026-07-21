import { notFound } from "next/navigation";
import AboutEntry from "@/components/about/AboutEntry";
import Sidebar from "@/components/sidebar";
import { aboutData } from "@/data/about";

interface PageProps {
  params: Promise<{
    subpage: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(aboutData).map((key) => ({
    subpage: key,
  }));
}

export default async function AboutSubpage({ params }: PageProps) {
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
}
