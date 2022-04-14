var fs = require("fs");
var content = "this is th content of the file";

fs.writeFileSync("message.txt", content);

console.log("File written successfully");
