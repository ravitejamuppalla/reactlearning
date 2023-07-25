import Layout from "./components/layout/Layout";
import { Switch, Route } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import AddNewQuotes from "./components/pages/AddNewQuotes";
import QuotesDetails from "./components/pages/QuotesDetails";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllQuotes></AllQuotes>
          </Route>
          <Route path="/AllQuotes" exact>
            <AllQuotes></AllQuotes>
          </Route>
          <Route path="/AddNewQuote">
            <AddNewQuotes></AddNewQuotes>
          </Route>
          <Route path="/AllQuotes/:QuoteID">
            <QuotesDetails></QuotesDetails>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
