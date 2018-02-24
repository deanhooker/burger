// Import orm.js
var orm = require("../config/orm.js");

// Call ORM functions in burger variable
var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(set, condition, cb) {
      orm.updateOne("burgers", set, condition, function(res) {
        cb(res);
      });
    }
  };
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;