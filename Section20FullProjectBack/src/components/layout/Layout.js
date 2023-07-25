import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
function Layout(props) {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <div className={classes.main}>{props.children}</div>
    </Fragment>
  );
}
export default Layout;
