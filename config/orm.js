var connection = require('../config/connection')

// function that assists in sql formatting by creating question marks for inputting multiple values
function printQuestionMarks(num){

    var arr = [];

    for (var i = 0; i < num; i++){

        arr.push("?");
    };
    // console.log(arr);
    return arr.toString();
}

// printQuestionMarks(4);

// Helper function to convert object key/value pairs to SQL syntax
// converts to a usable format
function objToSql(ob) {

    var arr = [];

    for (var key in ob){

        var value = ob[key];
        
        // checks to skip hidden properties

        if (Object.hasOwnProperty.call(ob, key)){

            // if the string has spaces then add quotation marks to the string
            if (typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            // e.g {burger_name: 'The Royale Wit Cheese'} gets turned into ["burger_name = 'The Royale Wit Cheese']
            // e.g {devoured: true} turned into ["devoured=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();

}

// console.log()
// var test = {
//     potato: "pants on fire"
// }

// console.log(objToSql(test))

var orm = {

    // function to select every item in the database
    selectAll: function(tableInput, cb){

        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result) {
            if (err){
                throw err;
            }

            cb(result);
        });
    },
    
    // // function to add a burger to list, by turning the query into many small pieces it creates highly reusable code
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, function(err, result){
            if (err) {
                throw err;
            };

            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb)
        {
            var queryString = "UPDATE " + table;

            queryString += " SET ";
            queryString += objToSql(objColVals);
            queryString += " WHERE ";
            queryString += condition;

            console.log(queryString);
            connection.query(queryString, function(err, result) {
                if (err) {
                    throw err;
                }

                cb(result);
            });
        }
}


module.exports = orm;