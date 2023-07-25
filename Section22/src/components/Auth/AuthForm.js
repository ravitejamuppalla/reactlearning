import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";
import { useHistory } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const enteredEmailRefs = useRef();
  const enteredPasswordRefs = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  function onsubmitHandler(e) {
    e.preventDefault();
    const enteredEmail = enteredEmailRefs.current.value;
    const enteredPassword = enteredPasswordRefs.current.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDaf-buw7IAVlbqvnN6g73XEHWh1Ibzd1s";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDaf-buw7IAVlbqvnN6g73XEHWh1Ibzd1s";
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authenication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((res) => {
        authCtx.login(res.idToken);
        console.log(res);
        history.replace("/profile");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={onsubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={enteredEmailRefs} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={enteredPasswordRefs}
            required
            minLength="7"
          />
        </div>
        <div className={classes.actions}>
          {!isloading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isloading && <p>Sending Request..</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
