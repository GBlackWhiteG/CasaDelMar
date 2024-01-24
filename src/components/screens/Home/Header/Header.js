import { motion } from 'framer-motion';
import blockAnimation from '../../../services/blockAnimation';
import './Header.scss';
import main_video from '../../../../media/Casa_Del_Mar.mp4';

const Header = () => {
  return (
    <motion.header
      className="Header"
    >
      <div className='container'>
        <video className='video' autoPlay muted loop>
          <source src={main_video} type='video/mp4' />
        </video>
        <div className='title-block'>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={blockAnimation} 
            viewport={{ once: true }}
            transition={{
              ease: [.19, .58, .64, .93],
              duration: 0.4,
            }}
            className='title'>Casa Del Mar
          </motion.h1></div>
      </div>
    </motion.header>
  );
}

export default Header;