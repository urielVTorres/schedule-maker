import React from 'react'

const Clase = ({clase}) => {

    const {Grupo, Asignatura, Profesor, L, M, X, J, V} = clase;
  return (
    <div className='grid grid-cols-12 items-center border-b-2 border-cyan-300 p-2'>
        <span>{Grupo}</span>
        <span className='col-span-3'>{Asignatura}</span>
        <span className='col-span-3'>{Profesor}</span>
        <span>{L}</span>
        <span>{M}</span>
        <span>{X}</span>
        <span>{J}</span>
        <span>{V}</span>
    </div>
  )
}

export default Clase