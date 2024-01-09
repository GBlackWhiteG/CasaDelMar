import './Button.scss';

const Button = ({text}) => {
  return (
    <div className='Button'>
      <span>{text}</span>
    </div>
  );
}

export default Button;