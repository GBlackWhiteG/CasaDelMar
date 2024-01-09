import { useEffect, useState } from 'react';
import './Nav.scss';

const Nav = () => {
    const [windowTop, isWindowTop] = useState(true);

    useEffect(() => {
        if (typeof windows !== undefined) {
            window.addEventListener("scroll", () => {
                if (window.screen.width > 950) {
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
        <nav className={windowTop ? 'Nav' : 'Nav hidden-nav'}>
            <div className='container'>
                <p>Текст</p>
                <p>Текст</p>
                <p className={windowTop ? 'hidden-text-logo' : 'text-logo'}>Casa del Mar</p>
                <p>Текст</p>
                <p>Текст</p>
            </div>
        </nav>
    );
}

export default Nav;