import React from 'react'
import Clase from './Clase';
const Horarios = ({clase}) => {

  return (
    <div className='bg-slate-100 mb-10'>
        {clase.dia.map((classe, index)=>(
            <Clase clase={classe} key={index}/>
        ))}
    </div>
  )
}

export default Horarios