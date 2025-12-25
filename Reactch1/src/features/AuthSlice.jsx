import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("allUser")) || null,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      // state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
