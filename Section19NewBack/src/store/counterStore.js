import { createSlice, configureStore } from "@reduxjs/toolkit";
let intialStateValues = {
  counter: 0,
  showcounter: true,
};

let counterSlice = createSlice({
  name: "counter",
  initialState: intialStateValues,
  reducers: {
    increment(state) {
      state.counter++;
    },

    decrement(state) {
      state.counter--;
    },

    increaseCounter(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showcounter = !state.showcounter;
    },
  },
});
export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
