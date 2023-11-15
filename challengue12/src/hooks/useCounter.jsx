import { useState } from "react";

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    add: handleAdd,
    sub: handleSubtract,
    res: handleReset
  };
};

export default useCounter;