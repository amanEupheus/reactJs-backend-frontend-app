const sequelize = require('../config/db.config');




const initModels = require('./init-models');
var model = initModels(sequelize);
const users = {};

users.usertable = model.usertable

module.exports = users;