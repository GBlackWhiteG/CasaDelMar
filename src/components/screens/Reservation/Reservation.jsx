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
    const dateText = ["Заезд", "Выезд"];
    const [showDoubleView, setShowDoubleView] = useState(true);
    const [modalActive, setModalActive] = useState(true);
    const [roomsInfo, setRoomsInfo] = useState([]);
    const [roomID, setRoomID] = useState(1);
    const [adultsCount, setAdultsCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);

    const adutlsHandle = (e) => {
        setAdultsCount(e.target.value);
    }

    const childrenHandle = (e) => {
        setChildrenCount(e.target.value);
    }

    const getRoomsInfo = () => {
        findAvialableRooms().then((rooms) => {
            setRoomsInfo(rooms);
        });
    }

    useEffect(() => {
        getRoomsInfo();
    }, []);

    const openModal = (id) => {
        setRoomID(id);
        setModalActive(false);
    }
    
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
        const request = {
            startTime: String(calendarValue[0].toUTCString()),
            endTime: String(calendarValue[1].toUTCString())
        }

        const headers = new Headers();
        headers.set("Content-Type", "application/json");
        const options = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(request)
        };

        const response = await fetch("https://localhost:7070/api/room/aviable-list", options);
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
                                <select value={adultsCount} onChange={adutlsHandle}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="adult input__Reservation">
                                <label className="input-title">Дети</label>
                                <select value={childrenCount} onChange={childrenHandle}>
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
                                    <div className="reservation-button" onClick={openModal.bind(this, room.id)}><Button link="" text={"Забронировать"} /></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Modal active={modalActive} setActive={setModalActive} roomID={roomID} dates={calendarValue} adults={adultsCount} children={childrenCount} />
            </div>
        </section>
    );
}

export default Reservation;