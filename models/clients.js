module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("clients", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    availability: DataTypes.STRING,
    goals: DataTypes.TEXT
  });
  return Client;
};
