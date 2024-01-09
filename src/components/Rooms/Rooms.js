import React, { useState } from 'react';
import './Rooms.scss';
import Button from "../ui/Button/Button"
import roomsPictures from './importPictures';

const roomsNames = ["Делюкс номер", "Номер с частичным видом на океан", "Улучшенный номер", "Люкс «Санта-Моника»",
                    "Люкс с видом на тихий океан", "Номер «Пальмовая терраса»", "Пентхаус-люкс", "Номер с кроватью «King-Size»", "Номер с видом на океан"];

const Rooms = () => {
  const setBigImage = (i) => {
    setImage(i);
  }

  const [bigImage, setImage] = useState(0);

  return (
    <section className='Rooms'>
      <div className='container'>
        <div className='big-image__Rooms'>
          <img src={roomsPictures[bigImage]} alt=''/>
          <Button text="Подробнее" func={() => console.log(bigImage)}/>
        </div>
        <div className='content__Rooms'>
          <h2>Комнаты</h2>
          <ul className='rooms-block'>
            {roomsPictures.map((image, index) => (
              <li key={index} className='room' onClick={() => setBigImage(index)}>
                <img src={image} alt='' />
                <p>{roomsNames[index]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Rooms;