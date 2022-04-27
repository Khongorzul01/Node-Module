const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const http = require('http');

eventEmitter.on("start", () => {
  console.log("Хүсэлтийг амжилттай хүлээн авлаа.");
});
eventEmitter.emit("start");

const rootEmitter = new EventEmitter();
http
  .createServer((request, response) => {
    if (request.url === "/root") {
      response.writeHead(200, { "Content-Type": "text/html" });
      const message = request.url === "/root"
      rootEmitter.emit("message", message);
      response.end("<h1>Хүсэлт амжилттай</h1>");
    }
   
  })
  .listen(3000);