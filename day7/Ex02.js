const EventEmitter = require("events");
const http = require("http");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("Хүсэлтийг амжилттай хүлээн авлаа.");
});
eventEmitter.emit("start");



const rootEmitter = new EventEmitter();
http
  .createServer((request, response) => {
    if (request.url === "uyanga") {
      response.end("<h1>Хүсэлтийг амжилттай хүлээн авлаа.</h1>");
    }
    if (request.url.match(/^\/tiktik/)) return tiktik(request, response);
   
  })
  .listen(3000);
  
function tiktik(req, res) {
 const message = req.url.split("?data=")[1];
  rootEmitter.emit("message", message);
  res.end();

}