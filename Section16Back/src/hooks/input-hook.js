import React, { useState } from "react";
function useInput(inputvalidationfucntion) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isToched, setIsToched] = useState(false);

  const inputisValid = inputvalidationfucntion(enteredValue);

  const hasError = !inputisValid && isToched;

  function valueChangeHandler(e) {
    setEnteredValue(e.target.value);
  }

  function valueBlurHandler() {
    setIsToched(true);
  }

  function reset() {
    setEnteredValue("");
    setIsToched(false);
  }

  return {
    value: enteredValue,
    hasError: hasError,
    isToched: isToched,
    inputisValid: inputisValid,
    valueChangeHandler: valueChangeHandler,
    valueBlurHandler: valueBlurHandler,
    reset: reset,
  };
}

export default useInput;
