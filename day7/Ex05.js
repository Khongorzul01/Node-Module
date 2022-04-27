const EventEmitter = require("events");
const https = require("https");
const http = require("http");
const fs = require("fs");

const eventEmitter = new EventEmitter();

eventEmitter.on("films-show", (res) => {
  console.log("Хүсэлтийг амжилттай хүлээн авлаа.");
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
          content += `<tr ><td >${e.title}</td> <td ><img style=' width: 100px' src='${e.image}'/></td></tr>`;
        });
        const result = tableBegin + content + tableEnd;

        fs.writeFileSync("films1.html", JSON.stringify(result));
        res.end();
      });
    })
    .on("error", (err) => {
      console.log("Error:" + err.message);
    });
});

eventEmitter.on("people-show", () => {
  console.log("Хүсэлтийг амжилттай хүлээн авлаа.");
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

        fs.writeFile("people.html", JSON.stringify(result), (err) => {
          if (err) {
            throw err;
          }
        });
      });
    })
    .on("error", (err) => {
      console.log("Error:" + err.message);
    });
});

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url.match(/^\/ghibli/)) {
      const value = req.url.split("=");
      console.log(value);

      if (value[1] == "films") {
        eventEmitter.emit("films-show", res);

        const films = fs.readFileSync("films1.html");
        res.write(films.toString());
      }
      if (value[1] == "people") {
        eventEmitter.emit("people-show");
        const films = fs.readFileSync("people.html");
        res.write(films.toString());
      }
    }
    res.end();
  })
  .listen(3000);
