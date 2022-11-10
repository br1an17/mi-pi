const { Router } = require("express");
const router = Router();
const { Op } = require("sequelize");
const { Pokemon, Tipo } = require("../db");

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

router.post("/", async (req, res) => {

  
    const {
      id,
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
try {
      const createPokemon = await Pokemon.create({
        id,
        name,
        hp,
        attack,
        defense,
        speed,
        height, 
        weight,
        image,
        createdInDb,
      })
      if(types){

        types.map(async type=>{
          const typeFount = await Tipo.findAll({
            where:{
              name:type
            }
          })
          createPokemon.addTipo(typeFount)
        })
      }
     
    

    res.status(200).send("Pokemon creado con exito");
  
  } catch (error) {
    res.status(404).send(error.message);
  
  }
});

router.delete("/:id", async (req,res)=>{
  const {id} = req.params;
  try {
      const pokemonDelete = await Pokemon.findByPk(id);
      console.log(pokemonDelete)
  if(!pokemonDelete){
    res.status(400).send("No existe el pokemon a eliminar")
  }else{
    pokemonDelete.destroy();
    return res.status(200).send("Pokemon eliminado correctamente")
  }
  } catch (error) {
    res.status(400).send(error)
  }
  });

   router.get("/types",async(req,res)=>{


   })



  router.put("/:id", async (req,res)=>{
    try{

      const {id} =req.params

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
        createdInDb,} =req.body;

        const pokemonUpdate = await Pokemon.update({
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
        },{
          where:{
            id
          }

        })
res.status(200).send("Pokemon modificado")
      
      
      }catch(error){
        res.status(404).send(error.message)
    }
  })


module.exports = router;
