const mysql = require('mysql2');
require("dotenv").config()

// Create a connection pool with the promise wrapper
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}).promise();

module.exports = pool;

