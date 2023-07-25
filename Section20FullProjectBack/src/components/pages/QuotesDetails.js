import { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import NoQuotesFound from "../quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
const DUMMY_DATA = [
  {
    id: "q1",
    author: "Ravi",
    text: "The New Quotes1",
  },
  {
    id: "q2",
    author: "Teja",
    text: "The New Quotes2",
  },
];

function QuotesDetails(props) {
  const params = useParams();

  const {
    sendRequest,
    data: DataFromAPI,
    error: ErrorStatus,
    status,
  } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(params.QuoteID, true);
  }, [sendRequest]);

  if (status == "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>;
      </div>
    );
  }

  //   const quotedData = DUMMY_DATA.find((values) => values.id === params.QuoteID);

  //   console.log(quotedData);

  if (!DataFromAPI) {
    return <NoQuotesFound></NoQuotesFound>;
  }

  if (ErrorStatus) {
    return <p className="centered focused">{ErrorStatus}</p>;
  }
  if (status == "completed" && (!DataFromAPI || DataFromAPI.length === 0)) {
    <NoQuotesFound></NoQuotesFound>;
  }
  return (
    <Fragment>
      <HighlightedQuote
        text={DataFromAPI.text}
        author={DataFromAPI.author}
      ></HighlightedQuote>

      <Route path={`/AllQuotes/${params.QuoteID}`} exact>
        <div className="centered">
          <Link
            to={`/AllQuotes/${params.QuoteID}/comments`}
            className="btn--flat"
          >
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/AllQuotes/${params.QuoteID}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
}

export default QuotesDetails;
