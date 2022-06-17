function Pokemon({pokemon}){


    return <li style={{color:"yellow", fontSize: 12+'px'}}>{pokemon.name} <strong><a>{pokemon.url}</a></strong></li>
}
export default Pokemon;