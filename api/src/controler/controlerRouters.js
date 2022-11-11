const { Op } = require("sequelize");
const { Pokemon, Tipo } = require("../db");

const FunctionGet = async (name) => {
  let getData = await Pokemon.findAll();
  if (name) {
    getData = await Pokemon.findAll({
      where: {
        name: { [Op.iLike]: `${name}` },
      },
    });
  }
  return getData;
};

const FunctionGetId = async (id) => {
  const buscarID = await Pokemon.findOne({
    where: { id },
  });

  if (!buscarID) {
    return res.status(404).send("No existe el pokemon con el id ingresado");
  }
  return buscarID;
};
const FunctionPost = async (body) => {
  const { types } = body;
  const createPokemon = await Pokemon.create(body);
  if (types) {
    const pokemonFinal = types.map(async (type) => {
      const typeFount = await Tipo.findAll({
        where: {
          name: type,
        },
      });
      createPokemon.addTipo(typeFount);
    });
    return pokemonFinal;
  }
};

const FunctionDelete = async (id) => {
  const pokemonDelete = await Pokemon.findByPk(id);
  if (!pokemonDelete) {
    res.status(400).send("No existe el pokemon a eliminar");
  } else {
    pokemonDelete.destroy();
    res.status(200).send("Pokemon eliminado correctamente");
  }
};

module.exports = {
  FunctionGet,
  FunctionGetId,
  FunctionPost,
  FunctionDelete,
};
