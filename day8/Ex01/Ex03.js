const request = require("request");
const EventEmitter = require("events");
const http = require("http");
const fs = require("fs-extra");

const eventEmitter = new EventEmitter();

eventEmitter.on("films-show", () => {
  request("https://ghibliapi.herokuapp.com/films", (err, response, body) => {
    const data = JSON.parse(body);
    console.log(data);
    // fs.writeJson("films.json", { name: "fs-extra" })
    //   .then(() => {
    //     console.log("success!");
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  });
});

http
  .createServer(function (req, res) {
    if (req.url === "/films") {
      eventEmitter.emit("films-show");
      res.end("saved");
    }
  })
  .listen(3000);
