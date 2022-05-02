const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Type", "application/json");
  next();
});

app.get("/get-data", (req, res) => {
  fs.readFile("./data/data.csv", "utf8", function (error, data) {
    let dataArr = data.split(/\r?\n/);
    let json = dataArr;
    console.log(json);
    res.send(json);
  });
});
app.listen(3000);
