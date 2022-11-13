const { Op } = require("sequelize");
const { Pokemon, Types } = require("../db");
const { pokemonDB } = require("./controlerPokemon");
const pokemons = require("./dataBase"); // mi base de datos


const FunctionGet = async (name) => {
  //const pokemonTotal = await pokemons; // base de datos propia
  let pokemonTotal = await pokemonDB();
  const pokemonDataB = await Pokemon.findAll({
    include: {
      model: Types,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const allPokemon = pokemonTotal.concat(pokemonDataB);
  if (name) {
    const pokemonFinal = pokemonTotal.filter(
      (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );
    const pokemonDataB = await Pokemon.findOne({
      where: {
        name,
      },
    });
    const allPokemon = pokemonFinal.concat(pokemonDataB);

    if (!allPokemon[0]) {
      throw new Error("Pokemon no encontrado");
    }
    return allPokemon;
  }
  return allPokemon;
};

const FunctionGetId = async (id) => {
  const getId = await pokemonDB();
   //const getId = await pokemons// base de datos propia 

  const pokemonId = getId.filter((pokemon) => pokemon.id === parseInt(id));
  if (!pokemonId.length) {
    throw new Error(`No se encontro el pokemon con el ${id}`);
  }
  return pokemonId;
};

const FunctionPost = async (body) => {
  const { types } = body;

   const pokemonId = await pokemonDB();
  //const pokemonId = await pokemons; // esta es mi base dde datos
  const idPokemon = await Pokemon.findAll();
  const allID = pokemonId.concat(idPokemon);

  body.id = allID.length + 1;
  const createPokemon = await Pokemon.create(body);

  if (types) {
    const pokemonFinal = types.map(async (type) => {
      const typeFount = await Types.findAll({
        where: {
          name: type,
        },
      });
      createPokemon.addTypes(typeFount);
    });
    return pokemonFinal;
  }
};

const FunctionDelete = async (id) => {
  const pokemonDelete = await Pokemon.findByPk(id);

  if (pokemonDelete) {
    pokemonDelete.destroy();
  } else {
    throw new Error("No existe el  pokemon a eliminar");
  }
};

const FunctionPut = async (id, body) => {
  const { name, hp, attack, defense, speed, height, weight, image, types } =
    body;
  if (id) {
    const pokemonModificado = await Pokemon.update(
      {
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image,
        types,
      },
      {
        where: {
          id,
        },
      }
    );
    return pokemonModificado;
  } else {
    throw new Error("Pokemon no modificado por falta de datos");
  }
};
module.exports = {
  FunctionGet,
  FunctionGetId,
  FunctionPost,
  FunctionDelete,
  FunctionPut,
};
