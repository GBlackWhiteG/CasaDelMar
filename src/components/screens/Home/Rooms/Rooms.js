import React, { useCallback, useState } from 'react';
import './Rooms.scss';
import Button from "../../../ui/Button/Button"
import roomsInfo from '../../../services/importPicturesInfo'

window.localStorage.roomIndex = 1;

const Rooms = () => {
  const [bigImage, setImage] = useState(window.localStorage.roomIndex);

  const setBigImage = useCallback((i) => {
    window.localStorage.roomIndex = i;
    setImage(i);
  }, []);

  return (
    <section className='Rooms'>
      <div className='container'>
        <div className='big-image__Rooms'>
          <img src={roomsInfo[bigImage]["src"]} alt=''/>
          <Button text="Подробнее" link={`rooms/${bigImage}`} />
        </div>
        <div className='content__Rooms'>
          <h2>Комнаты</h2>
          <ul className='rooms-block'>
            {roomsInfo.map((room, index) => (
              <li key={index} className={bigImage !== index ? "room" : "room active"} onClick={() => setBigImage(index)}>
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

export default Rooms;