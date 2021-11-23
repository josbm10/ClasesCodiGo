// sessionstorage:mientras el navegador esta abierto

sessionStorage.setItem('clave', 1234);
console.log(sessionStorage.getItem('clave'));
console.log(sessionStorage);
sessionStorage.removeItem('clave');
console.log(sessionStorage);

// localstorage:informacion persiste anque se cierre pestaña

localStorage.setItem('clave', 1234); //setear un valor
console.log(localStorage.getItem('clave')); //obtener el valor
console.log(localStorage);
localStorage.removeItem('clave'); //remover el valor
console.log(localStorage);

// json stringify:guarda en formato json
const numeros = [0, 1, 2, 3, 4];
sessionStorage.setItem('numeros', JSON.stringify(numeros)); //guarda en json
JSON.parse(sessionStorage.getItem('numeros')); //lo convierte a array

const objeto = { name: 'luis', age: 25 };
sessionStorage.setItem('obejeto', JSON.stringify(objeto)); //guarda en json
JSON.parse(sessionStorage.getItem('objeto')); //lo convierte a objeto
