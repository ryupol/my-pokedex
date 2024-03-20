import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortNum: true,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortNum(state) {
      state.search = !state.search;
    },
  },
});

export const { setSortNum } = sortSlice.actions;

export default sortSlice.reducer;
