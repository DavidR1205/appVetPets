import React from 'react'
import useAuth from '../../hooks/UseAuth.js'

const Pacientes = () => {
  useAuth();

  return (
    <div>
      <h1>Pacientes</h1>
    </div>
  )
}

export default Pacientes
