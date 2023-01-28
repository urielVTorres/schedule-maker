import React from 'react'

const Horarios = ({clase}) => {
    const {Grupo, Asignatura, Profesor, L, M, X, J, V} = clase;
  return (
    <div className='grid grid-cols-12 items-center'>
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

export default Horarios