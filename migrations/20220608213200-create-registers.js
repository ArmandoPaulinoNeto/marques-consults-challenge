'use strict';

module.exports = {

  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('registers', { 
      id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
      },
      url :{
        type: Sequelize.TEXT
      },
      create_at :{
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('registers');
  }
};
