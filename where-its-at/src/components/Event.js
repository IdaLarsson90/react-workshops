import './Event.css'
import { useNavigate } from 'react-router-dom';

export default function Event (props) {
    const {eventInfo}  = props
    const navigate = useNavigate();
    
    function chooseEvent () {
        console.log(eventInfo);
        navigate('/buy/'+ eventInfo.id);
    }

    return (
        <section className='event' onClick={ chooseEvent }>
            <section className="date">
                <p>{eventInfo.date}</p>
            </section>
            <section className="eventInfo">
                <h3 className="eventInfo__artist" >{eventInfo.artist}</h3>
                <p className="eventInfo__venue">{eventInfo.venue}</p>
                <div className='row'>
                <p className="eventInfo__time">{`${eventInfo.from} - ${eventInfo.to}`}</p>
                    <p className="eventInfo__price">{eventInfo.price}</p>
                </div>
            </section>
        </section>
    )
}