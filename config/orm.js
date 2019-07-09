var connection = require('../config/connection')


var orm = {

    // function to select every item in the database
    selectAll: function(tableInput, cb){

        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        })
    },
    
    // function to add a
    insertOne: function(){},

    updateOne: function(){}
}