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
                <h1>Специальные предложения</h1>
                <div><img src={tables} alt='tables'/></div>
                <div><img src={escape} alt='escape'/></div>
                <div><img src={revival} alt='revival'/></div>
                <div><img src={roomWithView} alt='roomWithView'/></div>
                <div><img src={parkAndPlay} alt='parkAndPlay'/></div>
                <div><img src={beachside} alt='beachside'/></div>
            </div>
        </section>
    );
}

export default Main;