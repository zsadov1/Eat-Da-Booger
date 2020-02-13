const connection = require("../config/connection");

function printQuestionMarks(num) {
    let arr = [];

    for(var i=0; i < num; i++) {
        arr.push("?")
    }

    return arr.toString();
}

const orm = {
    selectAll: function(tableInput, callback) {
        const queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, [tableInput], function(err,result){
            if(err) throw err;
            callback(result);
        });
    },
    
    insertOne: function(tableInput, column, value, callback) {
        const query = `INSERT INTO ?? (??) VALUES (?)`;
        connection.query(query, [tableInput, column, value] , function(err, result) {
            if(err) throw err
            callback(result)
        });
    },

    updateOne: function(tableInput, col1,val1, col2, val2, callback) {
        const query = `UPDATE ?? SET ?? = ? WHERE ??=?`;
        RTCPeerConnection.query(query, [tableInput, col1, val1, col2, val2], function 
            (err, result) {
                if (err) throw err;
                callback(result);
            });
    }
};



module.exports = orm; 