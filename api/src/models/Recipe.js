const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:UUIDV4
    },    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    },
    summary:{
      type:DataTypes.TEXT,
      
    },
    healthScore:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    stepByStep:{
      type:DataTypes.TEXT,
      allowNull:false
    }

  },{timestamps:false})
};
