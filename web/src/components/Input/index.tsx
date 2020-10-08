import React, { InputHTMLAttributes } from 'react';

import './styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="employee-field">
      <label htmlFor={name} className="employee-label">{label}</label>
      <input type="text" id={name} name={name} className="employee-entry" {...rest} />
    </div>
  );
}

export default Input;
