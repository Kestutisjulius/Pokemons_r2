import {useEffect, useState} from "react";
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
    console.log(pokemons);
  return   pokemons.map((pokemon , k)=><div key={k}><h3>{pokemon.name}</h3><a> {pokemon.url}</a></div>)
}
export default Data;