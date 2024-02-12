import React, { useMemo, useState } from "react";
import Slider from "react-slick";
import './Events.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderText = ["Вы отвечаете за встречу, почему бы вам не выбрать место на берегу моря, где вы сможете наблюдать за прибоем, ловить несколько скатов и буквально находиться на пляже? Посмотрим правде в глаза: работа не обязательно должна быть только работой в этом пляжном отеле в Сочи.",
                    "Представьте себе энергию набережной города Сочи и блистающее Черное море в качестве идеального места для вашего следующего мероприятия или вечеринки. Эта волшебная атмосфера не оставит равнодушными ваших гостей. Поразите их нашими потрясающими площадками для вечеринок в Сочи.",
                    "Зал для торжеств с двумя величественными потолками высотой в один этаж, великолепная лестница для впечатляющего входа и Черное море, раскрывающееся перед гостями. Идеальное место для свадебного приема и церемонии в Сочи, которое заставляет сердца замирать. Отель Casa del Mar - это именно то, что вы хотите видеть на своем свадебном видео."]

const Events = React.memo(() => {
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
        centerMode: true,
        beforeChange: (oldIndex, newIndex) => getIndex(newIndex),
    }

    return (
        <section className="Events">
            <div className="container">
                <h2>Мероприятия</h2>
                <Slider className="slider" {...settings}>
                    <div className="slider-image-wrapper"><img src="/images/meetings.jpg" alt="встречи" /></div>
                    <div className="slider-image-wrapper"><img src="/images/parties.jpg" alt="вечеринки" /></div>
                    <div className="slider-image-wrapper"><img src="/images/weddings.jpg" alt="свадьбы" /></div>
                </Slider>
                <div className="slider-text-wrapper"><p className="slider-text">{sliderText[sliderImageIndex]}</p></div>
            </div>
        </section>
    );
});

export default Events;