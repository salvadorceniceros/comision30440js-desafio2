class Alumno{
    constructor(matri, nomb, curp, acent, corr){
        this.matricula = matri;
        this.nombre = nomb;
        this.curp = curp;
        this.acentuacion = acent;
        this.correo = corr;
    }
    fechaNacimiento(){
        return this.curp[4]+this.curp[5]+"/"+this.curp[6]+this.curp[7]+"/"+this.curp[8]+this.curp[9];
    }
    obtenerGenero(){
        return this.curp[10];
    }    
}

alumno1 = new Alumno(00112197, "Salvador Ceniceros", "CESS820515HDGNLL04", "Endodoncia", "salvadore20@hotmail.com")

let fechaN = alumno1.fechaNacimiento();
console.table(alumno1);
// console.log(new Date(fechaN));
console.log(`La fecha de nacimiento del alumno es: ${alumno1.fechaNacimiento()}`);

let sexo = alumno1.obtenerGenero();
if (sexo == 'H'){
    sexo = "Hombre";
    console.log(`El genero del alumno es: ${sexo}`);
}else if(sexo == 'M'){
    sexo = 'Mujer';
    console.log(`El genero del alumno es: ${sexo}`);
}
console.log(`Resultado mostrado en consola...`);   