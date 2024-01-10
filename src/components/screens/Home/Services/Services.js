import './Services.scss';
import eat from "../../../../media/eat.jpg";
import events from "../../../../media/events.jpg";
import where from "../../../../media/where-are-we.jpg";

const Services = () => {
  return (
    <section className='Services'>
      <div className='container'>
        <h2>Услуги и удобства</h2>
        <div className='items__Services'>
          <div className='item__Services'>
            <img src={eat} alt='Ешь и развлекайся' />
            <div className='item-bg'></div>
            <div className='item-wrapper'>
              <h4>Ешь и развлекайся</h4>
              <p>Вам не обязательно покидать наш роскошный отель в Санта-Монике, чтобы насладиться фантастическим рестораном морепродуктов в Лос-Анджелесе и вечерней живой музыкой.</p>
              <a className='more-button'>Подробнее</a>
            </div>
          </div>
          <div className='item__Services'>
            <img src={events} alt='Планировать мероприятия' />
            <div className='item-bg'></div>
            <div className='item-wrapper'>
              <h4>Планировать мероприятия</h4>
              <p>Почему бы не включить Тихий океан в свою следующее мероприятия? Вы можете спланировать встречу, вечеринку, помолвку или свадьбу где угодно, вы все равно выберете отель Casa del Mar в Лос-Анджелесе, Калифорния.</p>
              <a className='more-button'>Подробнее</a>
            </div>
          </div>
          <div className='item__Services'>
            <img src={where} alt='Где мы процветаем' />
            <div className='item-bg'></div>
            <div className='item-wrapper'>
              <h4>Где мы процветаем</h4>
              <p>Если есть выбор, почему бы не остановиться в отеле, который предлагает уроки серфинга и йогу на песке?</p>
              <a className='more-button'>Подробнее</a>
            </div>
          </div>
        </div>
        <p>Пожалуйста, обратите внимание, что некоторые из представленных услуг и удобств могут быть доступны только при определенных условиях или требовать предварительного бронирования. Для более подробной информации или заказа дополнительных услуг, пожалуйста, свяжитесь с нашими специалистами по телефону или через форму обратной связи на сайте. Мы стремимся предоставить нашим гостям наилучший отдых, и ваш комфорт является нашим приоритетом.</p>
      </div>
    </section>
  );
}

export default Services;