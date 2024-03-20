import axios from "axios";
import PokeHeader from "./PokeHeader";
import PokeBody from "./PokeBody";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { POKEMON_API_URL, DESCRIPT_API_URL } from "../../config";
import s from "../../styles/modules/pokePages/pokeDetails.module.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setDetails, setLoading } from "../../store/pokemonSlice";

export default function PokeDetails() {
  const details = useSelector((state) => state.pokemon.details);
  const loading = useSelector((state) => state.pokemon.loading);
  const colors = useSelector((state) => state.pokemon.colors);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    axios
      .all([
        axios.get(POKEMON_API_URL + "/" + id),
        axios.get(DESCRIPT_API_URL + id),
      ])
      .then((res) => {
        const pokeData = res[0].data;
        const specData = res[1].data;
        const newDetails = {
          name: pokeData.name,
          types: pokeData.types.map((entry) => entry.type.name),
          weight: pokeData.weight,
          height: pokeData.height,
          moves: [
            ...new Set(pokeData.abilities.map((abi) => abi.ability.name)),
          ],
          statsName: ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"],
          stats: pokeData.stats.map((stat) => stat.base_stat),
          description:
            specData.flavor_text_entries.find(
              (entry) => entry.version.name === "firered"
            )?.flavor_text ||
            specData.flavor_text_entries.find(
              (entry) => entry.language.name === "en"
            )?.flavor_text ||
            "There is no description yet",
        };
        dispatch(setDetails(newDetails));
        dispatch(setLoading(false));
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
        <PokeHeader id={id} />
        <PokeBody />
      </div>
    </div>
  );
}
