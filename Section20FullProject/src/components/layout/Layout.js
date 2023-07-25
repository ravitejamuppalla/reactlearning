import { React, Fragment } from "react";
import MainNaviagation from "./MainNaviagation";
import classes from "./Layout.module.css";
function Layout(props) {
  return (
    <Fragment>
      <MainNaviagation></MainNaviagation>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
