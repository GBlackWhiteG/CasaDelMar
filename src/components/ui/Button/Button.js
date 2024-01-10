import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({text, link = '/'}) => {

  return (
    <Link to={link} className='Button'>
      {text}
    </Link>
  );
}

export default Button;