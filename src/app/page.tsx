import Landing from "@/components/home/landing";
import Example from "@/components/example";

const Home = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Example
        text1="Prop1"
        text2="Prop2"
        text3="Props"
        text4="Prop2"
      ></Example>
      <Landing />
    </div>
  );
};

export default Home;
