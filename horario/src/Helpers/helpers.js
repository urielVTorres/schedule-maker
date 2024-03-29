//Reestructura la información del archivo json en filas con información de cada elemento del horario.
const reorganizar = data => {
    const array = [];
    const d = data;
    console.log(d["Grupo"]);
    for(let i = 0; i < Object.keys(d.Grupo).length; i++){
        const fila = { "Grupo": d.Grupo[i], "Asignatura" : d.Asignatura[i], "Profesor" : d.Profesor[i], "Edificio" : d.Edificio[i], "Salon" : d.Salon[i], "L" : d.Lun[i], "M" : d.Mar[i], "X": d.Mie[i], "J": d.Jue[i], "V" : d.Vie[i] }
        array.push(fila);
    }
    console.log(array);
    return array;
}

//Devuelve una lista con las materias de la carrera y los profesores que la imparten
const profesores = data => {
    const profes = new Map();
    let size = 0;
    for(let i = 0; i < data.length; i++){
        if(!profes.has(data[i].Asignatura))
            profes.set(data[i].Asignatura , [data[i].Profesor]);
        else {
            if(profes.get(data[i].Asignatura).indexOf(data[i].Profesor) == -1){
                const nuevo = [data[i].Profesor, ...profes.get(data[i].Asignatura)];
                profes.set(data[i].Asignatura, nuevo);
            }
        }
    }

    const array = [];
    profes.forEach((value, key, map)=>{
        const object = {key, value};
        array.push(object);
    })

    return  array;
}

//Devuelve una lista con las materias de la carrera
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

const separarMaterias = (data, materias, profesores, saturados) =>{
    let separarMaterias = [];
    //Deja en el arreglo solo las materias seleccionadas, con los profesores seleccionados si es el caso
    materias.forEach(materia => {
        const index = profesores[0].indexOf(materia)
        if(index !== -1){
            let separado = data.filter( info => info.Asignatura === materia && info.Profesor === profesores[1][index]);
            separarMaterias.push(separado);
        } else {
            let separado = data.filter( info => info.Asignatura === materia);
            separarMaterias.push(separado);
            }
        });
    //Elimina del arreglo las materias de grupos saturados
    saturados[0].forEach((grupo, index) => {
        const actualizado = separarMaterias.map(materia => materia.filter(info => !(info.Grupo === grupo && info.Asignatura === saturados[1][index])))
        separarMaterias = actualizado;
    })
    // console.log(separarMaterias);
    return separarMaterias;
}



const formarHorario = materias => {
    let n = 1;
    let b = 1;
    const horario = [];

    materias.forEach(materia => {
        n = n*materia.length;
    });
    let z = 0;
    let a = materias.length;
    for(let j = a - 1 ; j >= 0; j--){
        z=0;
        const matTemp = [];
        for(let i = 0; i < n; i++){
            if(i%b==0) z++;
            if(z==materias[j].length){ 
                z=0;
            }
            matTemp.push(materias[j][z]);
        }
        b=b*materias[j].length;
        horario.push(matTemp);
    }

    let dia = [];
    const dias = [];
    let traslape;
    for(let i = 0; i < n; i++){
        dia=[];
        traslape=0;
        let menorL = 25;
        let menorM = 25;
        let mayorL = 0;
        let mayorM = 0;

        for(let j=0; j<a; j++){
            dia.push(horario[j][i]);
        }
        for(let x = 0; x < a; x++){
            for(let j=0; j < a; j++){
                if(x==j) continue;
                if(dia[x].L === dia[j].L && dia[x].L !== null) {
                    traslape=1
                }
                else if(dia[x].M === dia[j].M && dia[x].M !== null) {
                    traslape=1
                }
                else if(dia[x].X === dia[j].X && dia[x].X !== null) traslape=1;
                else if(dia[x].J === dia[j].J && dia[x].J !== null) traslape=1;
                else if(dia[x].V === dia[j].V && dia[x].V !== null) traslape=1;
            }
            if(traslape == 0){
                let lunes, martes;
                if(dia[x].L !== null)
                    lunes = Number(dia[x].L.substring(0,2)) 
                else if(dia[x].X !== null)
                    lunes = Number(dia[x].X.substring(0,2)) 
                if(dia[x].M !== null)
                    martes = Number(dia[x].M.substring(0,2)) || Number(dia[x].J.substring(0,2))
                else if(dia[x].J !== null){
                    martes = Number(dia[x].J.substring(0,2))
                }
                if(menorL > lunes) menorL = lunes;
                if(mayorL < lunes) mayorL = lunes;
                if(menorM > martes) menorM = martes;
                if(mayorM < martes) mayorM = martes;
            }
        }
        if(traslape == 0){
            const horas = mayorL-menorL + mayorM - menorM + 3;    
            dias.push({dia, horas});
        }
    }
    dias.sort((a, b) => {
        if(a.horas < b.horas) return -1;
        else if(a.horas > b.horas) return 1;
        else return 0;
    })
    // console.log(dias);
    return dias;
}

export {
    reorganizar,
    profesores,
    materias,
    separarMaterias,
    formarHorario
}