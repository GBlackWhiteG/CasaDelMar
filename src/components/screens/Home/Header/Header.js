import './Header.scss';
import main_video from '../../../../media/Casa_Del_Mar.mp4';

const Header = () => {
  return (
    <header className="Header">
      <div className='container'>
        <video className='video' autoPlay muted loop>
          <source src={main_video} type='video/mp4' />
        </video>
        <div className='title-block'><h1 className='title'>Casa Del Mar</h1></div>
      </div>
    </header>
  );
}

export default Header;