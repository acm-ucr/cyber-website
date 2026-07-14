import Goals from "@/components/about/Goals";
import Sidebar from "@/components/sidebar";

const About = () => {
  return (
    <div className="text-cyber-white flex min-h-screen bg-black">
      <Sidebar type="about" />

      <main className="flex-1 overflow-y-auto p-12">
        <Goals />
      </main>
    </div>
  );
};

export default About;
