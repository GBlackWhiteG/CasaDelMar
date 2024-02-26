import React from 'react';
import "./Experiences.scss"

const Experiences = React.memo(() => {
    return (
        <section className="Experiences">
            <div className="container">
                <h2>Активный отдых</h2>
                <div><img className='main-photo__Experiences' src="/images/casa_del_mar_pool_alt_view.jpg" alt="seaside" /></div>
                <ul className='items'>
                    <li className='item'>
                        <div><img src="/images/serf.jpg" alt='serf' /></div>
                        <h3>Уроки серфинга</h3>
                        <p>Погрузитесь в мир серфинга на индивидуальных или групповых уроках от опытных профессионалов в Learn to Surf Sochi. Индивидуальные уроки начинаются от 10 тысяч рублей. Наши уроки серфинга адаптированы для всех уровней подготовки и физической подготовленности.</p>    
                    </li>
                    <li className='item'>
                        <div><img src="/images/bicycles.jpg" alt='bikes' /></div>
                        <h3>Прокат велосипедов</h3>
                        <p>Отправьтесь в захватывающее путешествие вдоль береговой линии Сочи на арендованном пляжном круизере отеля Riviera Sochi. Мы предоставляем карты, подсказки и бутылку воды; остальное ваше приключение в Сочи зависит только от вас! Стоимость аренды пляжных круизеров начинается от 700 рублей за один час, 1200 рублей за два часа и 1750 рублей за целый день. За дополнительными подробностями обращайтесь к нашей стойке консьержа.</p>    
                    </li>
                    <li className='item'>
                        <div><img src="/images/health.jpg" alt='health' /></div>
                        <h3>Пляжные тренировки</h3>
                        <p>На фоне мягко плещущихся волн по теплому песку Casa del Mar предоставляет возможность продолжить занятия фитнесом с тренировкой на пляже или начать новую в одном из самых спокойных мест, которые только можно себе представить.</p>    
                    </li>
                </ul>
            </div>
        </section>
    )
});

export default Experiences;