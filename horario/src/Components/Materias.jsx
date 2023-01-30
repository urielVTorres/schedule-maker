import React from 'react'

const Materias = ({clases, profesores, listaMaterias, setListaMaterias, arregloClase, setArregloClase, listaProfesores, setListaProfesores, arregloClases, value }) => {
    return (
        <div>
            {clases.filter(clase => clase.value == value).map((clase, index) =>
                <div key={index} className={`${arregloClase.indexOf(clase.key) !== -1 ? " bg-gradient-to-l shadow-md from-gray-50 to-slate-100 rounded-md p-2 m-2 font-bold border-2 border-gray-300" : " font-normal"}`}>
                    <h1 className="mx-4 hover:text-cyan-600 hover:cursor-pointer mb-2"
                        onClick={(e) => {
                            if (listaMaterias.indexOf(clase.key) === -1) {
                                setListaMaterias([...listaMaterias, clase.key]);
                                setArregloClase([...arregloClase, clase.key]);


                            }
                        }}
                    >{clase.key}</h1>
                    <div className={`my-2 px-10 flex gap-4 justify-between font-normal ${arregloClase.indexOf(clase.key) !== -1 ? " " : "hidden"}`}>
                        <label className='font-black text-red-600 hover:cursor-pointer'
                            onClick={() => {
                                const materiasActualizada = listaMaterias.filter(mat => mat !== clase.key);
                                setListaMaterias(materiasActualizada);

                                // let listaActualizada = [...listaProfesores];
                                // if(listaActualizada[0].indexOf(clase.key)!==-1){
                                //     listaActualizada[1]=listaActualizada[1].filter(prof => prof !== listaActualizada[1][listaActualizada[0].indexOf(clase.key)]);
                                //     listaActualizada[0]=listaActualizada[0].filter(mat => mat !== clase.key );
                                // }
                                // setListaProfesores(listaActualizada);
                                setArregloClase(arregloClase.filter(mat => mat !== clase.key));

                            }}
                        >X</label>
                        <label>Profesor:</label>
                        <select className='w-3/4' onChange={(e) => {
                            if (listaProfesores[0].indexOf(clase.key) === -1) {
                                if (e.target.value !== "Cualquiera")
                                    setListaProfesores([[...listaProfesores[0], clase.key], [...listaProfesores[1], e.target.value]]);
                            } else {
                                let listaActualizada = [...listaProfesores];
                                listaActualizada[1][listaActualizada[0].indexOf(clase.key)] = e.target.value;
                                if (e.target.value === "Cualquiera") {
                                    listaActualizada[0] = listaActualizada[0].filter(mat => mat !== clase.key);
                                    listaActualizada[1] = listaActualizada[1].filter(prof => prof !== "Cualquiera");
                                }
                                setListaProfesores(listaActualizada);
                            }
                        }}>
                            <option value="Cualquiera">Cualquiera</option>
                            {profesores[arregloClases.indexOf(clase.key)].value.map((prof, i) =>
                                <option key={i} value={prof}>
                                    {prof}
                                </option>)}
                        </select>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Materias