import { useState } from "react";
import styles from "./navbar.module.scss";
import pokeIcon from "../assets/pokeball.svg";
import searchIcon from "../assets/search.svg";
import sortNumIcon from "../assets/sort-num.svg";
import sortTextIcon from "../assets/sort-text.svg";

export default function Navbar() {
  const [sortText, setSortText] = useState(false);
  return (
    <div className={styles.wrapper}>
      <a className={styles.header} href="/">
        <img src={pokeIcon} alt="Pokeball Icon" />
        <span>Pokédex</span>
      </a>
      <div className={styles.filter}>
        <form className={styles.form}>
          <img src={searchIcon} alt="Search Icon" />
          <input type="text" className={styles.input} placeholder="Search" />
        </form>
        <button className={styles.sortButton} onClick={() => setSortText(!sortText)}>
          <img src={sortText ? sortTextIcon : sortNumIcon} alt="Sort Icon" />
        </button>
      </div>
    </div>
  );
}
