const request = require("request");

function shalgah(str, callback) {
  request(
    "https://ghibliapi.herokuapp.com/films",
    function (error, response, body) {
      console.log(str);
      // synchronus
      // callback(str);
    }
  );
}

module.exports = shalgah;
