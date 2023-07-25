import { Route, Redirect, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuotesDeatils from "./pages/QuotesDetails";
import Layout from "./components/layout/Layout";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"> </Redirect>
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path="/quotes/:quotesID">
          <QuotesDeatils></QuotesDeatils>
        </Route>
        <Route path="/newQuotes">
          <NewQuotes></NewQuotes>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
