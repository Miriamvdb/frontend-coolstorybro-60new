import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allSpaces: [], // K: this should be null
  spaceDetails: null, // K: this should be null
};

export const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {},
});

export const {} = spaceSlice.actions;
export default spaceSlice.reducer;
