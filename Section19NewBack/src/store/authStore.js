import { createSlice, configureStore } from "@reduxjs/toolkit";

let AuthIntialState = {
  isAuth: false,
};

let authSlice = createSlice({
  name: "Auth",
  initialState: AuthIntialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});
export const authAction = authSlice.actions;

export default authSlice.reducer;
