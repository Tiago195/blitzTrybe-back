'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => (
    queryInterface.bulkInsert('Users',
      [
        {
          name: 'tiago',
          email: '@@',
          password: '123321',
          github: 'Tiago195',
          isAdmin: 1
        },
        {
          name: 'andre',
          email: '@@',
          password: '321123',
          isAdmin: 0
        },
        {
          name: 'alberta',
          email: '@@',
          password: '1233332',
          github: 'albertinha123',
          isAdmin: 0
        }
      ]
    )
  ),
  
  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
