import React from 'react'
import useAuth from '../../hooks/UseAuth.js'

const Inicio = () => {
    useAuth();

  return (
    <div>
      <h1>Inicio</h1>
    </div>
  )
}

export default Inicio
