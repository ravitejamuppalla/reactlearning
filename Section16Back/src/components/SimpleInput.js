import React, { useEffect, useState } from "react";
import useInput from "../hooks/input-hook";
const SimpleInput = (props) => {
  function inputNameValidation(inputData) {
    return inputData.trim() !== "";
  }
  const {
    value,
    hasError,
    isToched,
    inputisValid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset,
  } = useInput(inputNameValidation);

  function inputEmailValidation(inputData) {
    return inputData.includes("@");
  }
  const {
    value: emailValue,
    hasError: emailHasError,
    isToched: emailIsToched,
    inputisValid: emailInputisValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: EmailReset,
  } = useInput(inputEmailValidation);

  const [totalFormValid, setTotalFormValid] = useState(false);

  useEffect(() => {
    if (inputisValid && emailInputisValid) {
      setTotalFormValid(true);
    } else {
      setTotalFormValid(false);
    }
  }, [inputisValid, emailInputisValid]);

  function onsubmithandler(e) {
    e.preventDefault();

    try {
      if (!inputisValid && !emailInputisValid) {
        return "";
      }

      console.log(value);
      console.log(emailValue);
      reset();
      EmailReset();
    } catch (error) {
      console.log(error.message);
    }
  }

  const inputformerror = hasError ? "form-control invalid" : "form-control";
  const inputformerrorEmail = emailHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={onsubmithandler}>
      <div className={inputformerror}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={value}
          onBlur={nameBlurHandler}
        />
      </div>
      {hasError && <p className="error-text">Please enter Valid Input</p>}

      <div className={inputformerrorEmail}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="Email"
          onChange={emailChangeHandler}
          value={emailValue}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailHasError && (
        <p className="error-text">Please enter Valid Email Input</p>
      )}

      <div className="form-actions">
        <button disabled={!totalFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
