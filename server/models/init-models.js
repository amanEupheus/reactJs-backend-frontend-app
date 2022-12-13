var DataTypes = require("sequelize").DataTypes;
var _usertable = require("./usertable");

function initModels(sequelize) {
  var usertable = _usertable(sequelize, DataTypes);


  return {
    usertable,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
