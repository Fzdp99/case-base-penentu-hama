'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kasus_hamas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hama: {
        type: Sequelize.STRING
      },
      pertumbuhan: {
        type: Sequelize.STRING
      },
      varietas: {
        type: Sequelize.STRING
      },
      musim: {
        type: Sequelize.STRING
      },
      kondisi_daun: {
        type: Sequelize.STRING
      },
      kondisi_buah: {
        type: Sequelize.STRING
      },
      kondisi_batang: {
        type: Sequelize.STRING
      },
      kondisi_anakan: {
        type: Sequelize.STRING
      },
      kondisi_fisik: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kasus_hamas');
  }
};