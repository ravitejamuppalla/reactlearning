import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";
function AddNewQuotes() {
  const { sendRequest, status } = useHttp(addQuote);
  const hisorty = useHistory();
  useEffect(() => {
    if (status == "completed") {
      hisorty.push("/AllQuotes");
    }
  }, [status]);
  function addingNewQuotes(quotes) {
    console.log(quotes);
    sendRequest(quotes);
  }
  return (
    <QuoteForm
      isLoading={status == "pending"}
      onAddQuote={addingNewQuotes}
    ></QuoteForm>
  );
}

export default AddNewQuotes;
