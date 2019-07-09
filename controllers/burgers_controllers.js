var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

// the get route obtains the data for the entire table and it is updated dynamically as changes are made
router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// the post route allows additions to the table and insertion of new data
router.post("/api/burgers", function(req, res){
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger, req.body.devoured
    ], function(result) {
        // send back the ID of the new burger
        res.json({ id: result.insertId })
    });
})
// This uses the put method to update whether the burger has been eaten or not
router.put("/api/burgers/:id", function(req, res) {

    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // if no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;