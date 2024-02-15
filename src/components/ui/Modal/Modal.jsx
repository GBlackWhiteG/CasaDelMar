import React, { useState } from 'react';
import "./Modal.scss";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const reservateRoom = async (id, dates, fullname, email, phoneNumber, adultsCount, childrenCount) => {
    const request = {
        fullname: fullname,
        email: email,
        phoneNumber: phoneNumber, 
        adultsCount: adultsCount,
        childrenCount: childrenCount,
        startTime: String(dates[0].toUTCString()),
        endTime: String(dates[1].toUTCString()),
        roomID: id
    }

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(request)
    };

    const response = await fetch("https://localhost:7070/api/reservation/add", options);
    if (response.ok) {
        return await response.json();
    }

    return [];
}

const Modal = ({active, setActive, roomID, dates, adults, children}) => {
    const [phoneNumber, setPhoneNumber] = useState();

    const handelPhoneChange = (value) => {
        setPhoneNumber(value);
    }

    const [inputName, setName] = useState("");
    const [inputEmail, setEmail] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className={active ? 'Modal' : 'Modal active'} onClick={() => setActive(true)}>
            <form className={active ? 'content__modal' : 'content__modal active-content__modal'} onSubmit={reservateRoom.bind(this, roomID, dates, inputName, inputEmail, phoneNumber, adults, children)} onClick={e => {e.stopPropagation();}}>
                <h4>Забронировать комнату</h4>
                <div className='row-item'>
                    <div className='inputs-item'>
                        <span className='dates-subtitle'>Заезд</span>
                        <span>{dates[0].toLocaleDateString()}</span>
                    </div>
                    <div className='inputs-item'>
                        <span className='dates-subtitle'>Выезд</span>
                        <span>{dates[1].toLocaleDateString()}</span>
                    </div>
                </div>
                <div className='row-item'>
                    <span>Взрослые: {adults}</span>
                    <span>Дети: {children}</span>
                </div>
                <div className="inputs-item">
                    <label>ФИО</label>
                    <input
                        type='text'
                        value={inputName}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="inputs-item">
                    <label>Почта</label>
                    <input
                        type='email'
                        value={inputEmail}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="inputs-item">
                    <label>Номер телефона</label>
                    <PhoneInput 
                        value={phoneNumber}
                        onChange={handelPhoneChange}
                        countrySelectComponent={({ country, onCountryChange }) => null}
                    />
                </div>
                <div className="checkbox-block">
                    <input type='checkbox' id="data" required />
                    <label htmlFor="data">Я согласен на обработку моих персональных данных</label>
                </div>
                <div><input type='submit' className='submit-button' value="Отправить" /></div>
            </form>
        </div>
    );
};

export default Modal;