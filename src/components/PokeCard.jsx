import React from "react";
import styles from "../styles/modules/pokeCard.module.scss";
import { Link } from "react-router-dom";
export default function PokeCard(props) {
  const { name, image, id } = props;
  return (
    <Link className={styles.wrapper} to={"/pokemon/" + id}>
      <p className={styles.number}>#{id}</p>
      <img src={image} alt="Pokemon Image" />
      <div className={styles.background}>
        <p className={styles.name}>{name}</p>
      </div>
    </Link>
  );
}
