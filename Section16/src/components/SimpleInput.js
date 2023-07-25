import React, { useState, useEffect } from "react";
const SimpleInput = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enterednameToched, setEnteredNameToched] = useState(false);
  const [enteredEmailInput, setEnteredEmailInput] = useState("");
  const [enteredEmailToched, setEnteredEmailToched] = useState(false);

  const enterednameidValid = !enteredInput.trim() == "";
  const enterNameisInvalid = !enterednameidValid && enterednameToched;

  const enteredemailidValid = enteredEmailInput.trim().includes("@");
  const enterEmailisInvalid = enteredemailidValid && enteredEmailToched;
  let fullformIsValid = false;
  // console.log(enterednameidValid);
  // console.log(enterEmailisInvalid);
  if (enterednameidValid && enterEmailisInvalid) {
    fullformIsValid = true;
  }

  function enteredHandlerInput(event) {
    setEnteredInput(event.target.value);
  }

  function enteredChangeBlurInput() {
    setEnteredNameToched(true);
  }

  function enteredHandlerEmailInput(event) {
    setEnteredEmailInput(event.target.value);
  }

  function enteredChangeBlurEmailInput() {
    setEnteredEmailToched(true);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    setEnteredNameToched(true);
    setEnteredInput("");
    setEnteredNameToched(false);
  }

  const onsubmitformcontrolCSS = enterNameisInvalid
    ? "form-control invalid"
    : "form-control";

  console.log(enterEmailisInvalid);
  const onsubmitformcontrolCSSForEmail = !enterEmailisInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={onsubmitformcontrolCSS}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={enteredChangeBlurInput}
          type="text"
          id="name"
          onChange={enteredHandlerInput}
          value={enteredInput}
        />
        {enterNameisInvalid && (
          <p className="error-text">Please enter Valid Input</p>
        )}
      </div>

      <div className={onsubmitformcontrolCSSForEmail}>
        <label htmlFor="name">Your Email</label>
        <input
          onBlur={enteredChangeBlurEmailInput}
          type="text"
          id="name"
          onChange={enteredHandlerEmailInput}
          value={enteredEmailInput}
        />
        {enterEmailisInvalid && (
          <p className="error-text">Please enter Valid Input</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!fullformIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
