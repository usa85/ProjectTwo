var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/api/trainers/:trainerAvailability", function(req, res) {
    db.Trainer.findAll({
      where: {
        trainerAvailability: req.params.trainerAvailability
      }
    }).then(function(dbTrainers) {
      res.json(dbTrainers);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/clients", function(req, res) {
    console.log(req.body);
    db.Client.create({
      clientName: req.body.clientName,
      clientEmail: req.body.clientEmail,
      clientPhone: req.body.clientPhone,
      clientAvailability: req.body.clientAvailability,
      clientAbout: req.body.clientAbout
    }).then(function(dbClient) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbClient);
    });
  });
};
