'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      paternity_name: {
        type: Sequelize.STRING
      },
      date_birth: {
        type: Sequelize.DATE
      },
      passport_number:{
        type: Sequelize.INTEGER
      },
      organization: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.DATE
      },
      tax_number: {
        type: Sequelize.INTEGER
      },
      borrower_id: {
        type: Sequelize.INTEGER
      },
      is_scored: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')

      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Profiles');
  }
};