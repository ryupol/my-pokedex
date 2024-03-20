import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import sortSlice from "./sortSlice";
import pokemonSlice from "./pokemonSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    sortNum: sortSlice,
    pokemon: pokemonSlice,
  },
});
