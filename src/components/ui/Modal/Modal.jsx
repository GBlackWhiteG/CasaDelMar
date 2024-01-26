import React from 'react';
import "./Modal.scss";

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? 'Modal' : 'Modal active'} onClick={() => setActive(true)}>
            <div className={active ? 'content__modal' : 'content__modal active-content__modal'} onClick={e => e.stopPropagation()}>
                <h4>Забронировать комнату</h4>
                <label>123</label>
                <input></input>
                <label>123</label>
                <input></input>
                <label>123</label>
                <input></input>
                <label>123</label>
                <input></input>
                <label>123</label>
                <input></input>
            </div>
        </div>
    );
};

export default Modal;