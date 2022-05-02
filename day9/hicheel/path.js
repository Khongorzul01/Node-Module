const express = require("express");
const fs = require("fs");
const { request } = require("http");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.get("/", (request, response) => {cons});

app.post("/", (request, response) => {
  fs.readFile("user.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      console.log(data);
      let users = JSON.parse(data);
      users.push(request.body);
      fs.writeFile("user.json", JSON.stringify(users), (err) => {
        if (err) {
          throw err;
        } else {
          console.log("yea");
        }
      });
    }
  });

  console.log("got post request from client");
  response.send("Got the post request");
});
app.put("/", (request, response) => {
  fs.readFile("user.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      console.log(data);
      let users = JSON.parse(data);
      users.push(request.body);
    }
  });
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  fs.readFile("user.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      let datas = JSON.parse(data);
      let id = datas.filter((e) => {
        if (e.id == Number(req.params.userId)) {
          return e;
        }
      });
      res.send(id);
    }
  });
});
app.listen(3000);
