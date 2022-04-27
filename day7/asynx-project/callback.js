const printFilms = require("./app");

function printAll() {
  printFilms("A", () => {
    printFilms("b", () => {
      printFilms("c", () => {});
    });
  });
}

printAll();
