/* class Materia {
    constructor(cveMat,nombreMat,credMat,semMat){
            this.clave=parseInt(cveMat);
            this.nombre=nombreMat;
            this.creditos=parseInt(credMat);
            this.semestre=parseInt(semMat);
        }
}

const materias=[];
let respuesta = 's';
while (respuesta == 'S' || respuesta == 's'){
    let claveMateria = parseInt(prompt('Clave de la Materia:'));
    let nombreMateria = prompt('Nombre de la Materia:');
    let creditoMateria = parseInt(prompt('Cuantos créditos tiene la materia:'));
    let semestreMateria = parseInt(prompt('Semestre de la Materia:'));
    materias.push(new Materia(claveMateria, nombreMateria, creditoMateria, semestreMateria));
    respuesta = prompt('Desea continuar capturando otra materia \nS = Si \nN = No');
}

for (let j = 0; j <= materias.length; j++){
                       //0 Primera materia
    console.log(materias[j].clave,materias[j].nombre,materias[j].creditos,materias[j].semestre);
    
}
 */
let boton = document.getElementById("boton1")

// boton.addEventListener("click", clickHandler);

// function clickHandler(){
//     alert('Dio click al boton');
// }
// boton.addEventListener('click', () => console.log('Dio un click'));

boton.onclick = () => console.log('Dio un click');

