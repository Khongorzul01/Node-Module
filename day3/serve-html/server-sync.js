var http = require("http");
var fs = require("fs");
const { error } = require("console");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    // response.write(fs.readFileSync("test.html"));
    response.end(fs.readFileSync("test.html"));
  })
  .listen(3000);
console.log("start");
