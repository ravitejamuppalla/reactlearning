import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type == "EMAIL_INPUT_TYPE") {
    return { value: action.val, isvalid: action.val.includes("@") };
  }
  if (action.type == "EMAIL_BLUR") {
    return { value: state.val, isvalid: state.value.includes("@") };
  }
  return { value: "", isvalid: false };
};

const passwordReducer = (state, action) => {
  if (action.type == "PASS_INPUT_TYPE") {
    return { value: action.val, isvalid: action.val.length > 6 };
  }
  if (action.type == "PASS_BLUR") {
    return { value: state.val, isvalid: state.value.length > 6 };
  }
  return { value: "", isvalid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isvalid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isvalid: null,
  });

  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     console.log("Validating the login fucntion");
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 1000);
  //   return () => {
  //     console.log("CLEAN UP");
  //     clearTimeout(handler);
  //     // console.log(handler);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_INPUT_TYPE", val: event.target.value });
    setFormIsValid(emailState.isvalid && passwordState.isvalid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: "PASS_INPUT_TYPE",
      val: event.target.value.trim(),
    });
    // setEnteredPassword(event.target.value);
    setFormIsValid(passwordState.isvalid && emailState.isvalid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASS_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
