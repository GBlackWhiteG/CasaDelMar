import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import scrollTop from '../services/scrollToTop'
import './Nav.scss';

const Nav = () => {
    const [windowTop, isWindowTop] = useState(true);
    const [isNavOpen, toggleNav] = useState(true);

    const changeButton = () => {
        toggleNav(!isNavOpen);
    }

    useEffect(() => {
        if (typeof windows !== undefined) {
            window.addEventListener("scroll", () => {
                if (window.screen.width > 1025) {
                    if (window.scrollY > 58) {
                        isWindowTop(false);
                    } else {
                        isWindowTop(true);
                    }
                }
            });
        }
    });

    return (
        <>
            <nav className={windowTop ? 'Nav' : 'Nav hidden-nav'}>
                <div className='container'>
                    <div className={isNavOpen ? 'nav-items' : 'nav-items nav-show'}>
                        <div className='top-nav'>
                            <a href='tel:88622124315'>+7 (8622) 12-43-15</a>
                            <Link to='/' onClick={() => {scrollTop(); changeButton()}} ><img src="/images/casa-del-mar--logo.svg" className={windowTop ? "logo" : "logo hidden-logo"} alt='' /></Link>
                            <a href='mail:reservations@hotelcasadelmar.com'>reservations@hotelcasadelmar.com</a>
                        </div>
                        <div className='bottom-nav'>
                            <Link to='/rooms' className='links link-width' onClick={() => {scrollTop(); changeButton()}}>Комнаты</Link>
                            <Link to='/offers' className='links' onClick={() => {scrollTop(); changeButton()}}>Предложения</Link>
                            <Link to='/' className={windowTop ? 'text-logo hidden-logo' : 'text-logo'} onClick={() => {scrollTop(); changeButton()}}><span>Casa del Mar</span></Link>
                            <Link to='/services' className='links' onClick={() => {scrollTop(); changeButton()}}>Услуги</Link>
                            <Link to='/reservation' className='book-button' onClick={() => {scrollTop(); changeButton()}}>Забронировать</Link>
                        </div>
                    </div>
                    <div className='burger-wrapper'><div className='burger-block' onClick={changeButton} ><span className={isNavOpen ? 'burger' : 'burger close-button'} /></div></div>
                </div>
            </nav>
        </>
    );
}

export default Nav;