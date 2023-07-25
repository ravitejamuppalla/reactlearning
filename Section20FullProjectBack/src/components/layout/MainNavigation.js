import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
function MainNavigation() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>Ravi Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/AllQuotes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/AddNewQuote">
              Add New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
