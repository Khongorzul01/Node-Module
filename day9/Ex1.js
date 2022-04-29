const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("сайн байна уу. Намайг Хонгорзул гэдэг.");
});
app.listen(3000);
