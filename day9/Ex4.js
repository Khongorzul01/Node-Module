const { json } = require("body-parser");
const express = require("express");
const fs = require("fs");

const app = express();
app.get("/get-data", (req, res) => {
  fs.readFile("./data/data.csv", "utf8", function (error, data) {
    let dataArr = data.split(/\r?\n/);
    let json = dataArr;
    console.log(json);
    res.send(json);
  });
});
app.listen(3003);
