import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { motion } from 'framer-motion';
import back from '../../../../media/contacts-picture.png'
import blockAnimation from '../../../services/blockAnimation';
import './Contacts.scss';

const Contacts = () => {
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
      className='Contacts'
    >
      <div className='container'>
        <div className='image-wrapper'><img src={back}/></div>
        <div className='container__Contacts'>
          <div className='wrapper__Contacts'>
            <div className='block__Contacts'>
              <YMaps>
                <Map className="map" defaultState={{ center: [34.006716, -118.490716], zoom: 16 }} >
                  <Placemark defaultGeometry={[34.006716, -118.490716]} />
                </Map>
              </YMaps>
              <div className='content__Contacts'>
                <h2>Контакты</h2>
                <span>Hotel Casa del Mar</span>
                <a href='tel:3105815533'>(310) 581-5533</a>
                <span>1910 Ocean Way</span>
                <span>Santa Monica, California 90405 USA</span>
                <span className='subtitle'>Бронирование:</span>
                <a href='tel:8448801077'>(844) 880-1077</a>
                <a href='email:reservations@hotelcasadelmar.com'>reservations@hotelcasadelmar.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contacts;