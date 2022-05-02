const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
// app.use(express.json());
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

app.get("/", (req, res) => {
  fs.readFile("profile.json", "utf-8", (error, data) => {
    console.log(data);
    if (error) {
      throw error;
    } else {
      res.send(data);
    }
  });
});
app.listen(3009);
