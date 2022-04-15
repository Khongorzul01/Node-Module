var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile("content.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        console.log("check");
        // console.log(data);
      }
      response.end(data);
    });
  })
  .listen(3002);
console.log("Server is started");
