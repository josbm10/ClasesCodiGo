function uno() {
  let a = Number(prompt('ingrese un numero'));
  let b = Number(prompt('ingrese otro numero'));
  let suma = a + b;
  alert(`la suma es: ${suma}`);
}
function dos() {
  let a = Number(prompt('ingrese un numero'));
  let b = Number(prompt('ingrese otro numero'));
  let c = Number(prompt('ingrese otro numero'));
  let d = Number(prompt('ingrese otro numero'));
  let promedio = (a + b + c + d) / 4;
  alert(`la promedio es: ${promedio}`);
}
function tres() {
  let a = Number(prompt('ingrese base:'));
  let b = Number(prompt('ingrese altura:'));
  let area = a * b;
  alert(`la area del rectangulo es: ${area}`);
}
function cuatro() {
  let a = Number(prompt('ingrese base:'));
  let b = Number(prompt('ingrese altura:'));
  let area = (a * b) / 2;
  alert(`la area del triangulo es: ${area}`);
}
function cinco() {
  let a = Number(prompt('ingrese radio:'));
  let area = Math.PI * a * a;
  alert(`la area de la circunferencia es: ${area}`);
}
function seis() {
  let horas = Number(prompt('cuantos horas trabaja'));
  let precio = Number(prompt('costo por hora de trabajo'));
  let sueldo = precio * horas * 7;
  alert(`su sueldo es: ${sueldo}`);
}
function siete() {
  let metros = Number(prompt('cuantos metros tiene'));
  let pulgadas = metros / 0.0254;
  alert(`nesecita ${pulgadas} pulgadas`);
}

function ocho() {
  let soles = Number(prompt('cuantos soles tiene:'));
  let dolar = Number(prompt('precio dolar vs sol:'));
  let compra = soles / dolar;
  alert(`puede comprar ${compra} dolares`);
}
function nueve() {
  let nacimiento = Number(prompt('año de nacimineto:'));
  let presente = Number(prompt('año actual:'));
  let edad = presente - nacimiento;
  alert(`su edad actual es: ${edad}`);
}

function diez() {
  let a = Number(prompt('ingrese un numero:'));
  let b = Number(prompt('ingrese otro numero:'));
  let c = Number(prompt('ingrese otro numero:'));
  if (a > b) {
    if (b > c) {
      alert(`mayor: ${a} menor: ${c}`);
    } else {
      alert(`mayor: ${c} menor: ${b}`);
    }
  } else {
    if (a > c) {
      alert(`mayor: ${b} menor: ${c}`);
    } else {
      if (b > c) {
        alert(`mayor: ${b} menor: ${a}`);
      } else {
        alert(`mayor: ${c} menor: ${a}`);
      }
    }
  }
}

function once() {
  let a = Number(prompt('ingrese años de trabajo:'));
  switch (a) {
    case '1': {
      alert(`bono por ${a} años:$100`);
      break;
    }
    case '2': {
      alert(`bono por ${a} años:$200`);
      break;
    }
    case '3': {
      alert(`bono por ${a} años:$300`);
      break;
    }
    case '4': {
      alert(`bono por ${a} años:$400`);
      break;
    }
    case '5': {
      alert(`bono por ${a} años:$500`);
      break;
    }
    default: {
      alert(`bono por ${a} años:$1000`);
      break;
    }
  }
}

function doce() {
  let salario = 1500;
  for (let i = 1; i < 6; i++) {
    salario = salario + salario * 0.1;
    alert(`salario en el año ${i} = ${salario}`);
  }
}

function trece() {
  let x = Number(prompt('cuantos alumnos tiene:'));
  let aprobado = 0;
  let desaprobado = 0;
  for (let i = 1; i <= x; i++) {
    let nota = Number(prompt(`nota del alumnos: ${i}`));
    if (nota <= 20 && nota >= 11) {
      aprobado = aprobado + 1;
    } else if ((nota < 11) & (nota >= 0)) {
      desaprobado = desaprobado + 1;
    } else {
      i = i - 1;
      alert(`nota no valida`);
    }
  }
  alert(`aprobados: ${aprobado} desaprobados: ${desaprobado}`);
}

function catorce() {
  let x = Number(prompt('cuantos focos tiene:'));
  let verde = 0;
  let rojo = 0;
  let blanco = 0;
  for (let i = 1; i <= x; i++) {
    let color = prompt(`color del foco:${i} solo verde(v), rojo(r) o blanco(b)`).toLocaleLowerCase;
    if (color = "v") {
      verde = verde + 1;
    } else if (color = "r") {
      rojo = rojo + 1;
    } else if (color = "b") {
      blanco = blanco + 1;
    } else {
      i = i - 1;
      alert(`color no valido`);
    }
  }
  alert(`verde: ${verde} rojo: ${rojo} blanco: ${blanco}`);
}

function quince(){
  let x = Number(prompt('cuantos electores tiene:'));
  let vota = 0;
  let novota = 0;
  for (let i = 1; i <= x; i++) {
    let edad = Number(prompt(`edad del elector: ${i}`));
    if (edad>=18 && edad<120) {
     vota = vota + 1;
    } else if (edad<18) {
      novota = novota + 1;
    } else {
      i = i - 1;
      alert(`edad no valido o su edad es muy avanzada`);
    }
  }
  alert(`electores totales = votan: ${vota} no votan: ${novota}`);
}



