import axios from "axios";
import PokeHeader from "./PokeHeader";
import PokeBody from "./PokeBody";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { POKEMON_API_URL, DESCRIPT_API_URL } from "../../config";
import s from "../../styles/modules/pokePages/pokeDetails.module.scss";

export default function PokeDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const colors = {
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
  };
  useEffect(() => {
    axios
      .all([
        axios.get(POKEMON_API_URL + "/" + id),
        axios.get(DESCRIPT_API_URL + id),
      ])
      .then((res) => {
        const pokeData = res[0].data;
        const specData = res[1].data;
        setDetails({
          name: pokeData.name,
          types: pokeData.types.map((entry) => entry.type.name),
          weight: pokeData.weight,
          height: pokeData.height,
          moves: [...new Set(pokeData.abilities.map((abi) => abi.ability.name))],
          statsName: ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"],
          stats: pokeData.stats.map((stat) => stat.base_stat),
          description:
            specData.flavor_text_entries.find(
              (entry) => entry.version.name === "firered"
            )?.flavor_text ||
            specData.flavor_text_entries.find(
              (entry) => entry.language.name === "en"
            )?.flavor_text || "There is no description yet",
        });
        setLoading(false);
      });
  }, [id]);

  if (loading || !details) {
    return (
      <div className={s.loading}>
        <p>Fetching Pokémon...</p>
      </div>
    );
  }
  return (
    <div
      className={s.container}
      style={{ backgroundColor: `${colors[details.types[0]] + "50"}` }}
    >
      <div
        className={s.wrapper}
        style={{ backgroundColor: colors[details.types[0]] }}
      >
        <PokeHeader id={id} details={details} colors={colors} />
        <PokeBody details={details} colors={colors} />
      </div>
    </div>
  );
}
