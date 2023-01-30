import React from 'react'

const Seleccion = ({ clases, profesores, listaMaterias, listaProfesores, setListaMaterias, setListaProfesores }) => {
    const arregloClases = [];
    for(let i = 0; i< clases.length; i++){
        arregloClases.push(clases[i].key);
    }
    return (
        <>
            <h1 className='text-3xl'>Seleccione las clases a cursar:</h1>
            <div className='p-2 m-5 grid grid-cols-2 gap-5 h-96 overflow-auto bg-slate-50 rounded-3xl'>
                {/* Primer semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Primer Semestre</h2>
                    {clases.filter(clase => clase.value == "1").map((clase, index) =>
                        <div> 
                            <h1 key={index} className="mx-4">{clase.key}</h1>
                            <select>
                                {profesores[arregloClases.indexOf(clase.key)].value.map((prof)=>
                                <option>
                                    {prof}
                                </option>)}
                            </select>
                        </div>
                    )}
                </div>
                {/* Segundo semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Segundo Semestre</h2>
                    {clases.filter(clase => clase.value == "2").map((clase, index) =>
                        <div> 
                            <h1 key={index} className="mx-4">{clase.key}</h1>
                            <select>
                            {profesores[arregloClases.indexOf(clase.key)].value.map((prof)=>
                                <option>
                                    {prof}
                                </option>)}
                            </select>
                        </div>
                        
                    )}
                </div>
                {/* Tercer semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Tercer Semestre</h2>
                    {clases.filter(clase => clase.value == "3").map((clase, index) =>
                        <div> 
                            <h1 key={index} className="mx-4">{clase.key}</h1>
                            <select>
                            {profesores[arregloClases.indexOf(clase.key)].value.map((prof)=>
                                <option>
                                    {prof}
                                </option>)}
                            </select>
                        </div>
                    )}
                </div>
                {/* Cuarto semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Cuarto Semestre</h2>
                    {clases.filter(clase => clase.value == "4").map((clase, index) =>
                        <div> 
                            <h1 key={index} className="mx-4">{clase.key}</h1>
                            <select>
                            {profesores[arregloClases.indexOf(clase.key)].value.map((prof)=>
                                <option>
                                    {prof}
                                </option>)}
                            </select>
                        </div>
                    )}
                </div>
                {/* Quinto semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Quinto Semestre</h2>
                    {clases.filter(clase => clase.value == "5").map((clase, index) =>
                        <div> 
                            <h1 key={index} className="mx-4">{clase.key}</h1>
                            <select>
                            {profesores[arregloClases.indexOf(clase.key)].value.map((prof)=>
                                <option>
                                    {prof}
                                </option>)}
                            </select>
                        </div>
                    )}
                </div>
                {/* Sexto semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Sexto Semestre</h2>
                    {clases.filter(clase => clase.value == "6").map((clase, index) =>
                        <div> 
                            <h1 key={index} className="mx-4">{clase.key}</h1>
                            <select>
                            {profesores[arregloClases.indexOf(clase.key)].value.map((prof)=>
                                <option>
                                    {prof}
                                </option>)}
                            </select>
                        </div>
                    )}
                </div>
                {/* Séptimo semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Séptimo Semestre</h2>
                    {clases.filter(clase => clase.value == "7").map((clase, index) =>
                        <div> 
                            <h1 key={index} className="mx-4">{clase.key}</h1>
                            <select>
                            {profesores[arregloClases.indexOf(clase.key)].value.map((prof)=>
                                <option>
                                    {prof}
                                </option>)}
                            </select>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Seleccion