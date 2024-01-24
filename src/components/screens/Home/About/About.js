import { motion } from 'framer-motion';
import blockAnimation from '../../../services/blockAnimation';
import './About.scss';

const About = () => {
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
      className='About'
    >
      <div className='container'>
        <h2 className='title'>Лучшее место для вашего отдыха</h2>
        <p>Отель Casa del Mar, вдохновленный величественными виллами Средиземноморья и пляжной атмосферой Санта-Моники, приглашает вас стильно расслабиться.
Динамичный отель на берегу океана в самом сердце Силикон-Бич предлагает одни из самых желанных номеров на Западном побережье. Каждый изысканно оформленный номер и люкс демонстрирует местное прибрежное искусство и дизайн жилых помещений, многие из которых имеют потрясающий вид на побережье от Палос-Вердеса до Малибу. Три двухэтажных пентхауса, расположенные на вершине здания на отдельном этаже, представляют собой идеальное убежище на берегу моря.</p>
        <span className='sign'>Casa Del Mar</span> 
      </div>
    </motion.section>
  );
}

export default About;