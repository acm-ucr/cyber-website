import ResourceEntry from "@/components/resources/ResourceEntry";
import Sidebar from "@/components/sidebar";
import { resourcesData } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen bg-cyber-black">
      {/* Pass type instead of config */}
      <Sidebar type="resources" />

      <main className="flex-1 p-8 md:p-12 max-w-5xl">
        <h1 className="text-cyber-neongreen text-6xl font-bold font-cyber-main mb-12">
          Resources
        </h1>

        <div className="flex flex-col gap-16">
          {Object.entries(resourcesData).map(([key, data]) => (
            <section id={key} key={key} className="scroll-mt-8">
              <ResourceEntry data={data} />
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}