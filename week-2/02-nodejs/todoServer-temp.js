const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const todos = [
  {
    todo_id: '1',
    title: 'Todo Number 1',
    desc: 'This is a todo'
  },
]
app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  res.status(200).send(todos);
});

app.get('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const todo = todos.find((todo) => todo.todo_id === todoId);
  if (todo) res.status(200).send(todo);
  else res.status(404).send("Not Found!");
});

app.post('/todos', (req, res) => {
  // console.log(req.body.title);
  const newTodo = {
    todo_id: Math.floor(Math.random() * 1000000),
    title: req.body.title,
    desc: req.body.desc
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
})

app.put('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.todo_id === todoId);
  
  if (todoIndex === -1) {
    return res.status(404).send("Todo not found");
  }
  
  // Update the todo item
  todos[todoIndex].title = req.body.title;
  todos[todoIndex].desc = req.body.desc;
  
  res.send(200).json(todos[todoIndex]);
});

app.delete('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.todo_id === req.params.id);
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos.splice(todoIndex, 1);
    res.status(200).send("Deleted successfully");
  }
});

app.use((req, res) => {
  res.status(404).send("Not Found");
})

app.listen(3000, () => console.log('listening on port 3000'));