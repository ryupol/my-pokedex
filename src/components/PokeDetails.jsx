import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { POKEMON_API_URL, IMAGE_API_URL } from "../config";
import s from "../styles/modules/pokeDetails.module.scss";
import backIcon from "../assets/back-arrow.svg";
import leftIcon from "../assets/chevron-left.svg";
import rightIcon from "../assets/chevron-right.svg";
import weightIcon from "../assets/weight.svg";
import heightIcon from "../assets/height.svg";

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
        axios.get("https://pokeapi.co/api/v2/pokemon-species/" + id),
      ])
      .then((res) => {
        const pokeData = res[0].data;
        const specData = res[1].data;
        setDetails({
          name: pokeData.name,
          types: pokeData.types.map((entry) => entry.type.name),
          weight: pokeData.weight,
          height: pokeData.height,
          moves: pokeData.abilities.map((abi) => abi.ability.name),
          statsName: ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"],
          stats: pokeData.stats.map((stat) => stat.base_stat),
          description: specData.flavor_text_entries.find(
            (entry) => entry.version.name === "firered"
          ).flavor_text,
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
        <div className={s.leftWrapper}>
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
          <Link to={`/pokemon/${Number(id) + 1}`} className={s.rightArrow}>
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
        <div className={s.rightWrapper}>
          <h5
            className={s.headline}
            style={{ color: colors[details.types[0]] }}
          >
            About
          </h5>
          <div className={s.info}>
            <div className={s.weightBox}>
              <div className={s.weightInfo}>
                <img src={weightIcon} alt="Weight Icon" />
                <span>{details.weight / 10} kg</span>
              </div>
              <p className={s.caption}>Weight</p>
            </div>
            <div className={s.line}></div>
            <div className={s.heightBox}>
              <div className={s.heightInfo}>
                <img src={heightIcon} alt="Height Icon" />
                <span>{details.height / 10} m</span>
              </div>
              <p className={s.caption}>Height</p>
            </div>
            <div className={s.line}></div>
            <div className={s.movesBox}>
              <div className={s.movesInfo}>
                {details.moves
                  .slice()
                  .reverse()
                  .map((m) => (
                    <p key={m}>{m.charAt(0).toUpperCase() + m.slice(1)}</p>
                  ))}
              </div>
              <p className={s.caption}>Moves</p>
            </div>
          </div>
          <p className={s.description}>
            {details.description.replace("POKéMON", "Pokémon")}
          </p>
          <h5
            className={s.headline}
            style={{ color: colors[details.types[0]] }}
          >
            Base Stats
          </h5>
          <div className={s.statsBox}>
            {details.statsName.map((name, index) => (
              <div className={s.statsWrap} key={name}>
                <b
                  className={s.statsName}
                  style={{ color: colors[details.types[0]] }}
                >
                  {name}
                </b>
                <div className={s.statsInfo}>
                  <div className={s.statsNum}>{details.stats[index]}</div>
                  <div
                    className={s.statsBar}
                    style={{
                      backgroundColor: `${colors[details.types[0]] + "20"}`,
                    }}
                  >
                    <div
                      className={s.progressBar}
                      style={{
                        width: `${
                          details.stats[index] / 2 > 100
                            ? 100
                            : details.stats[index] / 2
                        }%`,
                        backgroundColor: colors[details.types[0]],
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
            {/* {details.stats.map((stat, index) => (
              
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
