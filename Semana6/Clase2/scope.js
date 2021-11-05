let variableuno=10;
let variabledos=20;
let variabletres=30;
let variablecuatro=40;

console.log(variableuno);
console.log(variabledos);
console.log("age3",age3);
age3="20 jose";
console.log("age3",age3);


let nameoneglobal="fn_global";

function fnone(){
  let nameone="fn_one";
  let nametwo=30;
  console.log("nameone",nameone)
  console.log("nameoneglobal en fnone",nameoneglobal)
}

function fntwo(){
  let nameone="fn_two";
  let nametwo=30;
  console.log("nameone",nameone)
  console.log("nameoneglobal en fntwo",nameoneglobal)
}

fnone();
fntwo();

console.log("nameoneglobal",nameoneglobal)