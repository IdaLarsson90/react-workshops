import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Error from './views/Error';
import Products from './views/Products';

import Navbar from './components/Navbar';

/**
 * URL: / - Komponent: Home.js
 * URL: /om - Komponent: About.js
 */

function App() {
  

  return (
    <div className="App">
      <h1>Min sida</h1>
      <Navbar />
     <Routes>
       <Route path='/' element={ <Home />} />
       <Route path='/om' element={ <About />} />
       <Route path='/produkter' element={ <Products />} />
       <Route path='*' element={ <Error />} />
     </Routes>
    </div>
  );
}

export default App;
