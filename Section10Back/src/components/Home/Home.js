import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import LoginContext from "../../store/login-context";
import Button from "../UI/Button/Button";

const Home = (props) => {
  const loginContext = useContext(LoginContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={loginContext.logout}>LogOut</Button>
    </Card>
  );
};

export default Home;
