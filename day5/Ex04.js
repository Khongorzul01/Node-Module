var http = require("http");
var fs = require("fs");
var port = 3000;
var queryString = require("querystring");

http
  .createServer((request, response) => {
    if (request.url === "/png") {
      response.writeHead(200, { "Content-Type": "image/png" });
      fs.readFile("hool.png", (error, data) => {
        if (error) {
          throw error;
        } else {
          response.end(data);
        }
      });
    } else if (request.url === "/html") {
      response.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("ex.html", (error, data) => {
        if (error) {
          throw error;
        } else {
          response.end(data);
        }
      });
    } else if (request.url === "/json") {
      response.writeHead(200, { "Content-Type": "application/json" });
      let arr = {
        name: "hongoroo",
        age: "12",
      };

      response.end(JSON.stringify(arr));
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Not found");
      response.end();
    }
  })
  .listen(port);
