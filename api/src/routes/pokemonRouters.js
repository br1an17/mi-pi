const { Router } = require("express");
const router = Router();
const {
  FunctionGet,
  FunctionGetId,
  FunctionPost,
  FunctionDelete,
} = require("../controler/controlerRouters");
const { Pokemon} = require("../db");

//________________ RUTA GET Y QUERY __________________//

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const getData = await FunctionGet(name);
    res.status(200).send(getData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//________________ RUTA GET ID_______________________//
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const buscarID = await FunctionGetId(id);
    res.status(200).send(buscarID);
  } catch (error) {
    res.status(500).send(error.masagge);
  }
});

//________________ RUTA POST_______________________//

router.post("/", async (req, res) => {
  try {
    await FunctionPost(req.body);

    res.status(200).send("Pokemon creado con exito");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//___________________RUTA DELETE_________________//

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await FunctionDelete(id);
  } catch (error) {
    res.status(400).send(error);
  }
});
//___________________RUTA PUT_________________//
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
      types,
      createdInDb,
    } = req.body;

   await Pokemon.update(
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
        createdInDb,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send("Pokemon modificado");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
