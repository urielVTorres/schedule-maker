import React from 'react'
import Clase from './Clase';
const Horarios = ({clase, saturado, setSaturado}) => {

  return (
    <div className='bg-slate-50 mb-10 shadow-md border-2 border-gray-300 rounded-sm overflow-auto'>
        {clase.dia.map((classe, index)=>(
            <Clase clase={classe} saturado={saturado} setSaturado={setSaturado} key={index}/>
        ))}
    </div>
  )
}

export default Horarios