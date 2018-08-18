module.exports = function(sequelize, DataTypes) {
  var Clients = sequelize.define("Clients", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    availability: DataTypes.STRING,
    goals: DataTypes.Text
  });
  return Clients;
};
