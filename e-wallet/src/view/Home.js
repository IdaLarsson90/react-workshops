import './Home.css';
import CardStack from '../components/CardStack';
import Top from '../components/Top';
import Card from '../components/Card';

import { useNavigate } from 'react-router-dom';

export default function Home (props) {
    const {cards, activeCard, removeCard} = props;
    const navigate = useNavigate();

    return(
        <section className='home'>
            <Top heading="E-wallet" subHeading = "active card"/>
            <button className='button--remove' onClick={()=>{removeCard()}}> Ta bort kort </button>
            <Card cardInfo = {activeCard} />
            <CardStack cards={cards} />
            <button className='button button--light' onClick={()=> {navigate('/addCard')}}>Add a new card</button>
        </section>
    );
}