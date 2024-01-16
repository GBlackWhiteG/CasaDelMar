import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import roomsInfo from "../../services/importPicturesInfo"
import 'react-calendar/dist/Calendar.css'
import './Reservation.scss'

const Reservation = () => {
    const [calendarValue, onChangeCalendar] = useState(new Date());
    const [showDoubleView, setShowDoubleView] = useState(true);
    const tileDisabled = ({ date }) => {
        const startDate = new Date(2024, 0, 23);
        const endDate = new Date(2024, 0, 25);
    
        return date >= startDate && date <= endDate;
    };
    
    useEffect(() => {
        const handleResize = () => {
          setShowDoubleView(window.innerWidth >= 768);
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <section className="Reservation">
            <div className="container">
                <div className="calendar-block">
                    <h2>Бронирование</h2>
                    <Calendar
                        className="calendar"
                        onChange={onChangeCalendar}
                        value={calendarValue}
                        selectRange={true}
                        showDoubleView={showDoubleView}
                        minDate={new Date()}
                        tileDisabled={tileDisabled}
                        prev2Label={null}
                        next2Label={null}
                    />
                </div>
                <div className="avialable-rooms">
                    <h3>Доступные комнаты</h3>
                    <ul className="items">
                        {roomsInfo.map((room, index) => (
                            <li key={index} className="item">
                                <img src={room.src} alt='' />
                                <p>{room.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Reservation;