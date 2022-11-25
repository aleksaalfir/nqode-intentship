import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  name: string;
  clickHandler?: () => void;
  type: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ name, clickHandler, type }) => {
  return (
    <button
      className={`${classes['c-button']} ${classes[`c-button--${type}`]}`}
      onClick={clickHandler}
    >
      {name}
    </button>
  );
};

export default Button;
