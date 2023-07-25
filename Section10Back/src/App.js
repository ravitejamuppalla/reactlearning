import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import LoginContext from "./store/login-context";

function App() {
  const logincntx = useContext(LoginContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!logincntx.isLoggedIn && <Login />}
        {logincntx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
