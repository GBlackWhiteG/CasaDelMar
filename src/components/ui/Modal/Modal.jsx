import React, { useState } from 'react';
import "./Modal.scss";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const reservateRoom = async (e, id, dates, fullname, email, phoneNumber, adultsCount, childrenCount, toggleStatus, toggleResonseStatus) => {
    e.preventDefault();

    toggleStatus(true);
    
    const request = {
        roomID: id,
        fullname: fullname,
        email: email,
        phoneNumber: phoneNumber, 
        adultsCount: adultsCount,
        childrenCount: childrenCount,
        startTime: String(dates[0].toUTCString()),
        endTime: String(dates[1].toUTCString())
    }

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(request)
    };

    const response = await fetch("https://a25288-b2fa.u.d-f.pw/api/reservation/add", options);
    if (response.ok) {
        toggleResonseStatus("ok");
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return await response.json();
    }

    toggleResonseStatus("bad");
    return [];
}

const answerInfo = {
    'wait': {
        'src': "/svg/wait.svg",
        'text': "Пожалуйста подождите"
    },
    'ok': {
        'src': "/svg/ok.svg",
        'text': "Окно будет закрыто через 3 секунды"
    },
    'bad': {
        'src': "/svg/bad.svg",
        'text': "Окно будет закрыто через 3 секунды"
    }
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

    const [waitStatus, changeStatus] = useState(false);

    const toggleStatus = (status) => {
        changeStatus(status);
    }

    const [resonseStatus, changeResonseStatus] = useState("wait");

    const toggleResonseStatus = (answer) => {
        changeResonseStatus(answer);
    }

    return (
        <div className={active ? 'Modal' : 'Modal active'} onClick={() => {setActive(true); toggleStatus(false); toggleResonseStatus('wait')}}>
            <form className={active ? 'content__modal' : 'content__modal active-content__modal'} onSubmit={(e) => reservateRoom(e, roomID, dates, inputName, inputEmail, phoneNumber, adults, children, toggleStatus, toggleResonseStatus)} onClick={e => e.stopPropagation()}>
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
                    <label>ФИО*</label>
                    <input
                        type='text'
                        value={inputName}
                        onChange={handleNameChange}
                        maxLength={255}
                        minLength={8}
                        required
                    />
                </div>
                <div className="inputs-item">
                    <label>Почта*</label>
                    <input
                        type='email'
                        value={inputEmail}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="inputs-item">
                    <label>Номер телефона*</label>
                    <PhoneInput 
                        value={phoneNumber}
                        onChange={handelPhoneChange}
                        countrySelectComponent={({ country, onCountryChange }) => null}
                        required
                    />
                </div>
                <div className="checkbox-block">
                    <input type='checkbox' id="data" required />
                    <label htmlFor="data">Я согласен на обработку моих персональных данных</label>
                </div>
                <div><input type='submit' className='submit-button' value="Отправить" /></div>

                <div className={waitStatus ? 'wait-page wait-page__active' : 'wait-page'}>
                    <img src={answerInfo[resonseStatus]['src']} />
                    <span className='response-answer'>{answerInfo[resonseStatus]['text']}</span>
                </div>
            </form>
        </div>
    );
};

export default Modal;