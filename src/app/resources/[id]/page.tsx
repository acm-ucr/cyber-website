import { notFound } from "next/navigation";
import { resourcesData } from "@/data/resources";
import ResourceEntry from "@/components/resources/ResourceEntry";

interface PageProps {
  params: { id: string };
}

const ResourcePage = ({ params }: PageProps) => {
  const id = params.id;
  const resource = resourcesData[id.toLowerCase()];

  if (!resource) {
    notFound();
  }
  return <ResourceEntry data={resource} />;
};

export default ResourcePage;

// i don't get it too hard :(((