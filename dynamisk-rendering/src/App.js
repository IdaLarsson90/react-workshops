
import './App.css';
import { useState } from 'react'


import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import TodosCounter from './components/TodosCounter';

function App() {
  const [todos, setTodos] = useState ([
    { id: 0, task: 'köp kaffe'},
    { id: 1, task: 'köp kaka'},
    { id: 2, task: 'brygg kaffe'},
    { id: 3, task: 'dricka kaffe'}
  ]);

    console.log(todos.length);
  const todoItems = todos.map ((todo) => {
    return <TodoItem task= {todo.task} key={ todo.id } />
  });

  function addTodo (todoText) {
    const newTodo = {
      id: todos.length,
      task: todoText
    }

    const todoArrayCopy = [...todos];
    
    todoArrayCopy.push(newTodo);
    setTodos(todoArrayCopy);
  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TodosCounter amount={todos.length}/>
      <ul>
        {todoItems}
      </ul>
      <AddTodo addTodo = { addTodo } />
    </div>
  );
}

export default App;
