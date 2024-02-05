import "./Experiences.scss"

const Experiences = () => {
    return (
        <section className="Experiences">
            <div className="container">
                <h2>Активный отдых</h2>
                <div><img className='main-photo__Experiences' src="/images/casa_del_mar_pool_alt_view.jpg" alt="seaside" /></div>
                <ul className='items'>
                    <li className='item'>
                        <div><img src="/images/serf.jpg" alt='serf' /></div>
                        <h3>Уроки серфинга</h3>
                        <p>Научитесь «зависать на 10» на индивидуальных или групповых уроках серфинга от опытных профессионалов в Learn to Surf LA. Индивидуальные уроки начинаются от 140 долларов. Уроки серфинга могут быть разработаны для всех уровней подготовки и атлетизма. </p>    
                    </li>
                    <li className='item'>
                        <div><img src="/images/bicycles.jpg" alt='bikes' /></div>
                        <h3>Прокат велосипедов</h3>
                        <p>Прокатитесь вдоль береговой линии почти на три мили к северу и югу от отеля Casa del Mar на арендованном пляжном круизере. Мы предоставляем карты, указания и бутылку воды; Остальная часть вашего приключения в Санта-Монике зависит от вас! Стоимость аренды пляжных круизеров начинается от 10 долларов за один час, 17 долларов за два часа и 25 долларов за день. Подробности уточняйте у нашей стойки консьержа.</p>    
                    </li>
                    <li className='item'>
                        <div><img src="/images/health.jpg" alt='health' /></div>
                        <h3>Пляжные тренировки</h3>
                        <p>На фоне мягко плещущихся волн по теплому песку Casa del Mar предоставляет возможность продолжить занятия фитнесом с помощью тренировки на пляже или начать новую в одном из самых безмятежных мест, которые только можно себе представить.</p>    
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Experiences;