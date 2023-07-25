import { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";
function Welcome() {
  console.log("Entering to Welcome page");
  return (
    <section>
      <h1>This is welcome page</h1>
      <Route path="/welcome/active">
        <ProductDetails></ProductDetails>
      </Route>
    </section>
  );
}

export default Welcome;
