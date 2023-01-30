import React, {useState, useEffect} from 'react'
import Materias from './Materias';

const Seleccion = ({ clases, profesores, listaMaterias, listaProfesores, setListaMaterias, setListaProfesores }) => {
    const [arregloClase, setArregloClase] = useState([]);
    const arregloClases = [];
    for(let i = 0; i < clases.length; i++){
        arregloClases.push(clases[i].key);
    }
    useEffect(()=>{
    },[listaMaterias, listaProfesores])

    return (
        <>
            <h1 className='text-3xl'>Seleccione las clases a cursar:</h1>
            <div className='p-2 m-5 grid grid-cols-1 md:grid-cols-2 gap-5 h-72 overflow-auto bg-white rounded-md border-2 border-gray-300 shadow-md font-Raleway'>
                {/* Primer semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Primer Semestre</h2>
                    <Materias
                        clases={clases}
                        profesores={profesores}
                        listaMaterias={listaMaterias} 
                        setListaMaterias={setListaMaterias} 
                        arregloClase={arregloClase} 
                        setArregloClase={setArregloClase} 
                        listaProfesores={listaProfesores}
                        setListaProfesores={setListaProfesores} 
                        arregloClases={arregloClases}
                        value="1" 
                    />
                </div>
                {/* Segundo semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Segundo Semestre</h2>
                    <Materias
                        clases={clases}
                        profesores={profesores}
                        listaMaterias={listaMaterias} 
                        setListaMaterias={setListaMaterias} 
                        arregloClase={arregloClase} 
                        setArregloClase={setArregloClase} 
                        listaProfesores={listaProfesores}
                        setListaProfesores={setListaProfesores} 
                        arregloClases={arregloClases}
                        value="2" 
                    />
                </div>
                {/* Tercer semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Tercer Semestre</h2>
                    <Materias
                        clases={clases}
                        profesores={profesores}
                        listaMaterias={listaMaterias} 
                        setListaMaterias={setListaMaterias} 
                        arregloClase={arregloClase} 
                        setArregloClase={setArregloClase} 
                        listaProfesores={listaProfesores}
                        setListaProfesores={setListaProfesores} 
                        arregloClases={arregloClases}
                        value="3" 
                    />
                </div>
                {/* Cuarto semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Cuarto Semestre</h2>
                    <Materias
                        clases={clases}
                        profesores={profesores}
                        listaMaterias={listaMaterias} 
                        setListaMaterias={setListaMaterias} 
                        arregloClase={arregloClase} 
                        setArregloClase={setArregloClase} 
                        listaProfesores={listaProfesores}
                        setListaProfesores={setListaProfesores} 
                        arregloClases={arregloClases}
                        value="4" 
                    />
                </div>
                {/* Quinto semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Quinto Semestre</h2>
                    <Materias
                        clases={clases}
                        profesores={profesores}
                        listaMaterias={listaMaterias} 
                        setListaMaterias={setListaMaterias} 
                        arregloClase={arregloClase} 
                        setArregloClase={setArregloClase} 
                        listaProfesores={listaProfesores}
                        setListaProfesores={setListaProfesores} 
                        arregloClases={arregloClases}
                        value="5" 
                    />
                </div>
                {/* Sexto semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Sexto Semestre</h2>
                    <Materias
                        clases={clases}
                        profesores={profesores}
                        listaMaterias={listaMaterias} 
                        setListaMaterias={setListaMaterias} 
                        arregloClase={arregloClase} 
                        setArregloClase={setArregloClase} 
                        listaProfesores={listaProfesores}
                        setListaProfesores={setListaProfesores} 
                        arregloClases={arregloClases}
                        value="6" 
                    />
                </div>
                {/* Séptimo semestre */}
                <div className='p-3'>
                    <h2 className='text-2xl uppercase my-3'>Séptimo Semestre</h2>
                    <Materias
                        clases={clases}
                        profesores={profesores}
                        listaMaterias={listaMaterias} 
                        setListaMaterias={setListaMaterias} 
                        arregloClase={arregloClase} 
                        setArregloClase={setArregloClase} 
                        listaProfesores={listaProfesores}
                        setListaProfesores={setListaProfesores} 
                        arregloClases={arregloClases}
                        value="7" 
                    />
                </div>
            </div>
        </>
    )
}

export default Seleccion