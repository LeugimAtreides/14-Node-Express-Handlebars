// import the orm
var orm = require("../config/orm");

// this sets a burger variable that will run the orm with a callback function
var burger = {

    // runs the function that will display the entire table
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });

    },
    
    // runs the function that inserts a value into the database
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res)
        })
    },

    // runs the function that updates a value in the database
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }


}

module.exports = burger;