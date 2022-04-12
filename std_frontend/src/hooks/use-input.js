import { useState } from "react";

const useInput = (validateValue) => {
  // usestate for name
  const [enteredValue, setEnteredValue] = useState("");

  // input change function
  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  //   reset form hanlder data
  const reset = () => {
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    inputChangeHandler,
    reset: reset,
  };
};

export default useInput;
