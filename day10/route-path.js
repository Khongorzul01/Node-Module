const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/library", (req, res) => {
//   console.log(req.query);
//   fs.readFile("library.json", (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       let datas = JSON.parse(data);
//       let id = datas.filter((e) => {
//         if (
//           e.user.id == Number(req.query.userId) &&
//           e.book.id == Number(req.query.bookId)
//         ) {
//           return e;
//         }
//       });
//       res.send(id);
//     }
//   });
// });
// app.listen(3003);

app
  .route("/book")
  .get(function (req, res) {
    res.send("Get a random book");
  })
  .post(function (req, res) {
    // let users = JSON.parse(req.body);
    console.log(req.body);
    // users.push(req.body);
    res.send(" Add a book");
  })
  .put(function (req, res) {
    console.log(req.body);
    res.send("Update the book");
  });
app.listen(3002);

app.use(express.static("public"));
