
const infoPokemon = async () =>{
    const pokemones = await axios.get( `https://pokeapi.co/api/v2/pokemon?limit=150`)
    const infoDEPokemones = pokemones.data.results
console.log(pokemones.data.results);
}