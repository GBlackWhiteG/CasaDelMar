import './Contacts.scss';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import back from '../../media/contacts-picture.png'

const Contacts = () => {
  return (
    <section className='Contacts'>
      <div className='container'>
        <img src={back}/>
        <div className='container__Contacts'>
          <div className='test'>
            <div className='block__Contacts'>
              <YMaps>
                <Map className="map" defaultState={{ center: [56.846763, 60.615923], zoom: 16 }} />
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
    </section>
  );
}

export default Contacts;