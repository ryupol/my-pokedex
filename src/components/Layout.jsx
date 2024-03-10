import { useState } from "react";
import Navbar from "./Navbar";
import PokeLists from "./PokeLists";
import styles from "../styles/modules/layout.module.scss";
export default function Layout() {
  const [search, setSearch] = useState("");
  const [sortNum, setSortNum] = useState(true);
  return (
    <div className={styles.container}>
      <Navbar
        search={search}
        setSearch={setSearch}
        sortNum={sortNum}
        setSortNum={setSortNum}
      />
      <PokeLists search={search} sortNum={sortNum} />
    </div>
  );
}
