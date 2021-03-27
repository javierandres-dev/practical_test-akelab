import React from 'react'

const Home = ({setMessage}) => {
  setMessage('Por favor seleccione un ejercicio.');
  return (
    <main role='main' className='main'>
      <h1>Bienvenido</h1>
      <h2>Prueba de selección JavaScript</h2>
    </main>
  )
}

export default Home
