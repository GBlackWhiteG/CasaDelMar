import mainPhoto from '../../../../media/eat2.jpg'
import terrazza from '../../../../media/terrazza.jpg';
import lobbyLounge from '../../../../media/lobby-laundg.jpg';
import patioDelMar from '../../../../media/patio-del-mar.jpg';
import "./Restaurants.scss";

const Restaurants = () => {
    return (
        <section className='Restaurants'>
            <div className='main-photo-wrapper'>
                <img className='main-photo' src={mainPhoto} alt='main photo'/>
                <div className='main-photo-content'>
                    <h2>Рестораны</h2>
                    <p>Вам не обязательно покидать наш роскошный отель в Санта-Монике, чтобы насладиться фантастическим рестораном морепродуктов в Лос-Анджелесе и вечерней живой музыкой.</p>
                </div>
            </div>
            <div className="container">
                <div className='content-block'>
                    <div className='left-block'>
                        <div className='image-wrapper'>
                            <img src={terrazza} />
                            <div className='content'>
                                <h3>Терразза</h3>
                                <p>Вдохновение Terrazza черпается из ароматов, которые пересекают землю и море, от величественного побережья Испании и Балеарских островов до потрясающего итальянского побережья Амальфи.</p>
                                <p>За пределами плиты величественная архитектура Терраццы открывает захватывающие виды на Тихий океан с высокими стенами с окнами, которые создают захватывающее впечатление от морского побережья, открывая очаровательную береговую линию Калифорнии и культовый пирс Санта-Моники.</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-block'>
                        <div className='image-wrapper'>
                            <img src={lobbyLounge} />
                            <div className='content reversed'>
                                <h3>Лобби-лаундж</h3>
                                <p>Наш величественный лаундж в вестибюле с видом на Тихий океан сочетает в себе неподвластную времени элегантность и роскошную пляжную обстановку. </p>
                            </div>
                        </div>
                    </div>
                    <div className='left-block'>
                        <div className='image-wrapper'>
                            <img src={patioDelMar} />
                            <div className='content'>
                                <h3>Морепродукты Bistro</h3>
                                <p>Наше новое бистро на свежем воздухе Patio del Mar занимает место в первом ряду у подножия знаменитого отеля Casa del Mar. В нескольких шагах от пляжа это идеальное место для летнего обеда или ужина на закате с друзьями.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Restaurants;