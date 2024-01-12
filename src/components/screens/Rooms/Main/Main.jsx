import roomsInfo from '../../../services/importPicturesInfo'
import "./Main.scss"

const Main = () => {
    return (
        <section className="Main">
            <div className="container">
                <ul className="items">
                    {roomsInfo.map((room, index) => (
                       <li key={index} className="item">
                            <div><img src={room.src} alt='room'/></div>
                            <div>
                                <h3>{room.name}</h3>
                                <p>{room.description}</p>
                            </div>
                        </li> 
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Main;