var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  app.get("/clients", function(req, res) {
    res.render("clients", {});
  });

  app.get("/trainers", function(req, res) {
    res.render("trainers", {});
  });

  app.get("/api/clients/:clientAvailability", function(req, res) {
    res.render("foundtrainers", {});
  });

  app.get("/api/trainers/:trainerAvailability", function(req, res) {
    res.render("foundclients", {});
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
