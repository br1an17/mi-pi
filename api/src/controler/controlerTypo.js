const axios = require("axios");
const {  Types } = require("../db");

const tiposDB = async () => {
  try {
    // Desestructuramos la data
    const { data } = await axios.get("https://pokeapi.co/api/v2/type");
    // Desestructuramos los results
    const { results } = data;

    // Iteramos los results y resolvemos las url de cada pokemon
    const types = await results.map(async (type) => {
    
      return {
        name: type.name,
      };
    });
    Promise.all(types).then(async res=>{
       const newDB = await Types.bulkCreate(res)
    return newDB  
    })
   
  } catch (error) {
    console.log(error);
  }
};

module.exports = tiposDB;
