const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/404", function (req, res) {
  res.render("404", { message: "oopsie!" });
});

app.get("/js", function (req, res) {
  var data = {
    name: "John",
    hobbies: ["playing football", "playing chess", "cycling"],
  };
  res.render("javascript", { data: data });
});

app.get("/food", function (req, res) {
  var foods = [
    { name: "burger", image: "/1.jpeg" },
    { name: "egg", image: "/2.jpeg" },
    { name: "cake", image: "/3.jpeg" },
  ];
  res.render("ex1", { foods: foods });
});

app.post(
  "/register",
  body("email").isEmail(),
  body("phone").isLength({ min: 8, max: 8 }),
  (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    } else {
      response.send("oklkj");
    }
  }
);
app.listen(3005);
