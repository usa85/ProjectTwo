module.exports = function(sequelize, DataTypes) {
    var Trainer = sequelize.define("Trainer", {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      certification: DataTypes.BOOLEAN,
      availability: DataTypes.STRING

    });
    return Trainer;
  };