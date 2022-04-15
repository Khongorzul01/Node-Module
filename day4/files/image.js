var http = require("http");
var port = 3001;
var fs = require("fs");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "image/png" });
    fs.readFile("hool.png", (error, data) => {
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
