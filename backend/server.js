'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {

  let mysql = require('mysql');

  let con = mysql.createConnection({
    host: "db",
    user: "root",
    password: "a1s2d3f4",
    database: "Kalmi"
  });

  con.query('SELECT * FROM users', function (error, results, fields) {
    res.send(results);
  });

});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});