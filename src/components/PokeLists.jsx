import { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";
import { POKEMON_API_URL, IMAGE_API_URL } from "../config";
import styles from "./pokeLists.module.scss";
export default function PokeLists() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=200").then((res) => {
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
  return (
    <div className={styles.wrapper}>
      {pokemons.map((value, index) => (
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
