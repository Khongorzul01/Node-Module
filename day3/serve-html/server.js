var http = require("http");
var fs = require("fs");
const { error } = require("console");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile("index.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        console.log("Operation success");
        console.log(data);
        response.end(data);
      }
    });
  })
  .listen(3000);
console.log("Server is started");
