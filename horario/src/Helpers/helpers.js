
const reorganizar = data => {
    const array = [];
    const d = data;
    for(let i = 0; i < 363; i++){
        const fila = { "Grupo": d.Grupo[i], "Asignatura" : d.Asignatura[i], "Profesor" : d.Profesor[i], "Edificio" : d.Edificio[i], "Salon" : d.Salon[i], "L" : d.Lun[i], "M" : d.Mar[i], "X": d.Mie[i], "J": d.Jue[i], "V" : d.Vie[i] }
        array.push(fila);
    }
    return array;
}

const materias = data => {
    const materias = new Map();
    for(let i = 0; i < data.length; i++){
        materias.set(data[i].Asignatura , data[i].Grupo[0]);
    }

    const array = [];
    materias.forEach((value, key, map)=>{
        const object = {key, value};
        array.push(object);
    })

    return  array;
}


export {
    reorganizar,
    materias
}