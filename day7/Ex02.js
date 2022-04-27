const EventEmitter = require("events");
const https = require("https");
const http = require("http");
const fs = require("fs");

const eventEmitter = new EventEmitter();

eventEmitter.on("films", () => {
  console.log("Хүсэлтийг амжилттай хүлээн авлаа.");
});
http
  .createServer(function (req, res) {
    eventEmitter.emit("films");
    if (req.url === "/films") {
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
      res.end("saved");
    }
  })
  .listen(3001);
