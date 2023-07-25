import React from "react";
import { Route, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeaders from "./components/MainHeaders";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeaders></MainHeaders>
      {/* <Route path="/" exact>
        <Redirect to="/welcome"></Redirect>
      </Route> */}
      <Route path="/welcome" exact>
        <Welcome></Welcome>
      </Route>
      <Route path="/products" exact>
        <Products></Products>
      </Route>
      <Route path="/products/:productID">
        <ProductDetails></ProductDetails>
      </Route>
    </div>
  );
}

export default App;
