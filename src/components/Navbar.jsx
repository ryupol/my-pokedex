import { useRef } from "react";
import pokeIcon from "../assets/pokeball.svg";
import searchIcon from "../assets/search.svg";
import sortNumIcon from "../assets/sort-num.svg";
import sortTextIcon from "../assets/sort-text.svg";
import closeIcon from "../assets/close.svg";
import styles from "../styles/modules/navbar.module.scss";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setSortNum } from "../store/sortSlice";
import { setSearch } from "../store/searchSlice";

export default function Navbar() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const {search} = useSelector((state) => state.search);
  const {sortNum} = useSelector((state) => state.sortNum);

  return (
    <div className={styles.wrapper}>
      <a className={styles.header} href="/">
        <img src={pokeIcon} alt="Pokeball Icon" />
        <span>Pokédex</span>
      </a>
      <div className={styles.filter}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <img
            src={search.length === 0 ? searchIcon : closeIcon}
            alt="Search or Clear Icon"
            onClick={() => {
              dispatch(setSearch(""));
            }}
            style={
              search.length === 0
                ? { cursor: "default" }
                : { cursor: "pointer" }
            }
          />
          <input
            type="text"
            className={styles.input}
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            placeholder="Search"
          />
        </form>
        <button
          className={styles.sortButton}
          onClick={() => dispatch(setSortNum(!sortNum))}
        >
          <img src={sortNum ? sortNumIcon : sortTextIcon} alt="Sort Icon" />
          <span className={styles.tooltip}>
            Sort by: <b>{sortNum ? "Name" : "Number"}</b>
          </span>
        </button>
      </div>
    </div>
  );
}
