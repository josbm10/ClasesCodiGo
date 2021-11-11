const button = document.querySelector('button');
const dropbox = document.querySelector('.js_dropbox');

button.onclick = function (event) {
  if (dropbox.style.display === 'block') {
    this.textContent = 'ABRIR DROPDOWN';
    dropbox.style.display = 'none';
  } else {
    this.textContent = 'CERRAR DROPDOWN';
    dropbox.style.display = 'block';
  }
};

const input = document.querySelector('input[type="text"]');
console.log('input', input);
input.onkeyup = function () {
  console.log('acaa', this.value);
};
const checkbox = document.querySelector('input[type="checkbox"]');
console.log('input', checkbox);
input.onkeyup = function () {
  console.log('acaa', this.checked);
};

window.onresize = function () {
  console.log('resize', window.innerWidth, window.innerHeight);
};

const form = document.querySelector('form');

form.onsubmit = function (evt) {
  evt.preventDefault();
  console.log(
    'nombre',
    this.querySelector("input[placeholder='nombre' ").value
  );
  console.log(
    'nombre',
    this.querySelector("input[placeholder='apellido' ").value
  );
};

function fnone() {
  console.log('fnone');
}
function fntwo() {
  console.log('fntwo');
}
function fnthree() {
  console.log('fnthree');
}

button.addEventListener('click', fnone);
button.addEventListener('click', fntwo);
button.addEventListener('click', fnthree);

const buttonquit = document.querySelector('.js_quit');
buttonquit.addEventListener('click', function () {
  console.log('quitar evento');
  button.removeEventListener('click', fnthree);
});

document.querySelector('body').querySelector('mousemove', function () {
  console.log(event.clientX);
  console.log(event.clientY);

  this.style.backgroundColor =`rbg(
    $(Math.floor(Math.random()*255)),
    $(Math.floor(Math.random()*255)),
    $(Math.floor(Math.random()*255))
    )`;
}
);
