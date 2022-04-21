import './Tickets.css'

import events from '../assets/events.json'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function Tickets () {
    const {id} = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        const ticket = events.filter((event) => {
            if (event.id === parseInt(id)) {
                return event;
            }
        });
        console.log(ticket)
        setEvent(ticket[0]);
    }, [id])

    return(
        <section className='tickets'>
            <h2 className='tickets__heading'>Tack för din beställning</h2>
            <div className='tickets__what'>
                <p className='tickets__subheading'>What</p>
                <h3>{event.artist}</h3>
            </div>
            <div className='tickets__where'>
                <p className='tickets__subheading'>Where</p>
                <h3>{event.venue}</h3>
            </div>
            <section className='tickets__grid'>
                <div className='tickets__when'>
                    <p className='tickets__subheading'>When</p>
                    <h3>{event.date}</h3>
                </div>
                <div className='tickets__from'>
                    <p className='tickets__subheading'>From</p>
                    <h3>{event.from}</h3>
                </div>
                <div className='tickets__to'>
                    <p className='tickets__subheading'>To</p>
                    <h3>{event.to}</h3>
                </div>
            </section>
       </section>
    )
}