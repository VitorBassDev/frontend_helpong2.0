import React from 'react';
import './styles.css'

const InputStartPages = ({label, name, ...rest }) => {
  return (
    <div className="form-wrapper" >
      <input id={name} placeholder=" " {...rest} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}
export default InputStartPages;