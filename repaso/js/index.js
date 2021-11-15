// VARIABLES
// Existen 3 tipos de variables:
// * CONST => Es una variable de tipo inmutable, su valor no puede cambiar
// * LET => Es una variable de tipo mutable, su valor puede cambiar pero solo en el contexto del app
// * VAR => Es una variable de tipo mutable, su valor puede cambiar pero en contexto global

const edad = 19;
let nombre = "Juan";
var apellido = "Perez";

console.log("edad", edad);
console.log("nombre", nombre);

// cambiando el valor inicial de mis variables
nombre = "Perez";
apellido = "Juan";
console.log("=============================");
console.log("nombre", nombre);
console.log("apellido", apellido);

//* Arreglos => Son conjuntos de datos ordenados

let listaAlumnos = ["Juan", "Pepeito", "Luchito"];

console.log(listaAlumnos);

listaAlumnos.push("Lucas");

console.log(listaAlumnos);

// * objetos => Es un tipo de dato que puede contener varios datos de distintos tipos

const alumno = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 23,
  mayorDeEdad: true,
};

console.log(alumno);
console.log(alumno.nombre);
console.log(alumno.mayorDeEdad);

const peliculas = [
  {
    nombre: "Batman",
    year: 2019,
    pais: "Estados Unidos",
  },
  {
    nombre: "Spiderman",
    year: 2018,
    pais: "Estados Unidos",
  },
  {
    nombre: "Avengers",
    year: 2019,
    pais: "Estados Unidos",
  },
];

console.log(peliculas);

// Podemos usar la funcin map
peliculas.map((pelicula, index) => {
  console.log(index, pelicula.nombre + " " + pelicula.year);
});

console.log("==== FOR OF ====");
for (pelicula of peliculas) {
  console.log(pelicula.nombre);
}

console.log("==== FILTER ====");
const filtrado = peliculas.filter((pelicula) => pelicula.year === 2019);
console.log(filtrado);

// Arrow function

const imprimir = () => {
  console.log("Hola mundo");
};

const sumar = (numero1, numero2) => {
  // converrtir los datos a enterno
  const numero1Entero = +numero1;
  const numero2Entero = +numero2;
  return numero1Entero + numero2Entero;
};

const restar = function (numero1, numero2) {
  const numero1Entero = +numero1;
  const numero2Entero = +numero2;
  return numero1Entero - numero2Entero;
};

const sumarInLine = (numero1, numero2) => +numero1 + +numero2;

imprimir();

const suma = sumar(1, 2);
console.log("suma:", suma);


// Como obtener un elemento de mi html
const btnEnviar = document.querySelector("#btnEnviar");
const edad = document.querySelector("#edad");
const raza = document.getElementById("raza");
// como guardar los elementos del formulario en una lista
const listMascotas = [];

const formulario = {
  nombre: "",
  edad: "",
  raza: "",
};

const obtenerDataDelInput = (event) => {
  const { name, value } = event.target;

  formulario[name] = value;
};

btnEnviar.onsubmit = function (event) {
  // una accion de tipo sumbit debe tener un preventDefault
  // para evitar que la pagina se recargue
  event.preventDefault();
  listMascotas.push(formulario);

  console.log(listMascotas);
};

edad.oninput = function () {
  const maxLenght = this.getAttribute("data-length");

  if (+maxLenght + 1 === this.value.length) {
    raza.focus();
  }

  if (this.value.length > maxLenght) {
    this.value = this.value.slice(0, maxLenght);
  }
};