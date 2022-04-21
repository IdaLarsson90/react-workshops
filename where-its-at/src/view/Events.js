import './Events.css'
import events from '../assets/events.json'
import Event from "../components/Event"

export default function Events () {
    const eventItem = events.map((event) => {
        return <Event eventInfo = {event} key = {event.id}/>
    });

    return(
        <section className='events__container'>
            <h1>Events</h1>
            { eventItem }
        </section>
    )
}