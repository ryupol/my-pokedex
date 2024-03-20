import { useState } from "react";
import Navbar from "./Navbar";
import PokeLists from "./PokeLists";
import styles from "../styles/modules/layout.module.scss";
export default function Layout() {
  const [search, setSearch] = useState("");
  const [sortNum, setSortNum] = useState(true);
  return (
    <div className={styles.container}>
      <Navbar />
      <PokeLists search={search} sortNum={sortNum} />
    </div>
  );
}
