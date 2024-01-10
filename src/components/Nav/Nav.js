import { useEffect, useState } from 'react';
import logo from '../../media/casa-del-mar--logo.svg'
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
                if (window.screen.width > 768) {
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
                    <div className="nav-items">
                        <div className='top-nav'>
                            <p>Текст</p>
                            <img src={logo} className={windowTop ? "big-logo" : "big-logo hidden-big-logo"} alt='' />
                            <p>Текст</p>
                        </div>
                        <div className={isNavOpen ? 'bottom-nav' : 'bottom-nav nav-show'}>
                            <img src={logo} className='logo' alt='logo'/>
                            <p>Текст</p>
                            <p>Текст</p>
                            <span className={windowTop ? 'text-logo hidden-logo' : 'text-logo'}>Casa del Mar</span>
                            <p>Текст</p>
                            <p>Текст</p>
                        </div>
                    </div>
                    <div className='burger-block' onClick={changeButton} ><span className={isNavOpen ? 'burger' : 'burger close-button'} /></div>
                </div>
            </nav>
        </>
    );
}

export default Nav;