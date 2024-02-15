import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { motion } from 'framer-motion';
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
        <div className='image-wrapper'><img src="/images/contacts-picture.png"/></div>
        <div className='container__Contacts'>
          <div className='wrapper__Contacts'>
            <div className='block__Contacts'>
              <YMaps>
                <Map className="map" defaultState={{ center: [43.576312, 39.723957], zoom: 16 }} >
                  <Placemark defaultGeometry={[43.576312, 39.723957]} />
                </Map>
              </YMaps>
              <div className='content__Contacts'>
                <h2>Контакты</h2>
                <span>Отель Casa del Mar</span>
                <a href='tel:89154371523'>+7 (915) 437-15-23</a>
                <span>Краснодарский край</span>
                <span>Морской пер., 1 / 1Б, Сочи</span>
                <span className='subtitle'>Бронирование:</span>
                <a href='tel:88622123215'>+7 (8622) 12-43-15</a>
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