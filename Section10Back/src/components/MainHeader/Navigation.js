import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import LoginContext from "../../store/login-context";

const Navigation = (props) => {
  const logincntx = useContext(LoginContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {logincntx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {logincntx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {logincntx.isLoggedIn && (
          <li>
            <button onClick={logincntx.logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
