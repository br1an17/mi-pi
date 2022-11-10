const { Router } = require('express');
const pokemonRouter = require ("./pokemonRouters.js")
// const TipoRouter = require ("./controllers/")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/Pokemons",pokemonRouter) 
// router.use("/Tipo",TipoRouter)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
