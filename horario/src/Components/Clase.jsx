import React from 'react'

const Clase = ({clase}) => {

    const {Grupo, Asignatura, Profesor, L, M, X, J, V} = clase;
  return (
    <div className='flex gap-5 md:grid md:grid-cols-12 items-center border-b-2 border-cyan-300 p-2'>
        <span>{Grupo}</span>
        <span className='md:col-span-3'>{Asignatura}</span>
        <span className='md:col-span-3'>{Profesor}</span>
        <span>{L===null? "********" : L}</span>
        <span>{M===null? "********" : M}</span>
        <span>{X===null? "********" : X}</span>
        <span>{J===null? "********" : J}</span>
        <span>{V===null? "********" : V}</span>
    </div>
  )
}

export default Clase