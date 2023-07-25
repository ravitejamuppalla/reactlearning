import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const useCntx = useContext(AuthContext);
  const history = useHistory();
  const enteredPasswordRef = useRef();
  function onEnteredPasswordHandler(e) {
    e.preventDefault();
    const updatedPassword = enteredPasswordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDaf-buw7IAVlbqvnN6g73XEHWh1Ibzd1s",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: useCntx.token,
          password: updatedPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {
        console.log(res.json());

        history.replace("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <form className={classes.form} onSubmit={onEnteredPasswordHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={enteredPasswordRef}
          minLength="7"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
