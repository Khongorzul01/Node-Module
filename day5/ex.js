var http = require("http");
var fs = require("fs");
var port = 3000;
var queryString = require("querystring");

http
  .createServer((request, response) => {
    if (request.url.match(/^\/q/)) {
      const value = request.url.split("=");
      console.log(value);
      response.writeHead(200, { "Content-Type": "text/html" });
      if (value[1] == "why") {
        response.write("<h1>hi</h1>");
      } else if (value[1] == "hi") {
        response.write("<h1>gfd</h1>");
      }
    }
    response.end();
  })
  .listen(3008);
