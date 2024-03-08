import React from "react";
import styles from "./pokeCard.module.scss";
export default function PokeCard(props) {
  const { name, image, id } = props;
  return (
    <div className={styles.wrapper}>
      <p className={styles.number}>#{id}</p>
      <img src={image} alt="Pokemon Image" />
      <div className={styles.background}>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
}
