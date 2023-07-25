import { React, useEffect } from "react";
import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

function QuotesDeatils() {
  let params = useParams();
  let match = useRouteMatch();
  const { quotesID } = params;

  let {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getSingleQuote, true);
  console.log(useHttp(getSingleQuote, true));

  useEffect(() => {
    sendRequest(quotesID);
  }, [sendRequest, quotesID]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  if (error) {
    return (
      <div className="centered">
        <p> {error}</p>
      </div>
    );
  }

  if (!loadedQuotes.text) {
    return <p>No quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote
        text={loadedQuotes.text}
        author={loadedQuotes.author}
      ></HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
}

export default QuotesDeatils;
