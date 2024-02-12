import { Link } from 'react-router-dom';
import scrollTop from '../services/scrollToTop';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='container'>
        <div className='top-footer'>
          <div>
            <Link to="/" className='logo-wrapper footer-link' >
              <img className='logo' src="/images/casa-del-mar--logo.svg" alt='footer-logo' />
              <h3>Casa del Mar</h3>
            </Link>
          </div>
          <div className='footer-nav'>
            <h4>Навигация</h4>
            <Link to={"/rooms"} onClick={scrollTop} className='item__footer-nav'>Комнаты</Link>
            <Link to={"/offers"} onClick={scrollTop}  className='item__footer-nav'>Предложения</Link>
            <Link to={"/services"} onClick={scrollTop}  className='item__footer-nav'>Услуги</Link>
            <Link to={"/reservation"} onClick={scrollTop}  className='item__footer-nav'>Забронировать</Link>
          </div>
          <div className='footer-contacts'>
            <h4>Контакты</h4>
            <span>Отель Casa del Mar</span>
            <a href='tel:89154371523'>+7 (915) 437-15-23</a>
            <span>Краснодарский край</span>
            <span>Морской пер., 1 / 1Б, Сочи</span>
          </div>
        </div>
      </div>
      <div className='footer-bottom-container'>
        <div className='container'>
          <div className='bottom-footer'> 
            <span>© Все права защищены</span>
            <a href='tel:88622124315'>+7 (8622) 12-43-15</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;