var http = require("http");
var port = 3000;
var fs = require("fs");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/pdf" });
    fs.readFile("promise.pdf", (error, data) => {
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
