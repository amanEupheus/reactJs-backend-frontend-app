const Sequelize = require('sequelize')
require('dotenv').config();
  const sequelize = new Sequelize(
    process.env.db_name,
     process.env.db_user,
     process.env.db_password,
     
    {
      dialect:  process.env.db_dialect,
      timezone: 'Asia/Calcutta',
      host:  process.env.db_host,
    
    },
  )
  module.exports = sequelize


