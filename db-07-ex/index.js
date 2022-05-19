const express = require("express");
const mysql = require("mysql2");

const app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zulaa0230",
  database: "employees",
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) {
    console.log("database connected successed");
  } else {
    console.log("error");
  }
});

app.get("/company", (req, res) => {
  const request = req.query;
  console.log(request);
  connection.query(
    `select count(*) as positionNumbers from employees where emp_no in (select emp_no from titles where title= ?)`,
    [request.title],
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
  const request = req.query;
  console.log(request);
  connection.query(
    `select sum(salary) as sumSalary from dept_emp e left join salaries s on e.emp_no=s.emp_no
      left join departments d on d.dept_no=e.dept_no where  d.dept_name="Finance";`,
    [request.title],
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

app.get("/managers/salary", (req, res) => {
  const request = req.query;
  console.log(request);
  connection.query(
    `select * from employees b right join (select salary, emp_no from salaries s right join dept_manager d using (emp_no)) a using(emp_no) ;`,
    [request.title],
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

app.listen(3000, () => {
  console.log("App" + 3000);
});
