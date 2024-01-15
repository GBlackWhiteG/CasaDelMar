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
                                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-block'>
                        <div className='image-wrapper'>
                            <img src={lobbyLounge} />
                            <div className='content reversed'>
                                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className='left-block'>
                        <div className='image-wrapper'>
                            <img src={patioDelMar} />
                            <div className='content'>
                                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Restaurants;