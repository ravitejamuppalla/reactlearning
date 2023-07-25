import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const queryLocation =
    new URLSearchParams(useLocation().search).get("sort") === "asc";
  sortQuotes(props.quotes, queryLocation);
  function onClickingSortingHandler() {
    history.push(`/AllQuotes/?sort=${queryLocation ? "des" : "asc"}`);
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={onClickingSortingHandler}>
          Sort {queryLocation ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
