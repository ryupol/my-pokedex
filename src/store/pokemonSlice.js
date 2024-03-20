import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: null,
  loading: true,
  colors: {
    bug: "#a7b723",
    dark: "#75574c",
    dragon: "#7037ff",
    electric: "#f9cf30",
    fairy: "#e69eac",
    fighting: "#c12239",
    fire: "#f57d31",
    flying: "#a891ec",
    ghost: "#70559b",
    normal: "#aaa67f",
    grass: "#74cb48",
    ground: "#dec16b",
    ice: "#9ad6df",
    poison: "#a43e9e",
    psychic: "#fb5584",
    rock: "#b69e31",
    steel: "#b7b9d0",
    water: "#6493eb",
  },
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setDetails(state, action) {
      state.details = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setDetails, setLoading } = pokemonSlice.actions;
export default pokemonSlice.reducer;
