// const fs = require("fs");
const path = require("path");

const js = "/Users/mstars_lab2_06/Desktop/Node-Module/day6/Ex-01.js";
// console.log(fs.readdirSync(folderPath));

console.log(path.dirname(js));
console.log(path.basename(js));
console.log(path.extname(js));
