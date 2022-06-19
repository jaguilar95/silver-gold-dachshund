const mysql = require("mysql2");
require("dotenv").config();

// connecting to mysql
const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log("Connected to the election database")
);

module.exports = db;
