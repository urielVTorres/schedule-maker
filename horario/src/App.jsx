import { useState } from 'react';
import data from './assets/Horario.json'
import Horarios from './Components/Horarios'
import Seleccion from './Components/Seleccion';
import { reorganizar, materias, formarHorario, separarMaterias, profesores } from './Helpers/helpers';


function App() {
    //Almacena las materias que son seleccionadas [materia1, materia2,...].
    const [listaMaterias, setListaMaterias] = useState([]);
    //Almacena los profesores deseados y sus respectivas materias [ [materia1, materia2,...], [profMateria1, profMateria2,...]]
    const [listaProfesores, setListaProfesores] = useState([[], []]);
    const [saturado, setSaturado] = useState([[],[]]);
    //Contiene la información organizada de los horarios
    const schedules = reorganizar(data);
    //contiene el nombre de todas las materias de la carrera y sus profesores.
    const clases = materias(schedules);
    const profes = profesores(schedules); 
    //Contiene los posibles horarios ordenados según el tiempo que estarías en la escuela
    const horarios = formarHorario(separarMaterias(schedules, listaMaterias, listaProfesores, saturado)).slice(0, 100);
    return (
        <div className='p-5 bg-gray-50 font-Monserrat text-gray-800 overflow-hidden' >
            <h1 className='text-4xl my-5 text-center font-black'>CREA TU HORARIO</h1>

            {/* Seleccionar las clases a cursar  */}
            <Seleccion 
                clases={clases}
                profesores={profes}
                listaMaterias={listaMaterias}
                listaProfesores={listaProfesores}
                setListaMaterias={setListaMaterias}
                setListaProfesores={setListaProfesores}    
            />

            {/* Muestra los horarios en la pantalla */}
            <div className='bg-white border-2 border-gray-300 p-4 rounded-md'>
                <div className='flex gap-5 md:grid md:grid-cols-12 font-Raleway uppercase font-black text-md mb-3 overflow-auto'>
                    <span>Grupo</span>
                    <span className=' col-span-2 '>Asignatura</span>
                    <span className=' col-span-3 '>Profesor</span>
                    <span>Lu</span>
                    <span>Ma</span>
                    <span>Mi</span>
                    <span>Ju</span>
                    <span>Vi</span>
                    <span>¿Saturado?</span>
                </div>

                {horarios.map((clase, index) => (
                    <Horarios clase={clase} saturado={saturado} setSaturado={setSaturado} key={index} />
                ))}
            </div>

        </div>
    )
}

export default App
