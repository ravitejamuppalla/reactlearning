import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { React, useEffect } from "react";

function NewQuotes() {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);
  function extractingQuoteForm(formData) {
    sendRequest(formData);
  }

  return <QuoteForm onAddQuote={extractingQuoteForm}></QuoteForm>;
}

export default NewQuotes;
