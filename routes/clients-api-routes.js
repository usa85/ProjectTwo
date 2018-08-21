var db = require("../models");
//var ToDo = require("../models/toDoList")
// console.log(ToDo);
// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/api/clients", function(req, res) {
    //var searchTrainers = the value of what time of day people are selecting

    db.Trainer.findAll({
      where: {
        // The clients time of day is the same as the trainer
      }
    }).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/clients", function(req, res) {
    console.log(req.body);
    db.Client.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      availability: req.body.availability,
      goals: req.body.goals
    }).then(function(dbClient) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbClient);
    });
  });
};
