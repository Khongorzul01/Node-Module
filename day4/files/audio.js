var http = require("http");
var port = 3003;
var fs = require("fs");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "audio/mp3" });
    fs.readFile("duu.mp3", (error, data) => {
      if (error) {
        throw error;
      } else {
        response.end(data);
      }
    });
    // const pdf = fs.readFileSync("promise.pdf");
    // response.end(pdf);
  })
  .listen(port);
