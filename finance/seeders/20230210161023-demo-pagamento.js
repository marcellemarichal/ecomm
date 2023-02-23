'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Pagamentos', [{
      preco: 67958.86,
      nomeCartao: 'FABIOLA RODRIGUES DA ROSA',
      numeroCartao: '5193018491048516',
      vencimentoCartao: '2029-03',
      cvv: '780',
      status: 'CRIADO',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      preco: 589.99,
      nomeCartao: 'FIONA SANTANA OLIVEIRA',
      numeroCartao: '4925291789023701',
      vencimentoCartao: '2024-08',
      cvv: '838',
      status: 'CRIADO',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      preco: 1835.52,
      nomeCartao: 'FRIDA MACHADO EMERIM',
      numeroCartao: '5162207883670774',
      vencimentoCartao: '2030-07',
      cvv: '627',
      status: 'CRIADO',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pagamentos', null, {});

  }
};
