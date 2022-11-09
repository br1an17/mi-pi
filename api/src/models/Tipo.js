const {DataTypes} = require("sequelize")

module.exports = (sequelize) =>{
    sequelize.define(
        "Tipo",
        {
            id:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
                
            },
            name:{
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
            
            }
        },
        {timestamps:false}

    )
}