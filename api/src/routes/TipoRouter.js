const { Router } = require("express");
const router = Router();
const { Tipo } = require ("../db.js");

router.get("/", async (req, res) => {
  try {
        const losTipos =await Tipo.findAll();
        res.status(200).send(losTipos);
    }
  catch (error) {
   res.status(400).json({error:error.message})
  }
});
module.exports = router;
