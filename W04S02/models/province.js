'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Regency, {
          as : 'regencies',
          foreignKey: "province_id"
      })
    }
  }
  Province.init({
    name: DataTypes.STRING,
    alt_name: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Province',
  });
  return Province;
};