import "./TopNav.scss";
import logo from '../../media/casa-del-mar--logo.svg';

const TopNav = () => {
  return (
    <div className="TopNav">
      <div className="container">
        <p>Текст</p>
        <img src={logo} className="logo" />
        <p>Текст</p>
      </div>
    </div>
  );
}

export default TopNav;
