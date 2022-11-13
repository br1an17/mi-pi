const { Router } = require("express");
const router = Router();
const { Types} = require ("../db.js");

router.get("/", async (req, res) => {
  try {
        const type =await Types.findAll();
        res.status(200).send(type);
    }
  catch (error) {
   res.status(400).json({error:error.message})
  }
});
module.exports = router;
