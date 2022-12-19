'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Regency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Province, {
          foreignKey: "province_id",
          as: "province"
      })
    }
  }
  Regency.init({
    province_id: DataTypes.STRING,
    name: DataTypes.STRING,
    alt_name: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Regency',
  });
  return Regency;
};