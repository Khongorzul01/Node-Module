const express = require("express");
const app = express();
const router = express.Router();
app.use("/user", router);

// router.get("/userinfo/:id", function (req, res, next) {
//   res.send("User info with id");
//   next();
// });

// router.use("/user", function (err, request, response, next) {
//   response.status(500).response.send("User info");
// });

// app.all("*", (req, res, next) => {
//   res.status(404).json({
//     status: "fail",
//     message: `Can't find ${req.originalUrl}`,
//   });
// });

router.get("/userinfo/:id", function (req, res, next) {
  const id = req.params.id;
  if (id < 0) {
    const err = new Error("Can't fint user with this ID");
    err.status = "fail";
    err.statusCode = 500;
    return next(err);
  }
  res.send("User info with id" + id);
});
app.listen(3001);
