
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

const separarMaterias = (data, materias) =>{
    const separarMaterias = [];
    materias.forEach(materia => {
        const separado = data.filter( info => info.Asignatura === materia);
        separarMaterias.push(separado);
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
    console.log(horario);

    let dia = [];
    const dias = [];
    for(let i = 0; i < n; i++){
        dia=[];
        for(let j=0; j<a; j++){
            dia.push(horario[j][i]);
        }
        let traslape = 0;
        for(let x = 0; x < a-1; x++){
            for(let j=x+1; j < a; j++){
                console.log(dia[x], dia[j]);
                if(dia[x].L == dia[j].L) traslape=1;
                else if(dia[x].M == dia[j].M) traslape=1;
                else if(dia[x].X == dia[j].X) traslape=1;
                else if(dia[x].J == dia[j].J) traslape=1;
                else if(dia[x].V == dia[j].V ) traslape=1;
            }
        }
        if(traslape == 0)
            dias.push(dia);
    }
    return dias;
    
}

export {
    reorganizar,
    materias,
    separarMaterias,
    formarHorario
}