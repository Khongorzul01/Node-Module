var https = require("https");
var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    https
      .get("https://ghibliapi.herokuapp.com/films", (response) => {
        let data = [];
        response.on("data", (news) => {
          data.push(news);
        });
        response.on("end", () => {
          const news1 = JSON.parse(Buffer.concat(data).toString());
          console.log(news1);

          fs.writeFile("films.json", JSON.stringify(news1), (err) => {
            if (err) {
              throw err;
            } else {
              res.write("<h1>checked</h1>");
            }
          });
        });
      })
      .on("error", (err) => {
        console.log("Error:" + err.message);
      });
    res.end("<h1>checked</h1>");
  })
  .listen(3001);
