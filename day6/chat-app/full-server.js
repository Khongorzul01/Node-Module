const fs = require("fs");
const http = require("http");
const EventEmitter = require("events");

const chatEmitter = new EventEmitter();
http
  .createServer((request, response) => {
    if (request.url === "/") {
      response.end("<h1>Chat app</h1>");
    }
    if (request.url === "/sse") return respondSSE(request, response);
    if (request.url.match(/^\/static/)) return respondStatic(request, response);
    if (request.url.match(/^\/chat/)) return respondChat(request, response);
  })
  .listen(3000);

function respondChat(req, res) {
  const message = req.url.split("?message=")[1];
  console.log(message);
  chatEmitter.emit("message", message);
  res.end();
}

function respondStatic(req, res) {
  const fileName = `${__dirname}/public/${req.url.split("static")[1]}`;
  fs.createReadStream(fileName)
    .on("error", () => res.end("Not found"))
    .pipe(res);
}

function respondSSE(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
  });
  const onMessage = (msg) => res.write(`data: ${msg}\n\n`);
  chatEmitter.on("message", onMessage);

  res.on("close", () => {
    chatEmitter.off("message", onMessage);
  });
}
