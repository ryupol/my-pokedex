import React from "react";
import styles from "./pokeLists.module.scss";
import PokeCard from "./PokeCard";
export default function PokeLists() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}></div>
      {Array.from({ length: 20 }).map((_, index) => (
        <PokeCard key={index} />
      ))}
    </div>
  );
}
