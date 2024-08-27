import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/authStore";

const Header = () => {
  let dispatch = useDispatch();
  let enableSideNav = useSelector((state) => state.authicate.isAuth);
  function logoutHandler(params) {
    dispatch(authAction.logout());
  }
  console.log(enableSideNav);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {enableSideNav && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
