const request = require("request");

function printFilms(str, callback) {
  request(
    "https://ghibliapi.herokuapp.com/films",
    function (error, response, body) {
      //   console.log("error", error);
      //   console.log("start", response);
      //   console.log("end", body);
      console.log(str);
      callback(str);
    }
  );
}

module.exports = printFilms;
