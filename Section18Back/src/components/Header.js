import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../store/index";

const Header = () => {
  const login = useSelector((state) => state.auth.isauthenticated);
  const dispatch = useDispatch();
  function logoutHandler(e) {
    e.preventDefault();
    dispatch(isAuthenticated.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>{login && <a href="/">My Products</a>}</li>
          <li>{login && <a href="/">My Sales</a>}</li>
          <li>{login && <button onClick={logoutHandler}>Logout</button>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
