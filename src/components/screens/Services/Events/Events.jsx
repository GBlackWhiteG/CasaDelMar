import meeting from "./../../../../media/meetings.jpg";
import parties from "../../../../media/parties.jpg";
import weddings from "../../../../media/weddings.jpg";
import './Events.scss'

const Events = () => {
    return (
        <section className="Events">
            <div className="container">
                <h2>Мероприятия</h2>
                <div className="slider-block">
                    <div className="slider-content">
                        <div className="slider">
                            <div><img src={meeting} alt="встречи" /></div>
                            <div><img src={parties} alt="вечеринки" /></div>
                            <div><img src={weddings} alt="свадьбы" /></div>
                        </div>
                    </div>
                </div>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
            </div>
        </section>
    );
}

export default Events;