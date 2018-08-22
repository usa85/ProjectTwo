module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    clientName: DataTypes.STRING,
    clientEmail: DataTypes.STRING,
    clientPhone: DataTypes.STRING,
    clientAvailability: DataTypes.STRING,
    clientAbout: DataTypes.TEXT
  });
  return Client;
};
