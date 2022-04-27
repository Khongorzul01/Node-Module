const EventEmitter = require("events");
const https = require("https");
const http = require("http");
const fs = require("fs");

const eventEmitter = new EventEmitter();

eventEmitter.on("films-show", () => {
  console.log("Хүсэлтийг амжилттай хүлээн авлаа.");
});
http
  .createServer(function (req, res) {
    eventEmitter.emit("films-show");
    if (req.url.match(/^\/ghibli/)) {
      const value = req.url.split("=");
      console.log(value);
      res.writeHead(200, { "Content-Type": "text/html" });

      if (value[1] == "films") {
        https
          .get("https://ghibliapi.herokuapp.com/films", (response) => {
            let data = [];
            response.on("data", (news) => {
              data.push(news);
            });
            response.on("end", () => {
              const news1 = JSON.parse(Buffer.concat(data).toString());
              const tableBegin = "<table>";
              const tableEnd = "</table>";
              let content = "";

              news1.map((e) => {
                content =
                  content +
                  `<tr ><td >${e.title}</td> <td ><img style=' width: 100px' src="${e.image}"/></td></tr>`;
              });
              const result = tableBegin + content + tableEnd;
              res.end(result);
              fs.writeFile("films1.html", JSON.stringify(result), (err) => {
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
      if (value[1] == "people") {
        https
          .get("https://ghibliapi.herokuapp.com/people", (response) => {
            let data = [];
            response.on("data", (news) => {
              data.push(news);
            });
            response.on("end", () => {
              const news1 = JSON.parse(Buffer.concat(data).toString());
              const tableBegin = "<table>";
              const tableEnd = "</table>";
              let content = "";

              news1.map((e) => {
                content =
                  content +
                  `<tr ><td >${e.name}</td> <td >${e.age}</td><td >${e.gender}</td></tr>`;
              });
              const result = tableBegin + content + tableEnd;
              res.end(result);
              fs.writeFile("people.html", JSON.stringify(result), (err) => {
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
    }
  })
  .listen(3000);
