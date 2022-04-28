const request = require("request");

function shalgah(str) {
  request("https://ghibliapi.herokuapp.com/films", (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data);
  });
}

shalgah();
module.exports = shalgah;
