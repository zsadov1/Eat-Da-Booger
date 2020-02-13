const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "",
    database: "burger_db"
});

// Make Connection

connection.connect(function(err) {
    if(err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

// Export connection for our ORM to use

module.exports = connection; 