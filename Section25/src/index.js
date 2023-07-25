import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./context/store-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <ProductContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContextProvider>,
  document.getElementById("root")
);
