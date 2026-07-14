import GnuLinux from "@/components/resources/gnuLinux";
import Sidebar from "@/components/sidebar";

const Resources = () => {
  return (
    <div className="text-cyber-white flex min-h-screen bg-black">
      <Sidebar type="resources" />

      <main className="flex-1 overflow-y-auto p-12">
        <GnuLinux />
      </main>
    </div>
  );
};

export default Resources;
