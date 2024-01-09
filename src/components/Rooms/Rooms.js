import './Rooms.scss';
import Button from "../ui/Button/Button"
import roomsPictures from './importPictures';

const roomsNames = ["Делюкс номер", "Номер с частичным видом на океан", "Улучшенный номер", "Люкс «Санта-Моника»",
                    "Люкс с видом на тихий океан", "Номер «Пальмовая терраса»", "Пентхаус-люкс", "Номер с кроватью «King-Size»", "Номер с видом на океан"];

const Rooms = () => {
  return (
    <section className='Rooms'>
      <div className='container'>
        <div className='big-image__Rooms'>
          <img src={roomsPictures[0]} alt=''/>
          <Button text="Подробнее" />
        </div>
        <div className='content__Rooms'>
          <h2>Комнаты</h2>
          <ul className='rooms-block'>
            {roomsPictures.map((image, index) => (
              <li className='room'>
                <img src={image} key={index} alt='' />
                <p>{roomsNames[index]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Rooms;