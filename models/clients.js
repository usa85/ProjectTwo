module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    availability: DataTypes.STRING,
    goals: DataTypes.STRING
  });
  return Client;
};
