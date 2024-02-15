import { motion } from 'framer-motion';
import blockAnimation from '../../../services/blockAnimation';
import './ExOffer.scss';
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
          <p>Вы готовы к отдыху? Остановившись на более длительный срок, вы сможете сэкономить до 25% и получить единоразовый гостиничный кредит в размере 10000 рублей за весь период проживания.</p>
          <Button link='/reservation' text={"Забронировать"} />
        </div>
        <div className='collage-image'><img src="/images/pictures-collage.png" /></div>
      </div>
    </motion.section>
  );
}

export default ExOffer;