import React, { useState } from 'react';

const Exercise2 = ({setMessage}) => {
  const [value, setValue] = useState('');

const handleChange = (e) => setValue(e.target.value);

const valueIsValid = () => {
  if (value === '') {
    setMessage('Error: Por favor ingrese un número entero igual o mayor a 1');
    return false;
  } else if (isNaN(value)) {
    setMessage('Error: esto no es un número entero');
    return false;
  } else if (value.includes('.')) {
    setMessage('Error: dede ingresar un número entero, no se acepta número flotante');
    return false;
  } else if (value < 1) {
    setMessage('Error: el número debe ser igual o mayor a 1');
    return false;
  } else {
      return true;
  }
}

const handleSubmit = (e)=> {
  e.preventDefault();
  if (valueIsValid()) {
    const num = parseInt(value);
    let sequenceAkelab = [];
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        if (i % 3 === 0 && i % 5 === 0) {
          sequenceAkelab.push('AKELAB');
        } else if (i % 3 === 0) {
          sequenceAkelab.push('AKE');
        } else {
          sequenceAkelab.push('LAB');
        }
      } else {
        sequenceAkelab.push(i);
      }
    }
    setMessage(sequenceAkelab.join(', '))
  }
}

  return (
    <main role='main'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Ingrese un número entero igual o mayor a 1</label>
        <input type="text" name="number" id="number" placeholder='6' onChange={handleChange}/>
        <button type="submit">mostrar secuencia</button>
      </form>
    </main>
  )
}

export default Exercise2;
