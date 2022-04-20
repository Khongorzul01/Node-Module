var http = require("http");
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000, // 30 days
  "Content-Type": "application/json",
};
http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    let arr = {
      name: "hongoroo",
      age: "12",
    };

    response.end(JSON.stringify(arr));
  })
  .listen(3001);
console.log("Server running at http://localhost:3001");
