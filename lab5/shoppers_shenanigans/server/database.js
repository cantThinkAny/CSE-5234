var mySql = require("sync-mysql"); 

var connection = new mySql({
    host: "localhost",
    user: "root", 
    password: "", 
    database: "db",
    port: "3307"
})

module.exports = connection; 