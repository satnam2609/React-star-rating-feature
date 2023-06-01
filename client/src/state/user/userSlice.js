import { createSlice } from "@reduxjs/toolkit";

const user =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : null;
const initialState = {
  user: user ? user : {},
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    userReducerFunc: (state, action) => {
      if (user) {
        state.user = null;
      } else {
        state.user = action.payload;
      }
    },
  },
});

export default userSlice.reducer;
export const { userReducerFunc } = userSlice.actions;
