import roomsInfo from '../../../services/importPicturesInfo'
import './Main.scss'

const Main = (id) => {
    return (
        <section className='Main__room'>
            <div className='image-wrapper'><img src={roomsInfo[id.index].src} /></div>
            <div className='container'>
                <h1>{roomsInfo[id.index].name}</h1>
                <p>{roomsInfo[id.index].description}</p>
            </div> 
        </section>
    );
}

export default Main;