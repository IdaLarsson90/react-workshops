import Top from '../components/Top'
import Card from '../components/Card'

import { useNavigate } from 'react-router-dom'

import './Home.css'
import CardStack from '../components/CardStack'
import { useState } from 'react'

export default function Home (props) {
    const {cardsArr} = props
    const navigate = useNavigate();

    function activateCard() {
        // console.log(cardInfo.id)
        const cards = cardsArr.map ((card) => {

            return card
        })
        console.log(cards)

        cardsArr.forEach(card => {
            console.log(card)
        });
    }
   console.log(cardsArr)
    return(
        <section className='home'>
            <Top heading="E-wallet" subHeading = "active card"/>
            <Card />
            <CardStack cardsArr={ cardsArr } activateCard={activateCard}  />
            <button className='button button--light' onClick={()=> {navigate('/addCard')}}>Add a new card</button>
        </section>
    )
}