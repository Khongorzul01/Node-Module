const request = require("request");

function printFilms(str, callback) {
  return new Promise((resolve, reject) => {
    request(
      "https://ghibliapi.herokuapp.com/films",
      (error, response, body) => {
        if (response) {
          console.log(str);
          resolve("df");
        } else {
          reject("dfg");
        }
      }
    );
  });
}

module.exports = printFilms;
