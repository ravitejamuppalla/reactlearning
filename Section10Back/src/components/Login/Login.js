import React, { useReducer, useState, useEffect, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import LoginContext from "../../store/login-context";

const deafultvalues = { value: "", isvalid: null };
const reducerFunction = (state, action) => {
  if (action.valueData == "ENTERD_INPUT") {
    return { value: action.val, isvalid: action.val.includes("@") };
  }
  if (action.valueData == "INPUT_BLUR") {
    return { value: state.value, isvalid: state.value.includes("@") };
  }
  return deafultvalues;
};

function reducerPasswordFunction(state, action) {
  if (action.valueData == "ENTERD_PASSWORD") {
    return { value: action.val, isvalid: action.val.trim().length > 6 };
  }
  if (action.valueData == "INPUT_BLUR") {
    return { value: state.value, isvalid: state.value.trim().length > 6 };
  }
  return deafultvalues;
}

const Login = (props) => {
  const logincontx = useContext(LoginContext);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   console.log("Entering ino the USE Effect");
  //   return () => {
  //     console.log("CLEANUP USEEFFECT");
  //   };
  // });

  const [enteredEmailReducer, dispatchEmail] = useReducer(
    reducerFunction,
    deafultvalues
  );

  const [enteredpasswordRenducer, dispathPassword] = useReducer(
    reducerPasswordFunction,
    deafultvalues
  );

  let { isvalid: isEnteredEmailValue } = enteredEmailReducer;
  let { isvalid: isEnteredPasswordValue } = enteredpasswordRenducer;
  useEffect(() => {
    const timeoutValue = setTimeout(() => {
      console.log("Checking the validity of UseEffect");
      setFormIsValid(isEnteredEmailValue && isEnteredPasswordValue);
    }, 500);

    return () => {
      console.log("Cleanup");
      clearTimeout(timeoutValue);
    };
  }, [isEnteredEmailValue, isEnteredPasswordValue]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      valueData: "ENTERD_INPUT",
      val: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    dispathPassword({
      valueData: "ENTERD_PASSWORD",
      val: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      valueData: "INPUT_BLUR",
    });
  };

  const validatePasswordHandler = () => {
    dispathPassword({
      valueData: "INPUT_BLUR",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    logincontx.login(enteredEmailReducer.value, enteredpasswordRenducer.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            enteredEmailReducer.isvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmailReducer.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            enteredpasswordRenducer.isvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredpasswordRenducer.value}
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
