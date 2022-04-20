var http = require("http");
var fs = require("fs");
var port = 3000;
var queryString = require("querystring");

http
  .createServer((request, response) => {
    // if (request.url === "/?data=png") {
    //   response.writeHead(200, { "Content-Type": "image/png" });
    //   let zurag = fs.readFile("hool.png", (error, data) => {
    //     if (error) {
    //       throw error;
    //     } else {
    //       response.end(data);
    //     }
    //   });
    //     zurag = queryString.parse(request.url.slice(2));
    // } else if (request.url === "/?data=html") {
    //   response.writeHead(200, { "Content-Type": "text/html" });
    //   fs.readFile("ex.html", (error, data) => {
    //     if (error) {
    //       throw error;
    //     } else {
    //       response.end(data);
    //     }
    //   });
    // }
    if (request.url.match(/^\/data/)) {
      const value = request.url.split("=");
      res.writeHead(200, { "Content-Type": "application/json" });
      let arr = {
        name: "hongoroo",
        age: "12",
      };
      res.end(JSON.stringify(arr));
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Not found");
    }
  })
  .listen(port);

// function dd(req, res) {
//   console.log(req.url);
//   res.writeHead(200, { "Content-Type": "application/json" });
//   let arr = {
//     name: "hongoroo",
//     age: "12",
//   };
//   res.end(JSON.stringify(arr));
// }
