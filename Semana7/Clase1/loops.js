let users=[
  {age:34,name:"jose",lastname:"briceño"},
  {age:30,name:"luis",lastname:"briceño"},
  {age:39,name:"miguel",lastname:"briceño"},
  {age:15,name:"amed",lastname:"briceño"}];

  function esMayor(edad){
    return edad>30;
  }

  console.log("primer lemento",users[0].age,esMayor(users[0].age));
  console.log("primer lemento",users[1].age,esMayor(users[1].age));
  console.log("primer lemento",users[2].age,esMayor(users[2].age));

  for(let index=0;index<users.length;index++){
    console.log(`index of ${index} : ${esMayor(users[index].age)}`)
  }

  const number=[[1,5,8,9],[45,45,23,16,8,8]];

  for(let i=0;i<number.length;i++){
    console.log("array",number[i]);
    for(let j=0;j<number[i].length;j++){
      console.log("array del array",number[i][j]);
    }
  }


// while
let n=0;
while(n<3){
  n++;
  console.log("hasta que se cumpla");
}

// do-while
do{
  console.log("al menos una vez")}
while(false);

// break
for(let index=0;index<10;index++){
  console.log("index",index);
  if(index>=4)break;
}

// continue
for(let index=0;index<10;index++){
  if(index==4 || index==5 || index==6)continue;
  console.log("continue",index);
}

// for-in
const perro={
  raza:"doberman",
  edad:3,
  color:"negro",
  pais:"peru"
}
for(const key in perro){
  console.log("key",key);
  console.log("value",perro[key])
}