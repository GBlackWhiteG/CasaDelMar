import { motion } from 'framer-motion';
import blockAnimation from '../../../services/blockAnimation';
import './Services.scss';
import { Link } from 'react-router-dom';
import scrollTop from '../../../services/scrollToTop';

const Services = () => {
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
      className='Services'
    >
      <div className='container'>
        <h2>Услуги и удобства</h2>
        <div className='items__Services'>
          <div className='item__Services'>
            <img src="/images/eat.jpg" alt='Ешь и развлекайся' />
            <div className='item-bg'></div>
            <div className='item-wrapper'>
              <h4>Ешь и развлекайся</h4>
              <p>Вам не обязательно покидать наш роскошный отель в Сочи, чтобы насладиться фантастическим рестораном морепродуктов и вечерней живой музыкой.</p>
              <div onClick={scrollTop}><Link to="/services" className='more-button'>Подробнее</Link></div>
            </div>
          </div>
          <div className='item__Services'>
            <img src="/images/events.jpg" alt='Планировать мероприятия' />
            <div className='item-bg'></div>
            <div className='item-wrapper'>
              <h4>Планировать мероприятия</h4>
              <p>Почему бы не включить Черное море в свою следующее мероприятия? Вы можете спланировать встречу, вечеринку, помолвку или свадьбу где угодно, вы все равно выберете отель Casa del Mar в Сочи.</p>
              <div onClick={scrollTop}><Link to="/services" className='more-button'>Подробнее</Link></div>
            </div>
          </div>
          <div className='item__Services'>
            <img src="/images/where-are-we.jpg" alt='Где мы процветаем' />
            <div className='item-bg'></div>
            <div className='item-wrapper'>
              <h4>Где мы процветаем</h4>
              <p>Если есть выбор, почему бы не остановиться в отеле, который предлагает уроки серфинга и йогу на песке?</p>
              <div onClick={scrollTop}><Link to="/services" className='more-button'>Подробнее</Link></div>
            </div>
          </div>
        </div>
        <p>Пожалуйста, обратите внимание, что некоторые из представленных услуг и удобств могут быть доступны только при определенных условиях или требовать предварительного бронирования. Для более подробной информации или заказа дополнительных услуг, пожалуйста, свяжитесь с нашими специалистами по телефону или через форму обратной связи на сайте. Мы стремимся предоставить нашим гостям наилучший отдых, и ваш комфорт является нашим приоритетом.</p>
      </div>
    </motion.section>
  );
}

export default Services;