import React from 'react'
import Editor from './components/Editor';
import './App.css';
import { useState } from 'react'


function App() {
  const [sizeOfPanel, setSizeOfPanel] = useState();

  const [inputValue, setInputValue] = useState(
    { rows: 0,
      columns: 0  }
    );
  
  function handleChange (event) {
    console.log(event.target.value)
    setInputValue((prevInputValue) => {
      return {
        ...prevInputValue, 
        [event.target.name]: event.target.value
      }
    })
  }

  function submit (event) {
    event.preventDefault();
    setSizeOfPanel(inputValue);
  }

  return (
    <div className="App">
      <h1>Pixel Editor</h1>
      <form onSubmit={submit}>
            <input name='rows' type="number" placeholder='rader'  onChange={ handleChange } /> 
            <input name='columns' type="number" placeholder='columner'  onChange={ handleChange } /> 
            <button className='addBtn' >Börja rita</button>
        </form>
        <Editor sizeOfPanel = {sizeOfPanel} />
    </div>
  );
}

export default App;
