const orm = require("../config/orm");


const burger = {
    SelectAll: function(callback) {
        orm.selectAll("burgers" , function(res) {
            callback(res);
        });
    },

    insertOne: function(inputValue , callback) {
        orm.insertOne("burgers" , "burgers_name", inputValue , function(res) {
            callback(res);
        });
    },

    updateOne: function(id, callback) {
        orm.updateOne("burgers", "devoured", 1, "id" , id, function(res) {
            callback(res);
        });
    }

};

module.exports = burger; 