const express = require("express");
const fs = require("fs");

const app = express();
app.get("/get-data", (req, res) => {
  const data = fs.createReadStream("./data/data.csv");
  console.log(data);
  data.on("open", function () {
    data.pipe(res);
  });
});
app.listen(3003);
