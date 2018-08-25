module.exports = function(sequelize, DataTypes) {
  var Trainer = sequelize.define("Trainer", {
    trainerName: DataTypes.STRING,
    trainerEmail: DataTypes.STRING,
    trainerPhone: DataTypes.TEXT,
    trainerAvailability: DataTypes.STRING,
    trainerAbout: DataTypes.TEXT
  });
  return Trainer;
};
