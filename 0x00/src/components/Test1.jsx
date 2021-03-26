import React, { useState } from 'react'

const Test1 = () => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

const handleChange = (e)=>{
            setValue(e.target.value)
}

const valueIsValid = () => {
  if (value === '') {
    console.log('Error: Por favor ingrese un número entero igual o mayor a 1');
    return false;
  } else if (isNaN(value)) {
    console.log('Error: esto no es un número entero');
    return false;
  } else if (value.includes('.')) {
    console.log('Error: dede ingresar un número entero, no se acepta número flotante');
    return false;
  } else if (value < 1) {
    console.log('Error: el número debe ser igual o mayor a 1');
    return false;
  } else {
      return true;
  }
}

const handleSubmit = (e)=> {
  e.preventDefault();
  if (valueIsValid()) {
    const num = parseInt(value);
    console.log('continuamos....', num)
  } else {
    console.log(error);
  }
}

  return (
    <main role='main'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Ingrese un número entero igual o mayor a 1</label>
        <input type="text" name="number" id="number" placeholder='6' onChange={handleChange}/>
        <button type="submit">Serie Fibonacci</button>
      </form>
    </main>
  )
}

export default Test1
