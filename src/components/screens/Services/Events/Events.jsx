import meeting from "./../../../../media/meetings.jpg";
import parties from "../../../../media/parties.jpg";
import weddings from "../../../../media/weddings.jpg";
import './Events.scss'

const Events = () => {
    return (
        <section className="Events">
            <div className="container">
                <h1>Мероприятия</h1>
                <div className="right-block">
                    <div><img src={meeting} alt="встречи" /></div>
                </div>
                <div className="right-block">
                    <div><img src={parties} alt="вечеринки" /></div>
                </div>
                <div className="right-block">
                    <div><img src={weddings} alt="свадьбы" /></div>
                </div>
            </div>
        </section>
    );
}

export default Events;