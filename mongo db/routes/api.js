const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const mongoose = require("mongoose");

router.get("/users", (req, res) => {
  Users.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      return res.json({
        data: data,
      });
    }
  });
});

router.delete("/users", (req, res) => {
  const reqBody = req.body;
  console.log(reqBody);
  let usersName = {
    name: "Hongorzul",
  };
  Users.findOneAndDelete({ name: req.body.name }, usersName, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send("delete");
    }
  });
});

router.put("/users", (req, res) => {
  const reqBody = req.body;
  console.log(reqBody);
  let updateUser = {
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  };
  Users.findOneAndUpdate({ name: req.body.name }, updateUser, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send("update yes");
    }
  });
});

router.post("/users", (req, res, next) => {
  const reqBody = req.body;
  console.log(reqBody.name);

  let newUser = new Users({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  });
  newUser
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Success",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "error",
        data: err,
      });
    });
  // res.send("Success");
});

module.exports = router;
