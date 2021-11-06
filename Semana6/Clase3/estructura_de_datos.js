let numbers=[1,2,3,4,5,6,7,8,9,10];
let nombres=["jose","luis","pepe"];
let prueba=[["zero",2,3,4],2,[1,2,3],2,3,6,8,[["juan"],2]];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

console.log(prueba[7][0][0]);


numbers.length;//longitud del array
numbers.push()//añade un elemnto al final
numbers.pop()//elimina el ultimo elemento
numbers.unshift()//añade un elemnto al inicio
numbers.shift()//elimina un elemento del inicio
numbers.splice(2,3)//elimina 3 elemntos despues de posicion 2
numbers.slice()//copia el array


// get------------------
let alumno={
  name:"leonel",//propiedades
  lastname:"briceño",
  age:26,//valores
  grade:5,
getname:function(){//metodos
  return this.name;
},
getfullname:function(){
  return `${this.name} ${this.lastname}`;
}
}

console.log("alumno",alumno.name);
console.log("alumno",alumno.getfullname());

let profesor = {
  nombre: 'sebastian',
  lastname: 'yabiku',
  age: 35,
  grade: 5,
  sex: 'm',
  experience: [
    {
      college: 'santisima trinidad',
      age: 2022,
    },
    {
      college: 'recoleta',
      age: 2000,
    },
  ],
};

const alumnos = [
  {
    nombre: 'sebastian',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  },
  {
    nombre: 'jose',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  },
  {
    nombre: 'pedro',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  },
  {
    nombre: 'hector',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  },
];

console.log('alumnos', alumnos);

for (let index = 0; index < alumnos.length; index++) {
  console.log(alumnos[index]);
}
