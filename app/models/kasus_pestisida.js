'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kasus_pestisida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kasus_pestisida.init({
    hama: DataTypes.STRING,
    harga: DataTypes.STRING,
    pestisida: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kasus_pestisida',
  });
  return kasus_pestisida;
};