import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null, // profile.mySpace is also here!!!
  mySpace: null, // F4
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.mySpace = action.payload.mySpace; // F4
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.mySpace = null; // F4
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.mySpace = action.payload.mySpace; // F4
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid } = userSlice.actions;

export default userSlice.reducer;
