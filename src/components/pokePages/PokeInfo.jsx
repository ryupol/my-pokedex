import React from "react";
import weightIcon from "../../assets/weight.svg";
import heightIcon from "../../assets/height.svg";
import s from "../../styles/modules/pokePages/pokeInfo.module.scss";

export default function PokeInfo({ details, colors }) {
  return (
    <>
      <h5 className={s.headline} style={{ color: colors[details.types[0]] }}>
        About
      </h5>
      <div className={s.wrapper}>
        <div className={s.box}>
          <div className={s.weightInfo}>
            <img src={weightIcon} alt="Weight Icon" />
            <span>{details.weight / 10} kg</span>
          </div>
          <p className={s.caption}>Weight</p>
        </div>
        <div className={s.line}></div>
        <div className={s.box}>
          <div className={s.heightInfo}>
            <img src={heightIcon} alt="Height Icon" />
            <span>{details.height / 10} m</span>
          </div>
          <p className={s.caption}>Height</p>
        </div>
        <div className={s.line}></div>
        <div className={s.box}>
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
    </>
  );
}
