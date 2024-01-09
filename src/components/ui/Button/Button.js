import './Button.scss';

const Button = ({text, func = null}) => {
  return (
    <div className='Button' onClick={func}>
      <span>{text}</span>
    </div>
  );
}

export default Button;