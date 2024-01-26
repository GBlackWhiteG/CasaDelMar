import { Link } from 'react-router-dom';
import { useState } from 'react';
import roomsInfo from '../../../services/importPicturesInfo';
import scrollTop from '../../../services/scrollToTop';
import "./Main.scss";

const Main = () => {
    const [hitRoom, selectHitRoom] = useState(1);

    return (
        <section className="Main">
            <div className="container">
                <div className="items">
                    {roomsInfo.map((room, index) => (
                        <li key={index} onClick={scrollTop} className={index === hitRoom ? "item hit-room" : "item"}>
                            <Link to={`./${index}`} className='item-wrapper'>
                                <div className='image-wrapper'><img src={room.src} alt='room'/></div>
                                <div className='item-content'>
                                    <h3>{room.name}</h3>
                                    <div className='properties-wrapper'>
                                        <ul className='properties-items'>
                                            <li className='item__properties center-item'>
                                                <span className='property'>1</span>
                                                <span className='property-text'>спальня</span>
                                            </li>
                                            <li className='item__properties'>
                                                <span className='property'>37</span>
                                                <span className='property-text'>кв. м</span>
                                            </li>
                                            <li className='item__properties'>
                                                <span className='property'>1</span>
                                                <span className='property-text'>кровать</span>
                                            </li>
                                        </ul>
                                        <span className='price-wrapper'>от: <span className='price'>55767 ₽</span></span>
                                    </div>
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