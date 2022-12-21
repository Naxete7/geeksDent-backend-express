'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.STRING
      },
    patientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'patients',
          key: 'id'
        }},
        doctorId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'doctors',
            key:'id'
          }

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
    await queryInterface.dropTable('appointments');
  }
};