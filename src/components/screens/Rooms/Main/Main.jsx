import { Link } from 'react-router-dom';
import { useState } from 'react';
import roomsInfo from '../../../services/importPicturesInfo'
import Button from "../../../ui/Button/Button"
import "./Main.scss"

const Main = () => {
    const [hitRoom, selectHitRoom] = useState(1);

    return (
        <section className="Main">
            <div className="container">
                <div className="items">
                    {roomsInfo.map((room, index) => (
                        <li key={index} className={index === hitRoom ? "item hit-room" : "item"}>
                            <Link to={`./${index}`} className='item-wrapper'>
                                <div className='image-wrapper'><img src={room.src} alt='room'/></div>
                                <div className='item-content'>
                                    <h3>{room.name}</h3>
                                    <ul className='properties-items'>
                                        <li className='item__properties'>
                                            <span className='property'>37</span>
                                            <span>кв. м</span>
                                        </li>
                                        <div className='item-line' />
                                        <li className='item__properties center-item'>
                                            <span className='property'>1</span>
                                            <span>спальня</span>
                                        </li>
                                        <div className='item-line' />
                                        <li className='item__properties'>
                                            <span className='property'>1</span>
                                            <span>кровать</span>
                                        </li>
                                    </ul>
                                    <Button className="item-button" text="Подробнее" />
                                </div>
                            </Link> 
                        </li>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Main;