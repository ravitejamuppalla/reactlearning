import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showcounter: true };
const initialAuthState = { isAuthentication: false };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showcounter = !state.showcounter;
    },
  },
});

const authenticationSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthentication = true;
    },
    logout(state) {
      state.isAuthentication = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authenticationSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;

export default store;
