import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




import Home from './view/Home';
import AddCard from './view/AddCard'

function App() {
  const navigate = useNavigate();
  

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("")
  const [validThru, setValidThru] = useState("")
  const [cardID, setCardID] = useState("")
  const [vendor, setVendor] = useState("")
  const [ccv, setCcv] = useState ("")


  const [cardsArr, setCardsArr] = useState([]);

function handleChange (event) {
 
  switch(event.target.name){
    case "cardNumber": 
      setCardNumber(event.target.value);
      break;
    case "name":
      setCardName(event.target.value);
      break;
    case "valid":
      setValidThru(event.target.value);
      break;
    case "vendor":
      {
        switch (event.target.value){
          case "ninjaBank":
            setVendor(event.target.value)
            break;
          case "bitcoin":
            setVendor(event.target.value)
            break;
          case "blockChain":
            setVendor(event.target.value)
            break;
          case "evilCorp":
            setVendor(event.target.value)
            break;
        }
      }
  } 


}


function addCard (event) {
  event.preventDefault();
  const cardsArrCopy = [...cardsArr];
  
  const newCard = {
    cardNumber: cardNumber,
    name: cardName,
    valid: validThru,
    ccv: ccv,
    vendor: vendor, 
    id: cardsArr.length,
  }
  cardsArrCopy.push(newCard);
  setCardsArr(cardsArrCopy);
  navigate('/');
}

  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = { <Home cardsArr={cardsArr}  /> } />
        <Route path = '/addCard' element = { <AddCard handleChange={ handleChange } addCard={addCard}  /> } />
      </Routes>
    </div>
  );
}

export default App;
