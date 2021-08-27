const express = require("express");
const app = express();
const port = 3000;

let counter = 0;

app.get("/", (req, res) => {
  counter++;
  if (counter > 100) {
    server.close();
    res.send(`dead.`);
  }

  res.send(`Hello World! Count ${counter}.`);
});

var server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
