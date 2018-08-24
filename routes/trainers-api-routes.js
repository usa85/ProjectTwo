var db = require("../models");

module.exports = function(app) {
  app.get("/api/clients/:clientAvailability", function(req, res) {
    db.Client.findAll({
      where: {
        clientAvailability: req.params.clientAvailability
      }
    }).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  // POST route for saving a new trainer. We can create a todo using the data on req.body
  app.post("/api/trainers", function(req, res) {
    console.log(req.body);
    db.Trainer.create({
      trainerName: req.body.trainerName,
      trainerEmail: req.body.trainerEmail,
      trainerPhone: req.body.trainerPhone,
      trainerAvailability: req.body.trainerAvailability,
      trainerAbout: req.body.trainerAbout
    }).then(function(dbTrainers) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTrainers);
    });
  });
};
