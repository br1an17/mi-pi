const axios = require("axios");
const { Pokemon } = require("../db");

const pokemonDB = async () => {
  try {
    // Desestructuramos la data
    const {data} = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=40")
    // Desestructuramos los results
    const { results } = data;

    // Iteramos los results y resolvemos las url de cada pokemon
    const pokemons = await results.map(async (pokemon) => {
      const { data } = await axios.get(pokemon.url);
      return {
        id: data.id,
        name: data.name,
        hp: data.stats[0]["base_stat"],
        attack: data.stats[1]["base_stat"],
        defense: data.stats[2]["base_stat"],
        speed: data.stats[5]["base_stat"],
        height: data.height,
        weight: data.weight,
        image: data.sprites.other.home["front_default"],
        types: data.types.map((t) => t.type.name),
       };
    });

    // Resolvemos las promesas de los pokemon
    Promise.all(pokemons).then(async (pokemon) => {
      // Revisamos si la base de datos Pokemon tiene data
      const pokemonsDb = await Pokemon.findAll();
      // Si NO tiene data creamos la BD
      if (!pokemonsDb.length) {
        // Creamos la base de datos por cada pokemon que resulve la promesa
        const newDB = await Pokemon.bulkCreate(pokemon);
        //Retornamos la base de datos
        return newDB;
      }
      return results;
    });
 
  } catch (error) {
    console.log(error);
  }
};

module.exports = pokemonDB;
