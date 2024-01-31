import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import Button from "../../ui/Button/Button"
import Modal from "../../ui/Modal/Modal";
import 'react-calendar/dist/Calendar.css'
import './Reservation.scss'

const Reservation = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const [calendarValue, onChangeCalendar] = useState([today, tomorrow]);
    const dateText = ["Прибытие", "Убытие"];
    const [showDoubleView, setShowDoubleView] = useState(true);
    const [modalActive, setModalActive] = useState(true);
    const [roomsInfo, setRoomsInfo] = useState([{
        "id": 1,
        "photoURL": "/rooms/delux.jpg",
        "name": "Делюкс номер",
        "description": "Резиновые утки для серфинга и ночные истории с мраморными ванными комнатами и кроватями с балдахином - даже роскошь иногда требует перерыва для игр.",
        "price": 55767,
    }
]);

    const getRoomsInfo = () => {
        findAvialableRooms().then((rooms) => {
            setRoomsInfo(rooms);
        });
    }

    const openModal = (id) => {
        setModalActive(false)
    }

    /*
    const tileDisabled = ({ date }) => {
        const startDate = new Date(2024, 0, 23);
        const endDate = new Date(2024, 0, 25);
    
        return date >= startDate && date <= endDate;
    };
    */
    
    useEffect(() => {
        const handleResize = () => {
          setShowDoubleView(window.innerWidth > 1200);
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const findAvialableRooms = async () => {
        const dates = {
            startTime: String(calendarValue[0]),
            endTime: String(calendarValue[1])
        }

        const headers = new Headers();
        headers.set("Content-Type", "application/json");
        const options = {
            method: "GET",
            headers: headers,
            //body: JSON.stringify(dates)
        };

        const response = await fetch("https://localhost:7070/api/reservation/list", options);
        if (response.ok) {
            return await response.json();
        }

        return [];
    }

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
                            //tileDisabled={tileDisabled}
                            prev2Label={null}
                            next2Label={null}
                        />
                    </div>
                    <div className="input-block">
                        <h2>Бронирование</h2>
                        <form>
                            <div className="children input__Reservation">
                                <label className="input-title">Взрослые</label>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="adult input__Reservation">
                                <label className="input-title">Дети</label>
                                <select>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </form>
                        
                        <div className="input-date-wrapper">
                            {calendarValue.map((date, index) => (
                                <div key={index}>
                                    <span className="input-title">{dateText[index]}</span>
                                    <span className="input-date">{date.toLocaleDateString()}</span>
                                </div>
                            ))}
                        </div>

                        <button className="available-button" onClick={getRoomsInfo} disabled={Object.keys(calendarValue).length < 2}>Доступные комнаты</button>
                    </div>
                </div>
                <div className="avialable-rooms">
                    <h3>Доступные комнаты</h3>
                    <ul className="items">
                        {roomsInfo.map(room => (
                            <li key={room.id} className="item">
                                <div><img src={room.photoURL} alt='' /></div>
                                <div className="item-content"> 
                                    <h4>{room.name}</h4>
                                    <div className="price-block">
                                        <span className="price-wrapper">от: <span className="price">{room.price} ₽</span></span>
                                        <span className="notice">Без учета налогов</span>
                                    </div>
                                    <div className="reservation-button" onClick={openModal.bind(room.id)}><Button link="" text={"Забронировать"} /></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Modal active={modalActive} setActive={setModalActive} />
            </div>
        </section>
    );
}

export default Reservation;