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
        <p>Отель Casa del Mar, вдохновленный великолепными курортными виллами Средиземноморья и пляжной атмосферой Сочи, приглашает вас окунуться в стильный отдых.
        Этот динамичный отель на берегу Черного моря, расположенный в самом сердце курортной зоны Сочи, предлагает некоторые из самых привлекательных номеров на всем Южном побережье России. Каждый изысканно оформленный номер и люкс демонстрирует местное прибрежное искусство и дизайн жилых помещений, многие из которых открывают потрясающий вид на Черное море и горы. Три двухэтажных пентхауса, расположенные на вершине здания, представляют собой идеальное пристанище на берегу моря для тех, кто ищет роскошь и уединение.</p>
        <span className='sign'>Casa Del Mar</span> 
      </div>
    </motion.section>
  );
}

export default About;