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
     autoIncremen:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
  type:DataTypes.STRING
  },
  },
  {timestamps:false})
  ;
};
