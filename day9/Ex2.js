const express = require("express");
const request = require("request");

const app = express();
app.get("/films", (req, res) => {
  request("https://ghibliapi.herokuapp.com/films ", (error, response, body) => {
    if (error) {
      throw error;
    } else {
      const films = JSON.parse(body);
      console.log(films);
      const header = "<table border=3>";
      const footer = "</table border=3";
      let content = "";
      films.map((film) => {
        content += `<tr> <td>${film.title}</td> <td>${film.original_title} </td><td>${film.original_title_romanised}</td><td><img style="width:100px" src=${film.image} ></td></tr>`;
      });
      const result = header + content + footer;

      res.send(result);
    }
  });
});
app.listen(5000);
