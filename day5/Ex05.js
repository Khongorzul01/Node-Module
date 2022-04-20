var http = require("http");
var fs = require("fs");
var port = 3005;
var queryString = require("querystring");

http
  .createServer((request, response) => {
    if (request.url.match(/^\/data/)) {
      const value = request.url.split("=");
      console.log(value);
      response.writeHead(200, { "Content-Type": "image/png" });
      response.writeHead(200, { "Content-Type": "application/json" });
      response.writeHead(200, { "Content-Type": "text/html" });
      if (value[1] == "png") {
        fs.readFile("hool.png", (error, data) => {
          if (error) {
            throw error;
          } else {
            console.log("PNG");
            response.write(data);
            response.end();
          }
        });
      } else if (value[1] == "html") {
        fs.readFile("ex.html", (error, data) => {
          if (error) {
            throw error;
          } else {
            response.write(data);
            response.end();
          }
        });
      } else if (value[1] == "json") {
        let arr = {
          name: "hongoroo",
          age: "12",
        };
        response.end(JSON.stringify(arr));
      } else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("Not found");
      }
    }
  })
  .listen(port);
