import React, { useState } from 'react';

const Exercise1 = ({setMessage}) => {
  const [value, setValue] = useState('');
  setMessage('');

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
    let sequenceFibonacci = [];
    for (let i = 1; i <= num; i++) {
      sequenceFibonacci.push(fibonacci(i));
    }
    setMessage(sequenceFibonacci.join(', '))
  }
}

  return (
    <main role='main' className='main'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Ingrese un número entero igual o mayor a 1</label>
        <input type="text" name="number" id="number" placeholder='6' onChange={handleChange}/>
        <button type="submit">Serie Fibonacci</button>
      </form>
    </main>
  )
}

export default Exercise1;
