import React, { useState } from 'react';
import Aside from './Aside';

const Exercise3 = () => {
    const [message, setMessage] = useState('');

  return (
    <>
      <main role='main' className='main'>
        in Exercise3...
      </main>
      <Aside message={message} />
    </>
  )
}

export default Exercise3
