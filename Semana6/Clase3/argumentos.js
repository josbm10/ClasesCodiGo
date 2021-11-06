function fn(){
  // argumentos
  console.log(arguments.length)
  if(arguments.length>2){
    console.log("solo 2 argumentos permitidos")
  }
}

fn(2,3,4,5,6,"leo")
// parametro rest
function fn2(a,...b){
  console.log("a",a)
  console.log("resto",b)
}

fn2(2,5,4,8,9)
// CONSOLE
console.log("%c oh dios mio! ","background:white; color:red");
console.warn("warning")
console.info("info")
console.error("error")