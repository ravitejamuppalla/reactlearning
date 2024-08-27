import Counter from "./components/Counter";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { Fragment } from "react";
import { authAction } from "./store/redux-store";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";

function App() {
  let isAuth = useSelector((state) => state.authicate.isAuth);

  return (
    <Fragment>
      <Header></Header>
      {!isAuth && <Auth></Auth>}
      {isAuth && <UserProfile></UserProfile>}
      <Counter />
    </Fragment>
  );
}

export default App;
