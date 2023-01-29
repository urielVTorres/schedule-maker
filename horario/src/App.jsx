import { useState } from 'react';
import data from './assets/Horario.json'
import Horarios from './Components/Horarios'
import { reorganizar, materias, formarHorario, separarMaterias } from './Helpers/helpers';
function App() {
  const [listaMaterias, setListaMaterias] = useState([ "ANALISIS Y DISEÑO DE ALGORITMOS", "PARADIGMAS DE PROGRAMACION", "CALCULO APLICADO", "ECUACIONES DIFERENCIALES", "FUNDAMENTOS DE DISEÑO DIGITAL", "CIRCUITOS ELECTRICOS", "FINANZAS EMPRESARIALES"]);
  const [listaProfesores, setListaProfesores] = useState([ ["CALCULO APLICADO", "ECUACIONES DIFERENCIALES"], ["VIVEROS VELA KARINA", "JUAREZ RAMIREZ JAZMIN ADRIANA"]]);
  const schedules = reorganizar(data);
  const clases = materias(schedules);
  const horarios = formarHorario(separarMaterias(schedules, listaMaterias, listaProfesores));
//   console.log(horarios);
  return (
    <div className='m-5' >
      <h1 className='text-5xl my-5 text-center font-black'>¡¡CREADOR DE HORARIOS AUTOMÁTICO!!</h1>
      {/* Seleccionar las clases a cursar  */}
      <h1 className='text-3xl'>Seleccione las clases a cursar:</h1>
      <div className='p-2 m-5 grid grid-cols-2 gap-5 h-96 overflow-auto bg-slate-300 rounded-3xl'>
        {/* Primer semestre */}
        <div className='p-3'>
          <h2 className='text-2xl uppercase my-3'>Primer Semestre</h2>
          {clases.filter( clase => clase.value == "1" ).map( (clase, index) => 
            <h1 key={index} className="mx-4">{clase.key}</h1>
          )}
        </div>
        {/* Segundo semestre */}
        <div className='p-3'>
          <h2 className='text-2xl uppercase my-3'>Segundo Semestre</h2>
          {clases.filter( clase => clase.value == "2" ).map( (clase, index) => 
            <h1 key={index} className="mx-4">{clase.key}</h1>
          )}
        </div>
        {/* Tercer semestre */}
        <div className='p-3'>
          <h2 className='text-2xl uppercase my-3'>Tercer Semestre</h2>
          {clases.filter( clase => clase.value == "3" ).map( (clase, index) => 
            <h1 key={index} className="mx-4">{clase.key}</h1>
          )}
        </div>
        {/* Cuarto semestre */}
        <div className='p-3'>
          <h2 className='text-2xl uppercase my-3'>Cuarto Semestre</h2>
          {clases.filter( clase => clase.value == "4" ).map( (clase, index) => 
            <h1 key={index} className="mx-4">{clase.key}</h1>
          )}
        </div>
        {/* Quinto semestre */}
        <div className='p-3'>
          <h2 className='text-2xl uppercase my-3'>Quinto Semestre</h2>
          {clases.filter( clase => clase.value == "5" ).map( (clase, index) => 
            <h1 key={index} className="mx-4">{clase.key}</h1>
          )}
        </div>
        {/* Sexto semestre */}
        <div className='p-3'>
          <h2 className='text-2xl uppercase my-3'>Sexto Semestre</h2>
          {clases.filter( clase => clase.value == "6" ).map( (clase, index) => 
            <h1 key={index} className="mx-4">{clase.key}</h1>
          )}
        </div>
        {/* Séptimo semestre */}
        <div className='p-3'>
          <h2 className='text-2xl uppercase my-3'>Séptimo Semestre</h2>
          {clases.filter( clase => clase.value == "7" ).map( (clase, index) => 
            <h1 key={index} className="mx-4">{clase.key}</h1>
          )}
        </div>
      </div>
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

      {schedules.map((clase, index) => (
        <Horarios clase={clase} key={index} />
      ))}
      
    </div>
  )
}

export default App
