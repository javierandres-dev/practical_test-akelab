import React, { useState } from 'react';
import Aside from './Aside';
import valueIsValid from '../helpers/valueIsValid';

const Exercise1 = () => {
  const [message, setMessage] = useState('');
  const [value, setValue] = useState('');
  const fibonacci = (x) => {
    let aux = 1, sequence = 0, buffer;
    while (x >= 1){
      buffer = aux;
      aux = aux + sequence;
      sequence = buffer;
      x--;
    }
    return sequence;
  }

const handleChange = (e) => setValue(e.target.value);

const handleSubmit = (e)=> {
  e.preventDefault();
  if (valueIsValid(value) === true) {
    const num = parseInt(value);
    let sequenceFibonacci = [];
    for (let i = 1; i <= num; i++) {
      sequenceFibonacci.push(fibonacci(i));
    }
    setMessage(`Secuencia Fibonacci: ${sequenceFibonacci.join(', ')}`)
  } else {
    setMessage(valueIsValid(value))
  }
}

  return (
    <>
      <main role='main' className='container'>
        <h1 className='ta-center'>Mostrar secuencia Fibonacci</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Ingrese un número entero igual o mayor a 1</label>
          <input type="text" name="number" id="number" placeholder='6' onChange={handleChange}/>
          <button type="submit">Mostrar Secuencia</button>
        </form>
      </main>
      <Aside message={message} />
    </>
  )
}

export default Exercise1;
