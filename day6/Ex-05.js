var https = require("https");
var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    https
      .get("https://ghibliapi.herokuapp.com/people", (response) => {
        let data = [];
        response.on("data", (news) => {
          data.push(news);
        });
        response.on("end", () => {
          const news1 = JSON.parse(Buffer.concat(data).toString());
          const tableBegin = "<table>";
          const tableEnd = "</table>";
          let content = "";
          // console.log(value);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.writeHead(200, { "Content-Type": "image/jpg" });

          if (value[1] == "people") {
            news1.map((e) => {
              // console.log(e.films);
              content += `<tr ><td >${e.name}</td> <td >${e.age}</td><td >${e.gender}</td><td >`;
              // console.warn(`${e.films}`);
              https.get(`${e.films}`, (res) => {
                let imageLink = {};
                res.on("data", (e) => {
                  imageLink = e;
                });
                res.on("end", () => {
                  const imgLinks = JSON.parse(
                    Buffer.concat(imageLink).toString()
                  );
                  console.log(imgLinks);
                });
                content += `<img src="${res.image}"/></td></tr>`;
                //   console.warn(res.image);
              });
            });
            //   console.warn(content);

            const result = tableBegin + content + tableEnd;
            res.end(result);
          }
        });
      })
      .on("error", (err) => {
        console.log("Error:" + err.message);
      });
  })
  .listen(3000);
