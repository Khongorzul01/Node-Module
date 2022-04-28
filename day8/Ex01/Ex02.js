const request = require("request");

function shalgah(str) {
  request(
    "https://ghibliapi.herokuapp.com/films",
    function (error, response, body) {
      console.log(str);
    }
  );
}
console.log(request);
module.exports = shalgah;
