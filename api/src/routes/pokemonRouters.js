const { Router } = require("express");
const router = Router();
const {Op} = require("sequelize")
const { Pokemon } = require("../db");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    let getData = await Pokemon.findAll();
    if (name) {
      getData = await Pokemon.findAll({
        where: {
          name: { [Op.iLike]: `${name}` },
        },
      });
    }
    res.status(200).json(getData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const buscarID = await Pokemon.findOne({
      where: { id },
    });

    if (!buscarID) {
      return res.status(404).send("No existe el pokemon con el id ingresado");
    }

    res.status(200).send(buscarID);
  } catch (error) {
    res.status(500).send(error.masagge);
  }
});
module.exports = router;
