import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import sortSlice from "./sortSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    sortNum: sortSlice,
  },
});
