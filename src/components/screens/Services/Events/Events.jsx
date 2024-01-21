import { useState } from "react";
import Slider from "react-slick";
import meeting from "./../../../../media/meetings.jpg";
import parties from "../../../../media/parties.jpg";
import weddings from "../../../../media/weddings.jpg";
import './Events.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderText = ["Вы отвечаете за встречу, почему бы вам не выбрать место на берегу моря, где вы сможете наблюдать за прибоем, ловить несколько скатов и буквально находиться на пляже? Посмотрим правде в глаза: работа не обязательно должна быть только работой в этом пляжном отеле в Санта-Монике.",
                    "Представьте себе энергию пирса Санта-Моники и сверкающий Тихий океан в качестве места для вашей следующей вечеринки или мероприятия. Такая волшебная атмосфера не оставит равнодушными ваших гостей. Очаруйте их на наших невероятных площадках для вечеринок в Санта-Монике.",
                    "Бальный зал с двумя потолками высотой в один этаж, лестница, по которой можно сделать парадный вход, и Тихий океан, наблюдающий за происходящим. Идеальное место для свадебного приема и церемонии в Санта-Монике, от которой захватывает дух. Отель Casa del Mar – это то, что вы хотите видеть на своем свадебном видео. "]

const Events = () => {
    const [sliderImageIndex, getIndex] = useState(0);

    var settings = {
        adaptiveHeight: true,
        dots: true,
        infinity: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        SlidesToScroll: 1,
        centerPadding: '0px',
        beforeChange: (oldIndex, newIndex) => getIndex(newIndex),
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
                <div className="slider-text-wrapper"><p className="slider-text">{sliderText[sliderImageIndex]}</p></div>
            </div>
        </section>
    );
}

export default Events;