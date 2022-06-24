'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => (
    queryInterface.bulkInsert('Tasks', [
      {
        title: 'fazer a rota /carrinho',
        branch: 'carrinho',
        content: 'seu papel hoje é desenvolver desde a controller ate o acesso ao banco de dados e validacoes dos dados',
        user_id: 2,
        status: 'pending'
      },
      {
        title: 'fazer teste da rota /carrinho',
        branch: 'carrinho-test',
        content: 'fazer todos os teste unitarios',
        user_id: 2,
        status: 'started'
      },
      {
        title: 'fazer o cafe',
        content: 'se esforçar mt pra fazer o cafe',
        user_id: 3,
        status: 'started'
      },
    ])
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
