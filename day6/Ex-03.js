var https = require("https");
var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    https
      .get("https://ghibliapi.herokuapp.com/films", (response) => {
        let data = [];
        response.on("data", (news) => {
          data.push(news);
        });
        response.on("end", () => {
          const news1 = JSON.parse(Buffer.concat(data).toString());
          const tableBegin = "<table>";
          const tableEnd = "</table>";
          let content = "";

          news1.map((e) => {
            content =
              content +
              `<tr ><td >${e.title}</td> <td ><img style=' width: 100px' src="${e.image}"/></td></tr>`;
          });
          const result = tableBegin + content + tableEnd;
          res.end(result);
        });
      })
      .on("error", (err) => {
        console.log("Error:" + err.message);
      });
  })
  .listen(3002);
