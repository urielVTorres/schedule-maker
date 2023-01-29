
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

const separarMaterias = (data, materias, profesores) =>{
    const separarMaterias = [];
    materias.forEach(materia => {
        const index = profesores[0].indexOf(materia)
        if(index !== -1){
            const separado = data.filter( info => info.Asignatura === materia && info.Profesor === profesores[1][index]);
            separarMaterias.push(separado);
        } else {
            const separado = data.filter( info => info.Asignatura === materia);
            separarMaterias.push(separado);
        }
    });
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
    console.log(dias);
    return dias;
}

export {
    reorganizar,
    materias,
    separarMaterias,
    formarHorario
}