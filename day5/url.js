var url = require("url");
var adr = "https://ghibliapi.herokuapp.com/people";
var q = url.parse(adr, true);

console.log(q);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
