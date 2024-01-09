import './Services.scss';
import eat from "../../media/eat.jpg";
import events from "../../media/events.jpg";
import where from "../../media/where-are-we.jpg";

const Services = () => {
  return (
    <section className='Services'>
      <div className='container'>
        <h2>Услуги и удобства</h2>
        <div className='images__Services'>
          <div className='eat'><img src={eat} alt='Ешь и развлекайся' /></div>
          <div className='events'><img src={events} alt='Планировать мероприятия' /></div>
          <div className='where'><img src={where} alt='Где мы процветаем' /></div>
        </div>
        <p>Пожалуйста, обратите внимание, что некоторые из представленных услуг и удобств могут быть доступны только при определенных условиях или требовать предварительного бронирования. Для более подробной информации или заказа дополнительных услуг, пожалуйста, свяжитесь с нашими специалистами по телефону или через форму обратной связи на сайте. Мы стремимся предоставить нашим гостям наилучший отдых, и ваш комфорт является нашим приоритетом.</p>
      </div>
    </section>
  );
}

export default Services;