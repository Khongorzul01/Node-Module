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
    let arr = {
      Type: "animal",
      Race: "Sheep",
    };

    response.end(JSON.stringify(arr));
  })
  .listen(3000);
console.log("Server running at http://localhost:3000");
