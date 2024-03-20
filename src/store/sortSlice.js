import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortNum: true,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortNum(state) {
      state.sortNum = !state.sortNum;
    },
  },
});

export const { setSortNum } = sortSlice.actions;

export default sortSlice.reducer;
