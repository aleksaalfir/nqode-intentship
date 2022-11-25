import React from 'react';
import classes from './Input.module.scss';

interface InputProps {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  label?: string;
  value?: string | number;
  inputValue?: string | number;
  readonly?: boolean;
  setValue?: (value: string, prop?: string) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  id,
  name,
  label,
  inputValue,
  setValue,
  value,
  readonly
}) => {
  return (
    <div className={classes['c-input']}>
      {label ? (
        <label className={classes['c-input__label']} htmlFor={id}>
          {label}
        </label>
      ) : null}
      {inputValue ? (
        <input
          className={classes['c-input__input-field']}
          type={type}
          value={inputValue}
          placeholder={placeholder}
          id={id}
          name={name}
          onChange={(event) => setValue!(event.target.value, name)}
        />
      ) : (
        <input
          className={classes['c-input__input-field']}
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          readOnly={readonly}
          onChange={(event) => setValue!(event.target.value, name)}
        />
      )}
    </div>
  );
};

export default Input;
