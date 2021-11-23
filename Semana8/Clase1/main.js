const cadena = '  jose leonel';

console.log('longitud', cadena.length);
console.log('concat', cadena.concat(' briceño'));
console.log('includes', cadena.includes('jose'));
console.log('endwith', cadena.endsWith('el'));
console.log('startwith', cadena.startsWith('o'));
console.log('indexof', cadena.indexOf('l'));
console.log('lastindex', cadena.lastIndexOf('l'));
console.log('replace', cadena.replace('leonel', 'briceño'));
console.log('slice', cadena.slice(3, 7));
console.log('split', cadena.split('j'));
console.log('tolowercase', cadena.toLowerCase());
console.log('touppercase', cadena.toUpperCase());
console.log('trim', cadena.trim());

console.log('==================array=================');

const num = [1, 2, 3, 4, 5, 6, 7, 8];
const num2 = [8, 7, 6];

console.log('lenght', num.length);
console.log('isArray', Array.isArray(num));
console.log('Arrayof', Array.of('jose'));
console.log('concat', num.concat(num2));
console.log('includes', num.includes(4));
console.log('indexof', num.indexOf(5));
console.log('join', num.join('/'));
console.log('keys', num.keys().next());
console.log('lastindexof', num.lastIndexOf(3));
console.log('reverse', num.reverse());
console.log('shift', num.shift());
console.log('unshift', num.unshift());
console.log('slice', [1, 2, 3].slice(1, 4));

const spliceVar = [1, 2, 3];

console.log('splice', spliceVar.splice(1, 1));
console.log('splicevar ', spliceVar);
console.log('push', num.push(78));
console.log('pop', num.pop(78));

// ==================array metodos=========

const alumnos = [
  { name: 'leonel', edad: 24, sexo: 'm' },
  { name: 'jose', edad: 14, sexo: 'm' },
  { name: 'elisa', edad: 54, sexo: 'f' },
];

const alumnosFullData = alumnos.map((alumno) => {
  return {
    ...alumno,
    grado: 5,
    colegio: 'san juan bosco',
  };
});

console.log('alumnos', alumnos);
console.log('alumnosFullData', alumnosFullData);

// =================filter ==================

const mayoresde30 = alumnos.filter((alumno) => {
  return alumno.edad > 30;
});
// const mayoresde30=alumnos.filter((alumno)=>alumno.edad>30);

console.log('alumnos mayores', mayoresde30);

// ==========find=====================
const alumnojose = alumnos.find((alumno) => alumno.name === 'jose');
console.log('alumno jose', alumnojose);

// =========find index===================================
const alumnojosepos = alumnos.findIndex((alumno) => alumno.name === 'jose');
console.log('alumno jose posicion', alumnojosepos);

// ================some ===========================

const mayoresde30existe = alumnos.some((alumno) => alumno.edad > 30);
console.log('existe alumnos mayores', mayoresde30existe);

// ============every==============================
const mayoresde30todos = alumnos.every((alumno) => alumno.edad > 30);
console.log('todos son mayores', mayoresde30todos);

// ===========reduce=============================
const numeros = [1, 2, 3, 4, 5];
const resultados = numeros.reduce((acumulado, valoractual) => {
  console.log('acumulado', acumulado);
  console.log('valoractual', valoractual);
  return valoractual + acumulado;
}, 0);
//=======================  object========================================
const objecto1 = {
  name: 'leonel',
  country: 'perusalem',
};
const objecto2 = {
  name: 'jose',
  country: 'perukistan',
};
// ================object.assign: hace copias de objetos===============
const copia = Object.assign({}, objecto1, objecto2);
console.log('copia', copia);

// ================object.entries : entrega coleccion clave-valor===============
console.log('object.entries', Object.entries(copia));

// ================object.key : entrega coleccion con las llaves del objeto
console.log('object.keys', Object.keys(copia));

// ================object.value : entrega coleccion con los valores del objeto
console.log('object.value', Object.values(copia));

// ================object.hasOwnProperty : entrega valor booleano si la propiedad existe en el objeto
console.log('object.hasOwnProperty', Object.hasOwnProperty('name'));

// ================number=====================================00
// =================parseInt===========================
console.log(Number.parseInt('3.000'));
// =================parseFloat===========================
console.log(Number.parseFloat('3.14'));
// =================parseFloat fixed===========================
console.log(Number.parseFloat('3.146').toFixed(5));

// =====================Math=========================
// =====pow : potencia=====
console.log(Math.pow(9, 3));
// =====round: redondear numero=====
console.log(Math.round(10.5));

// ====================date===========
console.log('getDate', new Date().getDate());
console.log('getMonth', new Date().getMonth());
console.log('getDay', new Date().getDay());
console.log('getHours', new Date().getHours());
console.log('getMinutes', new Date().getMinutes());
console.log('getSeconds', new Date().getSeconds());

// WINDON=================================
// alert (desea salir?)
// promp (ingrese numero?)
// confirm (existe?)

setTimeout(() => {
  console.log('segundos', new Date().getSeconds());
}, 3000);

let refInterval = setInterval(() => {
  console.log('segundos', new Date().getSeconds());
}, 1000);

document.querySelector('button').onclick = function () {
  clearInterval(refInterval);
};

document.querySelector('a').onclick = (e) => {
  e.preventDefault();
  window.open('http://www.domainname.ext/path/ImageFile.png','_blank','DescriptiveWindowName','resizable,scrollbars,status');
};
// history=============
// location
location.replace('google.com')
