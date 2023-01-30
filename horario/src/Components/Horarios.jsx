import React from 'react'
import Clase from './Clase';
const Horarios = ({clase}) => {

  return (
    <div className='bg-slate-50 mb-10 shadow-md border-2 border-gray-300 rounded-sm felx overflow-auto'>
        {clase.dia.map((classe, index)=>(
            <Clase clase={classe} key={index}/>
        ))}
    </div>
  )
}

export default Horarios