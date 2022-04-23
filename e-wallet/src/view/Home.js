import Top from '../components/Top'
import Card from '../components/Card'

import { useNavigate } from 'react-router-dom'

import './Home.css'
import CardStack from '../components/CardStack'


export default function Home (props) {
    const {cardsArr, cards, activeCard} = props
    const navigate = useNavigate();

 
 

    return(
        <section className='home'>
            <Top heading="E-wallet" subHeading = "active card"/>
            <Card cardInfo = {activeCard} />
            <CardStack cardsArr={ cardsArr } cards={cards} />
            <button className='button button--light' onClick={()=> {navigate('/addCard')}}>Add a new card</button>
        </section>
    )
}