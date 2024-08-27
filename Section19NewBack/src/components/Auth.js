import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/authStore";

const Auth = () => {
  let dispatch = useDispatch();
  function submitLoginHandler(params) {
    dispatch(authAction.login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitLoginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
