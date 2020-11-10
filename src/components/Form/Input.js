import React, { useEffect, useRef} from 'react';
import {useField} from '@unform/core'

function Input( {name, ...rest}) {

  const inputRef = useRef(null)
  
  const {fieldName, registerField, error} = useField(name);
  
  useEffect(() => {
    console.log(inputRef.current.value);
    registerField ({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [
    fieldName, registerField
  ])

  return(
    <div>
    <input 
      ref={ inputRef} 
      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 form-control cep-mask"
      {...rest}  
    />
    {error && <span style={{color: 'darkorange'}}> {error} </span>}
    </div>
  )
}
export default Input;