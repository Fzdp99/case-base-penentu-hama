'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kasus_hama extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kasus_hama.init({
    hama: DataTypes.STRING,
    pertumbuhan: DataTypes.STRING,
    varietas: DataTypes.STRING,
    musim: DataTypes.STRING,
    kondisi_daun: DataTypes.STRING,
    kondisi_buah: DataTypes.STRING,
    kondisi_batang: DataTypes.STRING,
    kondisi_anakan: DataTypes.STRING,
    kondisi_fisik: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kasus_hama',
  });
  return kasus_hama;
};