import React, { useState } from 'react';
import Aside from './Aside';
import valueIsValid from '../helpers/valueIsValid';

const Exercise2 = () => {
    const [message, setMessage] = useState('');
  const [value, setValue] = useState('');

const handleChange = (e) => setValue(e.target.value);

const handleSubmit = (e)=> {
  e.preventDefault();
  if (valueIsValid(value) === true) {
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
    setMessage(`Secuencia AKELAB: ${sequenceAkelab.join(', ')}`)
  } else {
    setMessage(valueIsValid(value))
  }
}

  return (
    <>
      <main role='main' className='container'>
        <h1>Mostrar secuencia Akelab</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Ingrese un número entero igual o mayor a 1</label>
          <input type="text" name="number" id="number" placeholder='20' onChange={handleChange}/>
          <button type="submit">Mostrar Secuencia</button>
        </form>
      </main>
      <Aside message={message} />
    </>
  )
}

export default Exercise2;
