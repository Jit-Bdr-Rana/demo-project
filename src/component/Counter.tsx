import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className=" flex justify-center flex-col items-center">
      {counter}
      <div className="flex gap-4">
        <button
          onClick={handleIncrement}
          className="border bg-red-500 p-3 px-5 cursor-pointer"
        >
          +
        </button>
        <button
          disabled={counter === 0}
          onClick={handleDecrement}
          className=" border bg-red-500 p-3 px-5 cursor-pointer"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
