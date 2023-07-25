import QuoteList from "../quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

function AllQuotes() {
  const {
    sendRequest,
    data: DataFromAPI,
    error: ErrorStatus,
    status,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status == "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>;
      </div>
    );
  }

  if (ErrorStatus) {
    return <p className="centered focused">{ErrorStatus}</p>;
  }
  if (status == "completed" && (!DataFromAPI || DataFromAPI.length === 0)) {
    <NoQuotesFound></NoQuotesFound>;
  }
  console.log(DataFromAPI);
  return <QuoteList quotes={DataFromAPI}></QuoteList>;
}

export default AllQuotes;
