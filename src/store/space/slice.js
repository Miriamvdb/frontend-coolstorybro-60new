import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allSpaces: [], // K: this should be null
  spaceDetails: null, // K: this should be null
};

export const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    setAllSpaces: (state, action) => {
      console.log("From setAllSpaces reducer!", action);
      state.allSpaces = action.payload;
    },
  },
});

export const { setAllSpaces } = spaceSlice.actions;
export default spaceSlice.reducer;
