import './Card.css'
import { useEffect, useState } from 'react';

import darkChip from '../assets/chip-dark.svg'
import lightChip from '../assets/chip-light.svg'
import bitcoinLogo from '../assets/vendor-bitcoin.svg'
import ninjaBankLogo from '../assets/vendor-ninja.svg'
import evilLogo from '../assets/vendor-evil.svg'
import blockChainLogo from '../assets/vendor-blockchain.svg'

export default function Card ( props ) {
    const {cardInfo, activateCard, index } = props;
    const [cardColor, setCardColor] = useState("");
    const [logo, setLogo] = useState(bitcoinLogo);
   
    useEffect(()=> { 
        if(cardInfo.vendor == 'ninjaBank') {
            setCardColor(`linear-gradient(248.3deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%), #222222`);
            setLogo(ninjaBankLogo)
        } else if(cardInfo.vendor == 'bitcoin') {
            setCardColor(`linear-gradient(248.04deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 99.07%), #FFAE34`);
            setLogo(bitcoinLogo)
        } else if(cardInfo.vendor == 'blockChain') {
            setCardColor(`linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, rgba(0, 0, 0, 0) 100%), #8B58F9`)
            setLogo(blockChainLogo)
        } else if(cardInfo.vendor == 'evilCorp') {
            setCardColor(`linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #F33355`)
            setLogo(evilLogo)
        } else {
            setCardColor(`linear-gradient(248.3deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%), #D0D0D0`)
            setLogo(bitcoinLogo)
        }
    }, [cardInfo.vendor]);
       
    return(
        <article className="card " style={{background: cardColor}} onClick={() => { activateCard(cardInfo, index) }}>
            <section className='card__icons'>
                <img className='card__chip' src={cardInfo.vendor == "bitcoin" || cardInfo.vendor == "null" ? darkChip : lightChip} alt="chip-icon" />
                <img className='card__logo' src={logo} alt="logo" />
            </section>
            <p className='card__number' style={cardInfo.vendor == "bitcoin" || cardInfo.vendor == "null" ? {color: '#000'} : {color: '#fff'}}> { cardInfo.cardNumber }</p>
            <section className='space--between'>
                <h3 className='card__heading' style={cardInfo.vendor == "bitcoin" || cardInfo.vendor == "null" ? {color: '#000'} : {color: '#fff'}}>Cardholder Name</h3>
                <h3 className='card__heading' style={cardInfo.vendor == "bitcoin" || cardInfo.vendor == "null" ? {color: '#000'} : {color: '#fff'}} >Valid Thru</h3>
            </section>
            <section className='space--between'>
                <p className='card__info' style={cardInfo.vendor == "bitcoin" || cardInfo.vendor == "null" ? {color: '#000'} : {color: '#fff'}}> { cardInfo.name }</p>
                <p className='card__info' style={cardInfo.vendor == "bitcoin" || cardInfo.vendor == "null" ? {color: '#000'} : {color: '#fff'}}> { cardInfo.valid }</p>
            </section>
        </article> 
    )
}