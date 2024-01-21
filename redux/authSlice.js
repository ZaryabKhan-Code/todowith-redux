// redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Check if the token exists in localStorage
const initialToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: initialToken || null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

export const { setToken } = authSlice.actions;

export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
