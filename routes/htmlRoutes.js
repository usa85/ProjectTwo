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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
