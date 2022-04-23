import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Home from './view/Home';
import AddCard from './view/AddCard'
import Card from './components/Card';

function App() {
  const navigate = useNavigate();
  

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("")
  const [validThru, setValidThru] = useState("")
  const [cardID, setCardID] = useState("")
  const [vendor, setVendor] = useState("")
  const [ccv, setCcv] = useState ("")
  const [activeCard, setActiveCard] = useState({});

  const [cardsArr, setCardsArr] = useState([]);
  console.log(cardsArr)

  useEffect( ()=>{
    const localSt = localStorage.getItem('cardsArr')
    const data = JSON.parse(localSt)
    
    setCardsArr(data)
    console.log(cardsArr)
  }, []);

  // useEffect( ()=> {
  //   console.log(cardsArr)
    
  // }, [cardsArr])

  console.log(cardsArr)

  const cards = cardsArr.map ((card) => {
    return <Card cardInfo= { card } activateCard={activateCard} key= {card.id} />
})


function activateCard(cardInfo) {
  setActiveCard(cardInfo)
}

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
  localStorage.setItem('cardsArr', JSON.stringify(cardsArrCopy))
  setCardsArr(cardsArrCopy);
  navigate('/');
}

  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = { <Home cardsArr={cardsArr} cards={cards} activeCard= {activeCard} /> } />
        <Route path = '/addCard' element = { <AddCard handleChange={ handleChange } addCard={addCard}  /> } />
      </Routes>
    </div>
  );
}

export default App;
