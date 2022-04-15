var http = require("http");
var port = 3005;
var fs = require("fs");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "audio/mp4" });
    fs.readFile("vedio.mp4", (error, data) => {
      if (error) {
        throw error;
      } else {
        response.end(data);
      }
    });
  })
  .listen(port);
