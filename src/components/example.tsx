const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-3/4 items-center gap-1 justify-self-center bg-red-100 p-8">
      <div className="w-1/2 bg-blue-200 p-5 text-left">{props.text1}</div>

      <div className="flex w-1/2 flex-row gap-1">
        <div className="w-full bg-green-200 p-5 text-left">{props.text2}</div>
      </div>

      <div className="w-1/2 bg-yellow-200 p-5">{props.text3}</div>
    </div>
  );
};

export default Example;
