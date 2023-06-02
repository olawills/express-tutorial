const express = require("express");
const app = express();
const logger = require("./logger");

app.use(logger);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.listen(5000, () => console.log("Listening to localhost:5000"));
