import { Link } from "react-router-dom";
import { IMAGE_API_URL } from "../../config";
import backIcon from "../../assets/back-arrow.svg";
import leftIcon from "../../assets/chevron-left.svg";
import rightIcon from "../../assets/chevron-right.svg";
import s from "../../styles/modules/pokePages/pokeHeader.module.scss";
import { useSelector } from "react-redux";
export default function pokeHeader({ id}) {
  const details = useSelector((state) => state.pokemon.details);
  const colors = useSelector((state) => state.pokemon.colors);

  return (
    <div className={s.wrapper}>
      <div className={s.nameWrap}>
        <div className={s.name}>
          <Link to="/">
            <img src={backIcon} alt="Back Arrow" />
          </Link>
          <b className={s.pokeName}>
            {details.name.charAt(0).toUpperCase() + details.name.slice(1)}
          </b>
        </div>
        <b className={s.pokeId}>#{id}</b>
      </div>
      <Link
        to={`/pokemon/${id - 1}`}
        className={s.leftArrow}
        style={id <= 1 ? { display: "none" } : { display: "block" }}
      >
        <img src={leftIcon} alt="Left Chevron" />
      </Link>
      <Link
        to={`/pokemon/${Number(id) + 1}`}
        className={s.rightArrow}
        style={id >= 1008 ? { display: "none" } : { display: "block" }}
      >
        <img src={rightIcon} alt="Right Chevron" />
      </Link>
      <div className={s.imageWrap}>
        <img
          className={s.pokemon}
          src={IMAGE_API_URL + id + ".png"}
          alt="Pokemon Image"
        />
        <div>
          {details.types.map((type) => (
            <button
              className={s.type}
              key={type}
              style={{ backgroundColor: colors[type] }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
