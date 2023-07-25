import React, { useState, useEffect } from "react";

const LoginContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const LoginContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedLocal = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (isLoggedLocal === "1") setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
