'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert(
     'Users',
     [
       {
         firstName: "Gary",
         lastName: "McGill",
         createdAt: Sequelize.literal('NOW()'),
         updatedAt: Sequelize.literal('NOW()'),
         email: 'dasdadad@ada.com',
         age: 20
       }
     ]
   )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Person', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
