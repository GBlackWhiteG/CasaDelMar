import { motion } from 'framer-motion';
import blockAnimation from '../../../services/blockAnimation';
import './ExOffer.scss';
import collage from "../../../../media/pictures-collage.png";
import Button from "../../../ui/Button/Button";

const ExOffer = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={blockAnimation}
      transition={{
        ease: [.19, .58, .64, .93],
        duration: 0.4,
      }}
      className='ExOffer'
    >
      <div className='container'>
        <div className='text__ExOffer'>
          <h2>Оставайтесь дольше, экономьте больше</h2>
          <p>Вы готовы к отдыху? Остановившись на более длительный срок, вы сможете сэкономить до 25% и получить единоразовый гостиничный кредит в размере 100 долларов США за весь период проживания.</p>
          <Button text={"Забронировать"} />
        </div>
        <div><img className='collage-image' src={collage} /></div>
      </div>
    </motion.section>
  );
}

export default ExOffer;