const shalgah = require("../Ex01/app");

// asynchronus - web api дараалал харгалзахгүйгээр
function example() {
  shalgah("A"), shalgah("b"), shalgah("c");
}

// synchronus - дараалаллын дагуу
function example() {
  shalgah("A", () => {
    shalgah("b", () => {
      shalgah("c", () => {});
    });
  });
}
example();
