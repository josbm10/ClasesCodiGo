// variables
// las variables son contenedoras de valores existen diferentes tipos de variables
// entre ellas tenemos a let y const y una que es recomendable usar tipo var


// let
let nombre="leonel";
let apellido;
let edad=26;
console.log(nombre);
console.log(apellido)
apellido="briceño"
console.log(apellido)

// const
const pi=3.14
console.log(pi)
//  pi=2 ;//no lo remplaza


//  tipos de datos
let user="leonel" ;// string
let age=26; //number
let isMan=true; //boolean verdadero o falso true o false
let account=null; //null
let marriage; //undefined
let hash=Symbol("12345"); //simbol---valor unico
let alumno={sexo:"f",curso:5,edad:23}


console.log(user,typeof user)
console.log(age,typeof age)
console.log(isMan,typeof isMan)
console.log(account,typeof account)
console.log(marriage,typeof marriage)
console.log(hash,typeof hash)
console.log(alumno,typeof alumno)

// cambiar tipo de datos

let age2=30;
let age3="30";
console.log(age2,typeof age2);
console.log(age2,String(age2).replace("30",200));
console.log(age2,typeof Boolean(age2));
console.log(age3,Number(age3).toFixed(2));