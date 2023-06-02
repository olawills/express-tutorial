const express = require("express");

const app = express();

const port = 5000;

const path = require("path");

// app.get("/", (req, res) => {
//   console.log("first express app");
//   res.status(200).send("Welcome Bitches");
// });

// app.all("*", (req, res) => {
//   res.status(404).send(`<h1> Resource not Found</h1>`);
// });

// app.listen(port, () => console.log("Starting at port 5000"));

//  Serving Static files

app.use(
  "/endpoint",
  express.static(path.join(__dirname, "public")),
  (req, res) => {
    res.send("Welcome ");
  }
);

app.listen(port, () => console.log("Starting at port 5000"));
