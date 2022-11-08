
const {Router} = require("express")
const server = Router()
const axios = require("axios");



server.get("/", async (req,res)=>{
    try {
      const getPokemones = await axios.get( `https://pokeapi.co/api/v2/pokemon?limit=150`)
    
         res.status(200).json(getPokemones.data)

    } catch (error) {
        res.status(404).send(error.message)
    }
    
 })
 module.exports= server;


