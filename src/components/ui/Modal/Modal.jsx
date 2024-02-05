import React from 'react';
import "./Modal.scss";

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? 'Modal' : 'Modal active'} onClick={() => setActive(true)}>
            <form className={active ? 'content__modal' : 'content__modal active-content__modal'} onClick={e => e.stopPropagation()}>
                <h4>Забронировать комнату</h4>
                <div className="inputs-item">
                    <label>ФИО</label>
                    <input type='text' required />
                </div>
                <div className="inputs-item">
                    <label>Почта</label>
                    <input type='email' required />
                </div>
                <div className="inputs-item">
                    <label>Номер телефона</label>
                    <input type='tel' required />
                </div>
                <div className="checkbox-block">
                    <input type='checkbox' id="data" required />
                    <label htmlFor="data">Я согласен на обработку моих персональных данных</label>
                </div>
                <div><input className='submit-button' type="submit" value="Отправить" /></div>
            </form>
        </div>
    );
};

export default Modal;