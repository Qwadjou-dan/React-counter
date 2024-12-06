import React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <div className="text-4xl">{count}</div>
      <div className="flex flex-row gap-10">
        <Button className="bg-green-800" onClick={handleIncrease}>
          Increase Count
        </Button>
        <Button className="bg-red-700" onClick={handleDecrease}>
          Decrease Count
        </Button>
      </div>
    </div>
  );
};

export default Counter;
