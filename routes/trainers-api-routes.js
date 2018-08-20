module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/api/trainers", function(req, res) {
    //var searchClients = the value of what time of day people are selecting

    db.Client.findAll({
      where: {
        // The trainers time of day is the same as the clients
      }
    }).then(function(dbTrainers) {
      res.json(dbTrainers);
    });
  });

  // POST route for saving a new trainer. We can create a todo using the data on req.body
  app.post("/api/trainers", function(req, res) {
    console.log(req.body);
    db.Trainer.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbTrainers) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTrainers);
    });
  });
};