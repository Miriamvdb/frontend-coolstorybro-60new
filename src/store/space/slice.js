import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allSpaces: null,
  spaceDetails: null,
};

export const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    setAllSpaces: (state, action) => {
      state.allSpaces = action.payload;
    },
    setSpaceDetails: (state, action) => {
      state.spaceDetails = action.payload;
    },
  },
});

export const { setAllSpaces, setSpaceDetails } = spaceSlice.actions;
export default spaceSlice.reducer;
