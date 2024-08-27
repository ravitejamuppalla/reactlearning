// const redux = require("redux");
import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterStore from "./counterStore";
import authStore from "./authStore";

let reduxStore = configureStore({
  reducer: { counter: counterStore, authicate: authStore },
});

export default reduxStore;

// let storeSubscription = () => {
//   let storeObject = store.getState();
//   console.log(storeObject);
// };

// store.subscribe(storeSubscription);

// store.dispatch({ type: "Increment" });

// let reducerFunciton = (state = intialState, action) => {
//   console.log(state);
//   if (action.type === "Increment") {
//     return {
//       counter: state.counter + 1,
//       showcounter: state.showcounter,
//     };
//   }
//   if (action.type === "IncrementByamount") {
//     return {
//       counter: state.counter + action.amount,
//       showcounter: state.showcounter,
//     };
//   }
//   if (action.type === "Decrement") {
//     return {
//       counter: state.counter - 1,
//       showcounter: state.showcounter,
//     };
//   }
//   if (action.type === "toggleCounter") {
//     return {
//       counter: state.counter,
//       showcounter: !state.showcounter,
//     };
//   }

//   return state;
// };

// let reduxStore = createStore(reducerFunciton);
