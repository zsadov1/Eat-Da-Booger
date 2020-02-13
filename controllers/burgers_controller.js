const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function(req,res) {
    burger.selectAll(function(data) {
        res.render("index" , {burger: data})
    });
});

router.post("/api/burgers" , function(req,res) {
    const value = req.body.burger_name;
    burger.insertOne(value, function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req,res) {
    const condition = req.params.id;
    burger.updateOne(condition, function(result) {
        if (result,affectedRow === 0) {
              return res.status(404). end();
            } else {
              res.status(200).end();;
            }
    });
});

module.exports = router; 

// A lot of this code is lifted from cats controller, and I plugged in values that made sense for the methods given.