const express = require("express");
const request = require("request");

const app = express();
app.get("/api/foods", (req, res) => {
  request("http://dev-api.mstars.mn/api/foods", (error, response, body) => {
    if (error) {
      throw error;
    } else {
      const foods = JSON.parse(body);
      const header = "<table border=3>";
      const footer = "</table border=3";
      let content = "";
      foods.data.map((food) => {
        content += `<tr> <td>${food.price}</td> <td>${food.name} </td><td>${food.stock}</td><td>${food.portion}</td></tr>`;
      });
      const result = header + content + footer;

      res.send(result);
    }
  });
});
app.listen(5000);
