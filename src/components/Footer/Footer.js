import { Link } from 'react-router-dom';
import logo from '../../media/casa-del-mar--logo.svg';
import scrollTop from '../services/scrollToTop';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='container'>
        <div className='top-footer'>
          <div>
            <Link to="/" className='logo-wrapper footer-link' >
              <img className='logo' src={logo} alt='footer-logo' />
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
            <span>Hotel Casa del Mar</span>
            <a href='tel:3105815533'>(310) 581-5533</a>
            <span>1910 Ocean Way</span>
            <span>Santa Monica, California 90405 USA</span>
          </div>
        </div>
      </div>
      <div className='footer-bottom-container'>
        <div className='container'>
          <div className='bottom-footer'> 
            <span>© Все права защищены</span>
            <a href='tel:8448801077'>(844) 880-1077</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;