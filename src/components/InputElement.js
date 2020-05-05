import React from 'react';
import '../assets/Style.css';

const InputElement = (props) => {
  const { visible } = props;
  const { name, type, human_label, value, required = false } = props.element;
  let show = visible === undefined ? true : visible;

  return (
    show?
    <div className='Input-container'>
      <label className='Input-label' htmlFor={name}>{human_label}</label>
      <input
        className='Input-field'
        onChange={props.onChange}
        required={required}
        name={name}
        type={type}
        value={value}
        placeholder={('Enter ' + human_label)}
      />
    </div>:null
  );
}

export default InputElement;