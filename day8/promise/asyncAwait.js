const printFilms = require("./promise");

async function printAllPromise() {
  await printFilms("A", () => {});
  await printFilms("B", () => {});
  await printFilms("C", () => {});
  await printFilms("A");
  await printFilms("B");
  await printFilms("C");
}

printAllPromise();
