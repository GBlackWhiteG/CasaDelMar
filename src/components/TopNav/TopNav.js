import { useEffect, useState } from 'react';
import "./TopNav.scss";
import logo from '../../media/casa-del-mar--logo.svg';

const TopNav = () => {
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
    <div className={windowTop ? "TopNav" : "TopNav hidden"}>
      <div className="container">
        <p>Текст</p>
        <img src={logo} className={windowTop ? "logo" : "hidden-logo"} alt='' />
        <p>Текст</p>
      </div>
    </div>
  );
}

export default TopNav;
