const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-4 justify-self-center rounded-md bg-black p-8">
      <div className="bg-cyber-lightgreen w-full rounded-md p-5 text-center text-xl text-black">
        {props.text1}
      </div>

      <div className="flex w-full flex-row gap-2">
        <div className="bg-cyber-neongreen w-1/2 rounded-full p-5 text-center text-xl text-black">
          {props.text2}
        </div>
        <div className="bg-cyber-darkgreen w-1/2 rounded-full p-5 text-center text-xl text-white">
          {props.text4}
        </div>
      </div>

      <div className="bg-cyber-darkred w-full rounded-md p-5 text-center text-xl text-white">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;
