import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctrx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctrx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctrx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctrx.isLoggedIn && (
          <li>
            <button onClick={ctrx.islogOut}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
