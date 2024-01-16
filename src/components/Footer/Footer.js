import { Link } from 'react-router-dom';
import logo from '../../media/casa-del-mar--logo.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <section className='Footer'>
      <div className='container'>
        <div className='top-footer'>
          <div>
            <Link to="/" className='logo-wrapper footer-link' >
              <img className='logo' src={logo} alt='footer-logo' />
              <h3>Casa del Mar</h3>
            </Link>
          </div>
        </div> 
        <div className='bottom-footer'> 
          
        </div>
      </div>
    </section>
  );
}

export default Footer;