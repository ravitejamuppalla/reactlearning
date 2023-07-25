import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function MainNaviagation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/newQuotes" activeClassName={classes.active}>
              New Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNaviagation;
