const axios = require("axios");
const { Pokemon } = require("../db");

const pokemonDB = async () => {
  try {
    // Desestructuramos la data
    const {data} = await axios
    // get.(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=40`)
      .get("https://pokeapi.co/api/v2/pokemon?limit=40")
    // Desestructuramos los results
    const { results } = data;
  const pokemonData =[]
    // Iteramos los results y resolvemos las url de cada pokemon
    const pokemons = await Promise.all(results.map(async (pokemon) => {
      const { data } = await axios.get(pokemon.url);
      pokemonData.push ({
        id: data.id,
        name: data.name,
        hp: data.stats[0]["base_stat"],
        attack: data.stats[1]["base_stat"],
        defense: data.stats[2]["base_stat"],
        speed: data.stats[5]["base_stat"],
        height: data.height,
        weight: data.weight,
        image: data.sprites.other.home["front_default"],
        types: toString(data.types.map((t) => t.type.name)),
       })
    }));
  

    // Resolvemos las promesas de los pokemon
  return pokemonData.sort((a,b)=>a.id-b.id);
      // // Revisamos si la base de datos Pokemon tiene data
      // const pokemonsDb = await Pokemon.findAll();
      // // Si NO tiene data creamos la BD
      // if (!pokemonsDb.length) {
      //   // Creamos la base de datos por cada pokemon que resulve la promesa
      //   const newDB = await Pokemon.bulkCreate(pokemon);
      //   //Retornamos la base de datos
      //   return newDB;
      // }
      // aca va otro return
   
 
  } catch (error) {
    console.log("Se rompio la api de nuevo");
  }
};

// const infoDB = async () =>{
//  const pokemonDB = await Pokemon.findAll({
//   include:{
//     model: Type,
//     atribute:["name"],
//     through:{
//       attributes:[],
//     },
//   },
//  });
// const pokemonMap = pokemonDB?.map((pokemon)=>{
//   const { types } = pokemon;
//   const pokemonData ={ 
//   ...pokemon.dataValues,
//   types:types.map((e)=> t.name)}
//   return pokemonData
// })
// return pokemonMap;
// }

// const getInfoPokemon = async () =>{
//   try {
//     const infoApi = await pokemonDB();
//     const infodb = await infoDB();
//     const infoTotal = infodb.concat(infoApi);
//     return infoTotal
//   } catch (error) {
//     console.log(error)
//   }


//  }

const toString = (array) => {
  let st = "";
  array.map((e) => {
    st.length === 0 ? (st += e) : (st += ", " + e);
  });
  return st;
}; //funcion que agrega comas entre elementos
module.exports = {
  pokemonDB,


}

