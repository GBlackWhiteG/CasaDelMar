import "./Restaurants.scss";
import React from 'react';
const Restaurants = React.memo(() => {
    return (
        <section className='Restaurants'>
            <div className='main-photo-wrapper'>
                <img rel="preload" src="/images/eat2.jpg" alt="eat" className='main-photo'/>
                <div className='main-photo-content'>
                    <h2>Рестораны</h2>
                    <p>Вам не обязательно покидать наш роскошный отель в Сочи, чтобы насладиться фантастическим рестораном морепродуктов и вечерней живой музыкой.</p>
                </div>
            </div>
            <div className="container">
                <div className='content-block'>
                    <div className='left-block'>
                        <div className='image-wrapper'>
                            <div className="image-block"><img src="/images/terrazza.jpg" alt="terrazza" /></div>
                            <div className='content'>
                                <h3>Терразза</h3>
                                <p>За пределами плиты величественная архитектура Терраццы открывает захватывающие виды на Черное море с высокими стенами с окнами, которые создают захватывающее впечатление от морского побережья, открывая очаровательную береговую линию Сочи.</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-block'>
                        <div className='image-wrapper'>
                            <div><img src="/images/lobby-laundg.jpg" alt="lobby-layndg" /></div>
                            <div className='content reversed'>
                                <h3>Лобби-лаундж</h3>
                                <p>Наш величественный лаундж в вестибюле с видом на Черное море сочетает в себе неподвластную времени элегантность и роскошную пляжную обстановку. </p>
                            </div>
                        </div>
                    </div>
                    <div className='left-block'>
                        <div className='image-wrapper'>
                            <div><img src="/images/patio-del-mar.jpg" alt="patio" /></div>
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
});

export default Restaurants;