const request = require("request");
const EventEmitter = require("events");
const http = require("http");
const fse = require("fs-extra");

const eventEmitter = new EventEmitter();

eventEmitter.on("films-show", () => {
  request(
    "https://ghibliapi.herokuapp.com/films",
    function (err, response, body) {
      fse.writeJson("films.json", { name: "fs-extra" }, (err) => {
        if (err) return console.error(err);
        console.log("success!");
      });
    }
  );
});

http
  .createServer(function (req, res) {
    if (req.url === "/films") {
      eventEmitter.emit("films-show");
      res.end("saved");
    }
  })
  .listen(3000);
