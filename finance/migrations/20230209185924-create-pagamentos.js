'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pagamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      preco: {
        type: Sequelize.DECIMAL
      },
      nomeCartao: {
        type: Sequelize.STRING
      },
      numeroCartao: {
        type: Sequelize.STRING
      },
      vencimentoCartao: {
        type: Sequelize.STRING
      },
      cvv: {
        type: Sequelize.STRING
      },
      status: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pagamentos');
  }
};