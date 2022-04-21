import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Registration from './view/Registration';
import Account from './view/Account';
import Error from './view/Error';

function App() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password:""
  });

  function handleChange (event) {
    setInputValue((prevInputValue) => {
        return {
            ...prevInputValue, 
            [event.target.name]: event.target.value
        }
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Välkommen!</h1>
      </header>
      
      <Routes>
        <Route path='/' element={ <Registration handleChange= {handleChange} />} />
        <Route path='/account' element={ <Account inputValue = {inputValue}  handleChange= {handleChange} />} />
        <Route path='*' element={ <Error />} />
      </Routes>
    </div>
  );
}

export default App;
