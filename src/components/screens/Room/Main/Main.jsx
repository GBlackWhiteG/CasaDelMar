import roomsInfo from '../../../services/importPicturesInfo'
import './Main.scss'

const Main = (id) => {
    const room = roomsInfo[id.index];

    return (
        <section className='Main__room'>
            <div className='image-wrapper'><img src={room.src} /></div>
            <div className='container'>
                <h2>{room.name}</h2>
                <p>{room.description}</p>
                <p className='features'>{room.bedInfo}</p>
                <div className='comfort'>
                    <h3>Удобства</h3>
                    <ul className='comfort-items'>
                        {room.comfort.map((text, index) => (
                            <li key={index}>{text}</li>
                        ))}
                    </ul>
                </div>
            </div> 
        </section>
    );
}

export default Main;