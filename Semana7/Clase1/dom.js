const h1 = document.querySelector('h1');

console.log('h1 %0', h1);

h1.textContent = 'text modificado x js';
h1.style.color = 'red';
h1.style.fontSize = '50px';
h1.style.background = 'orange';

h1.onclick = function () {
  this.style.fontSize = `${
    Number(this.style.fontSize.replace('px', '')) + 10
  }px`;
};

h1.onmouseenter = function () {
  console.log('entra');
  this.style.backgroundColor = 'pink';
};

h1.onmouseout = function () {
  console.log('sale');
  this.style.backgroundColor = 'orange';
};

function submitForm() {
  let form = document.querySelector('form');
  const inpName = document.querySelector('.js_name');
  const inpLastname = document.querySelector('.js_lastname');
  const inpPassword = document.querySelector('.js_password');

  form.onsubmit = function (event) {
    event.preventDefault();
    console.log('Name', inpName.value);
    console.log('Name', inpLastname.value);
    console.log('Name', inpPassword.value);
  };
}

submitForm();


// query selctor

const titulo=document.querySelector("h1");
console.log("titulo",titulo);
// query selcctor all
const list=document.querySelectorAll("li");
for(let index=0;index<list.length;index++){
  list[index].style.color="white";
  list[index].style.backgroundColor="yellow";
}



const ul=document.querySelector("ul");
// childNodes
console.log("childNodes",ul.childNodes);
// children
console.log("childNodes",ul.children);
// firstchild
console.log("childNodes",ul.firstChild);
// first elemnt child
console.log("childNodes",ul.firstElementChild);
// last child
console.log("childNodes",ul.lastChild);
// last elemnt child
console.log("childNodes",ul.lastElementChild);
// sibling
console.log("sibling",ul.firstElementChild.nextElementSibling.nextElementSibling);
// previus
console.log("sibling",ul.lastElementChild.previousElementSibling);

// parent
console.log("parent",ul.parentElement);
console.log("parent",ul.firstElementChild.parentElement);
// closest
console.log("parent",document.querySelector("a").closest("body"));
console.log("parent",document.querySelector("a").closest("body").querySelector("form"));