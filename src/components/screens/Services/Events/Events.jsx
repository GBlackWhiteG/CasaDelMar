import Slider from "react-slick";
import meeting from "./../../../../media/meetings.jpg";
import parties from "../../../../media/parties.jpg";
import weddings from "../../../../media/weddings.jpg";
import './Events.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Events = () => {
    var settings = {
        dots: true,
        infinity: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        SlidesToScroll: 1,
        centerPadding: '0px',
    }

    return (
        <section className="Events">
            <div className="container">
                <h2>Мероприятия</h2>
                <Slider className="slider" {...settings}>
                    <div className="slider-image-wrapper"><img src={meeting} alt="встречи" /></div>
                    <div className="slider-image-wrapper"><img src={parties} alt="вечеринки" /></div>
                    <div className="slider-image-wrapper"><img src={weddings} alt="свадьбы" /></div>
                </Slider>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
            </div>
        </section>
    );
}

export default Events;