import { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";
import { POKEMON_API_URL, IMAGE_API_URL } from "../config";
import styles from "../styles/modules/pokeLists.module.scss";
export default function PokeLists({ search, sortNum }) {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=1008").then((res) => {
      if (res.status >= 200 && res.status < 300) {
        const { results } = res.data;
        let pokeData = [];
        results.forEach((value, index) => {
          index++;
          let pokeObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: value.name,
          };
          pokeData.push(pokeObject);
        });
        setPokemons(pokeData);
      }
    });
  }, []);

  const filteredPokemons = search
    ? pokemons.filter((value) => {
        if (!isNaN(search)) {
          // Check if search is a valid number
          return String(value.id).includes(search);
        } else {
          // Search by name
          return value.name.toLowerCase().includes(search.toLowerCase());
        }
      })
    : pokemons;

  sortNum
    ? filteredPokemons.sort((a, b) => a.id - b.id)
    : filteredPokemons.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className={styles.wrapper}>
      {filteredPokemons.map((value, index) => (
        <PokeCard
          name={value.name}
          image={value.url}
          id={value.id}
          key={index}
        />
      ))}
      {/* {Array.from({ length: 4 }).map((_, index) => (
        <div className={styles.empty}></div>
      ))} */}
    </div>
  );
}
// number of empty div that have to add : numCol - numPokeCard % numCol
