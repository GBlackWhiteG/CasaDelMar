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

    const findAvialableRooms = async () => {
        const dates = {
            startTime: String(calendarValue[0]),
            endTime: String(calendarValue[1])
        }

        const headers = new Headers();
        headers.set("Content-Type", "application/json");
        const options = {
            mode: "no-cors",
            method: "GET",
            headers: headers,
            //body: JSON.stringify(dates)
        };

        const response = await fetch("https://localhost:7070/api/reservation/list");
        if (response.ok) {
            console.log(response.body);
        }
        else {
            console.log("Ошибка");
        }
    }
    
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
                    <div>
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
                    <div className="input-block">
                        <h2>Бронирование</h2>
                        <form>
                            <div className="children input__Reservation">
                                <label>Взрослые</label>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="adult input__Reservation">
                                <label>Дети</label>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </form>
                        <button onClick={findAvialableRooms} disabled={Object.keys(calendarValue).length < 2}>Доступные комнаты</button>
                    </div>
                </div>
                <div className="avialable-rooms">
                    <h3>Доступные комнаты</h3>
                    <ul className="items">
                        {roomsInfo.map((room, index) => (
                            <li key={index} className="item">
                                <img src={room.src} alt='' />
                                <div className="item-content"> 
                                    <h4>{room.name}</h4>
                                    <div className="price-block">
                                        <span className="price-wrapper">от: <span className="price">{room.price} ₽</span></span>
                                        <span className="notice">Без учета налогов</span>
                                    </div>
                                    <div className="reservation-button">Забронировать</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Reservation;