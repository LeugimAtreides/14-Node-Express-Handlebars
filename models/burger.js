// import the orm
var orm = require("../config/orm");

// this sets a burger variable that will run the orm with a callback function
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burger", function(res) {
            cb(res);
        });

    },
}