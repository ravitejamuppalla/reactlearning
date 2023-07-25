import React, { Fragment } from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const userProfile = useSelector((state) => state.auth.isauthenticated);
  return (
    <Fragment>
      <Header></Header>
      {!userProfile && <Auth></Auth>}
      {userProfile && <UserProfile></UserProfile>}
      <Counter />;
    </Fragment>
  );
}

export default App;
