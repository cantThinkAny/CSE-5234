var mySql = require("sync-mysql"); 

var connection = new mySql({
    host: "localhost",
    user: "root", 
    password: "", 
    database: "db"
})

module.exports = connection; 