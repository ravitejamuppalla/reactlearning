import { Switch, Route } from "react-router-dom";
import AuthContext from "./store/auth-context";
import React, { useContext } from "react";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useHistory } from "react-router-dom";

function App() {
  const usecntx = useContext(AuthContext);
  const isLoggedIn = usecntx.isLoggedIn;
  const history = useHistory();

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}

        <Route path="/profile">
          {isLoggedIn && <UserProfile />}
          {!isLoggedIn && history.replace("/auth")}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
