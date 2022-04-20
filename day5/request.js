var http = require("https");
var fs = require("fs");
// http
//   .request(
//     {
//       hostname: "https://dev-api.mstars.mn",
//       method: "GET",
//       path: "/api/foods",
//       headers: { "Content-Type": "application/json" },
//     },
//     function (response) {
//       response.setEncoding("utf8");
//       response.on("onreadable", function (data) {});
//       console.log(data);
//     }
//   )
//   .end();

http
  .get("https://dev-api.mstars.mn/api/foods", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const foods = JSON.parse(Buffer.concat(data).toString());
      console.log(foods);

      fs.writeFile("foods", JSON.stringify(foods), (err) => {
        if (err) {
          throw err;
        } else {
          console.log("saved");
        }
      });
    });
  })
  .on("error", (err) => {
    console.log("Error:" + err.message);
  });
