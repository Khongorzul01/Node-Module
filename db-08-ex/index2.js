const express = require("express");
const mysql = require("mysql2");

const app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zulaa0230",
  database: "classicmodels",
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) {
    console.log("database connected successed");
  } else {
    console.log("error");
  }
});

app.put("/employees", (req, res) => {
  const id = req.query.employeeNumber;
  console.log(id);
  connection.query(
    `update employees set lastName= ${req.body.lastName},firstName=${req.body.firstName} where employeeNumber=${id}`,
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

app.get("/employees", (req, res) => {
  connection.query(
    `select lastName,firstName,employeeNumber from employees where employeeNumber=1188`,
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

app.get("/order", (req, res) => {
  connection.query(
    `select * from orders where orderNumber = 10102;`,
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

app.put("/order", (req, res) => {
  const request = req.query;
  console.log(request);
  connection.query(
    `select * from orders where orderNumber = 10102;`,
    [request.firstName, request.lastName, request.employeeNUmber],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

app.get("/unlock", (req, res) => {
  connection.query(`select count(*) from dept_emp;`, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

app.listen(3000, () => {
  console.log("App" + 3000);
});
