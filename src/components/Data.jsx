import {useEffect, useState} from "react";
import Pokemon from "./Pokemon";
function Data(
){
const [pokemons, setPokemons] = useState([]);
    useEffect(()=> {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(data => {
                setPokemons(data.results);
            })
    }, []    )

  return   pokemons.map((pokemon , k)=> <Pokemon key={k} pokemon={pokemon}/>)
}
export default Data;