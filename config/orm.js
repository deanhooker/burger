// Import (require) connection.js into orm.js
var connection = require('./connection.js');

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, cols, vals], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function (table, set, condition, cb) {
        var queryString = "UPDATE ?? SET ? where ?";
        connection.query(queryString, [table, set, condition], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

// Export the ORM object in module.exports.
module.exports = orm;