const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    hp:{
      type:DataTypes.INTEGER,
      validate:{ min:1, max:150}
    },
    attack:{
      type:DataTypes.INTEGER,
      validate:{ min:1,max:150}
    },
    defense:{
      type:DataTypes.INTEGER,
      validate:{min:1,max:150}
    },
    speed:{
      type:DataTypes.INTEGER,
      validate:{min:1, max:150}
    },
    height:{
      type:DataTypes.FLOAT
    },
    weight:{
      type:DataTypes.FLOAT
    },
   image:{
   type:DataTypes.STRING,
   defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
   },
   cretedInDb:{
    type:DataTypes.BOOLEAN,
    defaultValue:true,
   }
  },
  {timestamps:false}
  )
  ;
};
