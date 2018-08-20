var db = require("../models");

module.exports = function(app) {
  // Get all clients that match
  app.get("/api/clients", function(req, res) {
    db.Example.findAll({}).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  // Get all trainers that match
  app.get("/api/trainers", function(req, res) {
    db.Example.findAll({}).then(function(dbTrainers) {
      res.json(dbTrainers);
    });
  });

  // Create a new example
  app.post("/api/clients", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Create a new example
  app.post("/api/trainers", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
