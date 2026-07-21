import { notFound } from "next/navigation";
import ResourceEntry from "@/components/resources/ResourceEntry";
import Sidebar from "@/components/sidebar";
import { resourcesData } from "@/data/resources";

interface PageProps {
  params: Promise<{
    subpage: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(resourcesData).map((key) => ({
    subpage: key,
  }));
}

export default async function ResourceSubpage({ params }: PageProps) {
  const { subpage } = await params;
  const data = resourcesData[subpage];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex min-h-screen  bg-cyber-black/10 backdrop-blur-[26px]">
      <Sidebar type="resources" />
      <main className="flex-1 p-8 md:p-12">
        <ResourceEntry data={data} />
      </main>
    </div>
  );
}