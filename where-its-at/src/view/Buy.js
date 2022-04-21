import './Buy.css'

import events from '../assets/events.json'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Buy () {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(typeof id);
    const [event, setEvent] = useState({});

    useEffect(() => {
        const ticket = events.filter((event) => {
            if (event.id === parseInt(id)) {
                return event;
            }
        });
        setEvent(ticket[0]);
    }, [id])
    

    return(
        <section className='buy'>
            <h2 className='buy__heading'>You are about to score some tickets to</h2>
            <h3 className='buy__artist'>{event.artist}</h3>
            <div className='buy__time'>
                <p>{event.date}</p>
                <p>kl</p>
                <p>{event.from} - {event.to}</p>
            </div>
            <div className='buy__venue'>
                <p>@</p>
                <p>{event.venue}</p>
            </div>
            <p className='buy__price'>{event.price}</p>
            <button className='buy__button' onClick={() => { navigate('/tickets/'+ id);}}>Beställ</button>
        </section>
    )
}