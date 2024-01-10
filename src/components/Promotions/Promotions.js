import './Promotions.scss';
import back from '../../media/back.jpg';
import beach from '../../media/beach.jpg';
import tables from '../../media/tables.jpg'

const Promotions = () => {
  return (
    <section className='Promotions'>
      <div className='container'>
        <div className='item__Promotions'>
          <div className='image'><img src={back} /></div>
          <div className='item-content'>
            <div className='item-wrapper'>
              <h3>Номер с видом</h3>
              <p>Откройте для себя лето в Санта-Монике. Наслаждайтесь номером с видом и сэкономьте до 25%.</p>
              <p>Предложение зависит от наличия возможности. Могут применяться закрытые даты. Не суммируется с другими предложениями или пакетами.</p>
            </div>
          </div>
        </div>
        <div className='item__Promotions reversed'>
          <div className='image'><img src={beach} /></div>
          <div className='item-content'>
            <div className='item-wrapper'>
              <h3>Пляжи</h3>
              <p>Благодаря милям песчаного пляжа за пределами нашей двери и горячему обеду на свежем воздухе мы создали особенный пикник Casa Style. </p>
              <p>Предложение зависит от наличия возможности. Могут применяться закрытые даты. Не суммируется с другими предложениями или пакетами.</p>
            </div>
          </div>
        </div>
        <div className='item__Promotions'>
          <div className='image'><img src={tables} /></div>
          <div className='item-content'>
            <div className='item-wrapper'>
              <h3>Комнаты «Люкс»</h3>
              <p>Побалуйте себя отдыхом в стиле «Люкс». При проживании 2 ночей в любом из наших люксов, спроектированных Майклом С. Смитом, воспользуйтесь скидкой 20% по лучшей доступной цене.</p>
              <p>Предложение зависит от наличия возможности. Могут применяться закрытые даты. Не суммируется с другими предложениями или пакетами.</p>
            </div>
          </div>
        </div>
        <p className='mobile-warning'>Некоторые предложения зависят от наличия возможности. Могут применяться закрытые даты. Не суммируется с другими предложениями или пакетами.</p>
      </div>
    </section>
  );
}

export default Promotions;