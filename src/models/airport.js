'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here  : like Airports belongs to city
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE'
        //onDelete : if we delete a city from the database, it deletes the corresponding city's airports form the airports database otherwise people might see the airports for which cities are not defined 
      })
    }
  }
  Airport.init({
    name: {
      type : DataTypes.STRING,
      allowNull:false
    },
    address: DataTypes.STRING,
    cityId: {
      type:DataTypes.INTEGER,
      allowNull:false,
  }
}, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};