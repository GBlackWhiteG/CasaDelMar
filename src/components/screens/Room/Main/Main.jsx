import roomsInfo from '../../../services/importPicturesInfo'
import './Main.scss'

const Main = (id) => {
    return (
        <section className='Main__room'>
            <div className='image-wrapper'><img src={roomsInfo[id.index].src} /></div>
            <div className='container'>
                <h2>{roomsInfo[id.index].name}</h2>
                <p>{roomsInfo[id.index].description}</p>
                <p className='features'>1 кровать / 1 кровать / вид на океан / 1 полноразмерная кровать диван-кровать</p>
                <div className='comfort'>
                    <h3>Удобства</h3>
                    <ul className='comfort-items'>
                        <li>37 кв. м</li>
                        <li>Smart TV и акустическая система bluetooth</li>
                        <li>Ванная комната из итальянского мрамора</li>
                        <li>Постельное белье итальянского дизайна</li>
                        <li>Кофемашина Неспрессо</li>
                    </ul>
                </div>
            </div> 
        </section>
    );
}

export default Main;