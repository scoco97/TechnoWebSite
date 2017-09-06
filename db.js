var mysql = require('mysql')
var conn

conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb",
  multipleStatements: true,
});

module.exports = conn
