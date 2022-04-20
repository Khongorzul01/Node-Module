var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile("ex.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        console.log("check");
      }
      response.end(data);
    });
  })
  .listen(3002);
console.log("Server running at http://localhost:3002");
