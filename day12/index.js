const express = require("express");
const logStuff = require("./log");
const app = express();

// app.get("/user/:id", function (req, res) {
//   res.send("#1");
//   console.log("#1");
// });
// app.get("/user/:id", function (req, res) {
//   res.send("#2");
//   console.log("#2");
// });

// app.get(
//   "/user/:id",
//   function (req, res, next) {
//     const user_id = req.params.id;
//     if (user_id > 2000) next("route");
//     if (user_id < 50) next();
//     res.send("#1");
//   },
//   function (request, response, next) {
//     response.send("#2");
//   }
// );
// app.get("/user/:id", function (req, res) {
//   res.send("#3");
// });

app.get("/arrayuser/:id", logStuff, function (req, res, next) {
  res.send("User info");
});
app.listen(3000);
