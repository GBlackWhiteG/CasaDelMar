import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import blockAnimation from '../../../services/blockAnimation';
import './Rooms.scss';
import Button from "../../../ui/Button/Button"
import roomsInfo from '../../../services/importPicturesInfo'
import scrollTop from "../../../services/scrollToTop"

const Rooms = () => {
  const [bigImage, setImage] = useState(1);

  const setBigImage = useCallback((i) => {
    setImage(i);
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={blockAnimation}
      transition={{
        ease: [.19, .58, .64, .93],
        duration: 0.4,
      }}
      className='Rooms'
    >
      <div className='container'>
        <div className='big-image__Rooms'>
          <img src={roomsInfo[bigImage]["src"]} alt=''/>
          <div onClick={scrollTop}><Button text="Подробнее" link={`rooms/${bigImage}`} /></div>
        </div>
        <div className='content__Rooms'>
          <h2>Комнаты</h2>
          <ul className='rooms-block'>
            {roomsInfo.map((room, index) => (
              <li key={index} className={bigImage !== index ? "room" : "room active"} onClick={setBigImage.bind(this, index)}>
                <img src={room.src} alt='' />
                <p>{room.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Rooms;