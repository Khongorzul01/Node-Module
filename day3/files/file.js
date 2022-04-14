// NodeJS file core module
// fs module ashiglay gsen ug
var file = require("fs");

// ene module iig ashiglaad message.txt gedeg file iin dotorh contentiig unshiy
file.readFile("message.txt", (error, data) => {
  if (error) {
    //hervee ymar negen aldaa garval
    console.log("Error is happening");
    throw error;
  } else {
    //hervee ymar neg aldaa garahgui bol datag hevle
    console.log("Content:" + data);
  }
});
