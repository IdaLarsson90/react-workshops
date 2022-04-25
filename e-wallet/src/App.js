import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Home from './view/Home';
import AddCard from './view/AddCard';
import Card from './components/Card';

function App() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [validThru, setValidThru] = useState("");
  const [vendor, setVendor] = useState("");
  const [ccv, setCcv] = useState ("");
  const [cardIndex, setCardIndex] = useState ();
  const [activeCard, setActiveCard] = useState({});
  const [cardsArr, setCardsArr] = useState([]);
  
  const emptyCard = {
    cardNumber: "XXXX XXXX XXXX XXXX",
    name: "Firstname Lastname",
    valid: "MM/YY",
    ccv: "ccv",
    vendor: "null", 
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cardsArr'));
    if (data) {
      setCardsArr(data);
    }
  }, []);

  const cards = cardsArr.map ((card, index) => {
      return <Card cardInfo= { card } activateCard={activateCard} index={index} key= {index} />
  });

  function activateCard(cardInfo, index) {
    setCardIndex(index);
    setActiveCard(cardInfo);
  }

  function removeCard() {
    const cardsArrCopy = [...cardsArr];
    cardsArrCopy.splice(cardIndex, 1);
    localStorage.setItem('cardsArr', JSON.stringify(cardsArrCopy));
    setCardsArr(cardsArrCopy);
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
      case "ccv":
      setCcv(event.target.value);
      break;
      case "vendor":
        {
          switch (event.target.value){
            case "ninjaBank":
              setVendor(event.target.value);
              break;
            case "bitcoin":
              setVendor(event.target.value);
              break;
            case "blockChain":
              setVendor(event.target.value);
              break;
            case "evilCorp":
              setVendor(event.target.value);
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
    };

    cardsArrCopy.push(newCard);
    localStorage.setItem('cardsArr', JSON.stringify(cardsArrCopy));
    setCardsArr(cardsArrCopy);
    navigate('/');
  }

  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = { <Home cards={cards} activeCard= {activeCard} removeCard={removeCard} /> } />
        <Route path = '/addCard' element = { <AddCard handleChange={ handleChange } addCard={addCard} emptyCard={emptyCard}  /> } />
      </Routes>
    </div>
  );
}

export default App;
