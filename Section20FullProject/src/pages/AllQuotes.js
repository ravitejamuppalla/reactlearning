import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import { React, useEffect } from "react";

function AllQuotes() {
  let {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (status == "completed" && (!loadedQuotes || loadedQuotes.length == 0)) {
    return <NoQuotesFound></NoQuotesFound>;
  }
  return <QuoteList quotes={loadedQuotes}></QuoteList>;
}

export default AllQuotes;
