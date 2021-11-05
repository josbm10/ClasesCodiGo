function calculadora() {
  // parseFloat permite ingresar valores flotantes
  let a = parseFloat(prompt('ingrese un numero a'));
  document.write("el valor de a es: ",a+"<br>")
  let b = parseFloat(prompt('ingrese un numero b'));
  document.write("el valor de b es: ",b+"<br>")
  if(isNaN(a) ){
    alert("un valor ingresado no es un numero");
  }
  if(isNaN(b)){
    alert("un valor ingresado no es un numero");
  }
    console.log('sumar a+b:', sumar(a, b));
    console.log('restar a-b:', restar(a, b));
    console.log('multiplicar a*b:', multiplicar(a, b));
    console.log('dividir a/b:', dividir(a, b));

    document.write('sumar a+b: ', sumar(a, b)+"<br>");
    document.write('restar a-b: ', restar(a, b)+"<br>");
    document.write('multiplicar a*b: ', multiplicar(a, b)+"<br>");
    document.write('dividir a/b: ', dividir(a, b)+"<br>");

  function sumar(a, b) {
    return a + b;
  }
  function restar(a, b) {
    return a - b;
  }
  function multiplicar(a, b) {
    return a * b;
  }
  function dividir(a, b) {
    return a / b;
  }
}

calculadora();
