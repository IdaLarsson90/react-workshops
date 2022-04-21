import './App.css';
import { Routes, Route } from 'react-router-dom';

import Events from './view/Events';
import Buy from './view/Buy';
import Tickets from './view/Tickets';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Events /> } />
        <Route path='/buy/:id' element={ <Buy /> } />
        <Route path='/tickets/:id' element={ <Tickets /> } />
      </Routes>
    </div>
  );
}

export default App;
