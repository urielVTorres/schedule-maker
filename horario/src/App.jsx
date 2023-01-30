import { useState } from 'react';
import data from './assets/Horario.json'
import Horarios from './Components/Horarios'
import Seleccion from './Components/Seleccion';
import { reorganizar, materias, formarHorario, separarMaterias, profesores } from './Helpers/helpers';


function App() {
    //Almacena las materias que son seleccionadas [materia1, materia2,...].
    const [listaMaterias, setListaMaterias] = useState(["ANALISIS Y DISEÑO DE ALGORITMOS", "PARADIGMAS DE PROGRAMACION", "CALCULO APLICADO", "ECUACIONES DIFERENCIALES", "FUNDAMENTOS DE DISEÑO DIGITAL", "CIRCUITOS ELECTRICOS", "FINANZAS EMPRESARIALES"]);
    //Almacena los profesores deseados y sus respectivas materias [ [materia1, materia2,...], [profMateria1, profMateria2,...]]
    const [listaProfesores, setListaProfesores] = useState([["CALCULO APLICADO", "ECUACIONES DIFERENCIALES"], ["VIVEROS VELA KARINA", "JUAREZ RAMIREZ JAZMIN ADRIANA"]]);
    //Contiene la información organizada de los horarios
    const schedules = reorganizar(data);
    //contiene el nombre de todas las materias de la carrera y sus profesores.
    const clases = materias(schedules);
    const profes = profesores(schedules); 
    //Contiene los posibles horarios ordenados según el tiempo que estarías en la escuela
    const horarios = formarHorario(separarMaterias(schedules, listaMaterias, listaProfesores)).slice(0, 20);
    console.log(horarios)
    return (
        <div className='m-5' >
            <h1 className='text-5xl my-5 text-center font-black'>¡¡CREADOR DE HORARIOS AUTOMÁTICO!!</h1>

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
            <div className='grid grid-cols-12'>
                <span>Grupo</span>
                <span className=' col-span-3 '>Asignatura</span>
                <span className=' col-span-3 '>Profesor</span>
                <span>Lunes</span>
                <span>Martes</span>
                <span>Miércoles</span>
                <span>Jueves</span>
                <span>Viernes</span>
            </div>

            {horarios.map((clase, index) => (
                <Horarios clase={clase} key={index} />
            ))}

        </div>
    )
}

export default App
