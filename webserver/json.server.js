var http = require("http");
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000, // 30 days
  "Content-Type": "application/json",
  /** add other headers as per requirement */
};
http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    let object = { name: "hongoroo", job: "student" };
    response.end(JSON.stringify(object));
  })
  .listen(3001);
console.log("Server running at http://localhost:3001");
