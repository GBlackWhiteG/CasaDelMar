import beyond from "../../../../media/beyond-the-beach-feature.jpg";
import seaside from "../../../../media/casa_del_mar_pool_alt_view.jpg";
import "./Experiences.scss"

const Experiences = () => {
    return (
        <section className="Experiences">
            <div className="container">
                <h1>Опыт</h1>
                <div><img src={beyond} alt="beyond the sea" /></div>
                <div><img src={seaside} alt="seaside" /></div>
            </div>
        </section>
    )
}

export default Experiences;