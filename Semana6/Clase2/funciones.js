function sumar(a,b){
  return a+b;
}
function restar(a,b){
  return a-b;
}

console.log(sumar(2,3));
console.log(sumar(3,5));
console.log(sumar(5,6));
console.log(sumar(7,8));


console.log(restar(8,8));
console.log(restar(17,8));
console.log(restar(98,8));
console.log(restar(45,8));


// padron autoejecutable:permite que una funcion solo sea ejecutables desde el mismo documento donde se declara
// no permite el llamado desde otros documentos
(function(){
  function calculadora(){
  // parseFloat permite ingresar valores flotantes
  let a=parseFloat(prompt("ingrese un numero a"));
  let b=parseFloat(prompt("ingrese un numero b"));

  console.log("restar a-b:",restar(a,b));
  console.log("sumar a+b:",sumar(a,b));
}

// calculadora();

})();
