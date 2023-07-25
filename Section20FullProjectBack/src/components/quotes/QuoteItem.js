import classes from "./QuoteItem.module.css";
import { Route, useParams, Link } from "react-router-dom";
import QuotesDetails from "../pages/QuotesDetails";

const QuoteItem = (props) => {
  const params = useParams();

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={`/AllQuotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
