import s from "../../styles/modules/pokePages/pokeBody.module.scss";
import PokeInfo from "./PokeInfo";
import PokeStats from "./PokeStats";
import { useSelector } from "react-redux";
export default function PokeBody() {
  const details = useSelector((state) => state.pokemon.details);
  const colors = useSelector((state) => state.pokemon.colors);
  return (
    <div className={s.wrapper}>
      <PokeInfo details={details} colors={colors} />
      <p className={s.description}>
        {details.description.replace("POKéMON", "Pokémon")}
      </p>
      <PokeStats details={details} colors={colors} />
    </div>
  );
}
