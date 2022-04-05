import './App.css';
import { useState } from 'react';
import EnterName from './components/EnterName'

function App() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrese() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <button onClick={ increase }> Öka med 1</button>
      <button onClick={ decrese }> Minska med 1</button>
      <p> Räknare: { counter }</p>

      <EnterName/>
    </div>
  );
}

export default App;
