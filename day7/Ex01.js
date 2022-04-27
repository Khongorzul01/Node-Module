const EventEmitter = require("events");
const http = require("http");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("Хүсэлтийг амжилттай хүлээн авлаа.");
});

http
  .createServer((request, response) => {
    eventEmitter.emit("start");
    response.end("<h1>Хүсэлтийг амжилттай хүлээн авлаа.</h1>");
  })
  .listen(3000);
