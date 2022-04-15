var http = require("http");
var fs = require("fs");
var port = 3008;
var queryString = require("querystring");

http
  .createServer((request, response) => {
    if (request.url === "/pdf") {
      response.writeHead(200, { "Content-Type": "application/pdf" });
      fs.readFile("promise.pdf", (error, data) => {
        if (error) {
          throw error;
        } else {
          response.end(data);
        }
      });
    }
    if (request.url === "/mp4") {
      response.writeHead(200, { "Content-Type": "audio/mp4" });
      fs.readFile("vedio.mp4", (error, data) => {
        if (error) {
          throw error;
        } else {
          response.end(data);
        }
      });
    }
    if (request.url === "/png") {
      response.writeHead(200, { "Content-Type": "image/png" });
      fs.readFile("hool.png", (error, data) => {
        if (error) {
          throw error;
        } else {
          response.end(data);
        }
      });
    }
    if (request.url === "/mp3") {
      response.writeHead(200, { "Content-Type": "audio/mp3" });
      fs.readFile("duu.mp3", (error, data) => {
        if (error) {
          throw error;
        } else {
          response.end(data);
        }
      });
    } else if (request.url === "/q?a=3&b=4&c=8&d=5") {
      const { a, b, c } = queryString.parse(request.url.slice(3));
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(`${Number(a) + Number(b) + Number(c)} `);
      response.end();
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Not found");
      response.end();
    }
  })
  .listen(port);
