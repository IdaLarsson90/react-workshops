
import './App.css';

import TodoItem from './components/TodoItem';

function App() {
  const todos = [
    { id: 0, task: 'köp kaffe'},
    { id: 1, task: 'köp kaka'},
    { id: 2, task: 'brygg kaffe'},
    { id: 3, task: 'dricka kaffe'},
    { id: 4, task: "smör"}
  ];

  const todoItems = todos.map ((todo) => {
    return <TodoItem task= {todo.task} key={ todo.id } />
  });


  return (
    <div className="App">
      <ul>
      {todoItems}
      </ul>
    </div>
  );
}

export default App;
