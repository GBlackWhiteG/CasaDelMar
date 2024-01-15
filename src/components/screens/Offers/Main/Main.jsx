import tables from '../../../../media/tables.jpg';
import escape from '../../../../media/escape-from-lux.jpg';
import revival from '../../../../media/weekend-revival.jpg';
import roomWithView from '../../../../media/room-with-view.jpg';
import parkAndPlay from '../../../../media/park-and-play.jpeg';
import beachside from '../../../../media/beachside-bliss.jpg'
import "./Main.scss";

const Main = () => {
    return (
        <section className='Offers-Main'>
            <div className="container">
                <h2>Специальные предложения</h2>
                <ul className='items__Offers'>
                    <li className='item'>
                        <div><img src={tables} alt='tables'/></div>
                        <div className='item-content'>
                            <h3>Оставайтесь дольше, экономьте больше</h3>
                            <p>Остановившись на более длительный срок, вы сможете сэкономить до 25 % и получить единоразовый гостиничный кредит в размере 100 долларов США за весь период проживания.</p>
                            <ul>
                                <li>Получите скидку до 15% на лучшую доступную цену при проживании в течение 3 ночей.</li>
                                <li>Получите скидку до 20% на лучшую доступную цену при проживании в течение 4 ночей.</li>
                                <li>Получите скидку до 25% на лучшую доступную цену при проживании в течение 5 ночей.</li>
                            </ul>
                        </div>
                    </li>
                    <li className='item'>
                        <div><img src={escape} alt='escape'/></div>
                        <div className='item-content'>
                            <h3>Комнаты «Люкс»</h3>
                            <p>Побалуйте себя отдыхом в стиле «Люкс». При проживании 2 ночей в любом из наших люксов, спроектированных Майклом С. Смитом, воспользуйтесь скидкой 20 % по лучшей доступной цене.</p>
                        </div>
                    </li>
                    <li className='item'>
                        <div><img src={revival} alt='revival'/></div>
                        <div className='item-content'>
                            <h3>Возрождение выходного дня</h3>
                            <p>Насладитесь солнцем, песком и спа, а также множеством чудесных сюрпризов в отеле Casa del Mar. В стоимость вашего двухдневного пребывания на выходных входят коктейли и мясные закуски по прибытии, бесплатный прокат велосипедов и щедрый кредит на завтрак в номер или в ресторане Terrazza и успокаивающие процедуры в Sea Wellness Spa.</p>
                            <p>Продлите свой отпуск на выходных, заказав поздний выезд в 16:00 в воскресенье.</p>
                        </div>
                    </li>
                    <li className='item'>
                        <div><img src={roomWithView} alt='roomWithView'/></div>
                        <div className='item-content'>
                            <h3>Номер с видом</h3>
                            <p>Откройте для себя лето в Санта-Монике. Наслаждайтесь номером с видом и сэкономьте до 25%.</p>
                        </div>
                    </li>
                    <li className='item'>
                        <div><img src={parkAndPlay} alt='parkAndPlay'/></div>
                        <div className='item-content'>
                            <h3>Паркуся и играй</h3>
                            <p>Когда вы снова откроете для себя радость путешествия по открытой дороге, настройте свой GPS на отель Casa del Mar для этого давно назревшего отпуска. Благодаря милям песчаных пляжей, велосипедным дорожкам и живописной береговой линии нет необходимости ехать куда-либо еще. Да, наконец-то пришло время поиграть.</p>
                            <p>Наш пакет Park and Play включает в себя бесплатную парковку автомобиля сотрудником отеля и ежедневный кредит на еду и напитки в размере 50 долларов США.</p>
                        </div>
                    </li>
                    <li className='item'>
                        <div><img src={beachside} alt='beachside'/></div>
                        <div className='item-content'>
                            <h3>Пляжное блаженство</h3>
                            <p>Благодаря милям песчаного пляжа за пределами нашей двери и горячему обеду на свежем воздухе мы создали особенный пикник Casa Style. Пришло время выйти и поиграть!</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Main;