const express = require("express");
const bodyParser = require("body-parser");
const port = 5000;

const app = express();

const todos = [
  { id: 1, title: "buy the milk" },
  { id: 2, title: "rent a car" },
  { id: 3, title: "feed the cat" },
];

// app.get("/", (req, res) => {
//   res.status(200).json(todos);
// });
// app.get(
//   "/user/:id",
//   (req, res, next) => {
//     console.log("ID:", req.params.id);
//     next();
//   },
//   (req, res, next) => {
//     res.send("User Info");
//   }
// );

// // handler for the /user/:id path, which prints the user ID
// app.get("/user/:id", (req, res, next) => {
//   res.send(req.params.id);
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.get(bodyParser.json());

app.get("/", (req, res) => res.status(200).json(todos));

app.post("/", (req, res) => {
  const newTodos = JSON.parse(req.body);
  newTodos.id = todos.length + 1;
  todos.push(newTodos);
  res.status(201).json(newTodos);
});

app.put("/:id", (req, res) => {
  const id = req.params.id;
  if (todos[id]) {
    const updatedTodo = JSON.parse(req.body);
    todos[id] = updatedTodo;
    res.status(204).send();
  } else {
    res.status(404, "The task is not found").send();
  }
});

app.listen(port);
