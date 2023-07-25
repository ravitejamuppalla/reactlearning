import { createSlice, configureStore } from "@reduxjs/toolkit";

const intitalValues = { counter: 0, showCounter: true };
const initalAuth = { isauthenticated: false };
const counterSlice = createSlice({
  name: "Counter",
  initialState: intitalValues,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = +state.counter + +action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const CounterActions = counterSlice.actions;

const authenticated = createSlice({
  name: "Auth",
  initialState: initalAuth,
  reducers: {
    setAuthenticated(state) {
      state.isauthenticated = true;
    },

    logout(state) {
      state.isauthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authenticated.reducer },
});

export const isAuthenticated = authenticated.actions;
export default store;
// import { createStore } from "redux";

// const intitalValues = { counter: 0, showCounter: true };
// const counterFucntion = (state = intitalValues, action) => {
//   if (action.type === "Increment") {
//     return { counter: state.counter + 1, showCounter: state.counter };
//   }
//   if (action.type === "Decrement") {
//     return { counter: state.counter - 1, showCounter: state.counter };
//   }
//   if (action.type === "Toggle") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }
//   if (action.type === "Increase") {
//     return {
//       counter: +state.counter + +action.value,
//       showCounter: state.showCounter,
//     };
//   }
//   return intitalValues;
// };

// const store = createStore(counterFucntion);

// export default store;
