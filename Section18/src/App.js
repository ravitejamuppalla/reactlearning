import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function App() {
  const AuthValue = useSelector((state) => state.auth.isAuthentication);
  return (
    <Fragment>
      <Header></Header>
      {!AuthValue && <Auth></Auth>}
      {AuthValue && <UserProfile></UserProfile>}
      <Counter />
    </Fragment>
  );
}

export default App;
