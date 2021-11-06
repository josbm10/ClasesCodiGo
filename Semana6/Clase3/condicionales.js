const max_age = 18;
const SEX = 'm';

function welcome(name) {
  return `welcome to the bar ${name}`;
}
function notwelcome(name) {
  return `no eres bienvenido ${name}`;
}
function notsupportage(name) {
  return `eres menor de edad ${name}`;
}

function elbar() {
  //debuger;//permite verificar paso apaso las ejecucione
  let name = prompt('ingrese su nombre');
  let age = Number(prompt('ingrese su edad'));
  let sex = prompt('ingrese su sexo');

  if (age > max_age && sex.toLocaleLowerCase() == SEX) {
    alert(welcome(name));
  } else if (age < max_age) {
    alert(notsupportage(name));
  } else {
    alert(notwelcome(name));
  }
}
// elbar();

// ---------------------------------------------------------
function flavornotfound(flavor) {
  return `el sabor ${flavor} no lo tenemos`;
}
function flavorchoose(flavor) {
  return `usted eligio el sabor ${flavor}`;
}

function heladeria() {
  let flavor = prompt(
    'ingrese su sabor : fresa, lucuma y durazno'
  ).toLocaleLowerCase();

  switch (flavor) {
    case 'fresa': {
      alert(flavorchoose(flavor));
      break;
    }
    case 'lucuma': {
      alert(flavorchoose(flavor));
      break;
    }
    case 'durazno': {
      alert(flavorchoose(flavor));
      break;
    }
    default: {
      alert(flavornotfound(flavor));
      break;
    }
  }
  alert('vuelva pronto');
}

// heladeria();

// -----------------------------------------------
// roptura de flujos:throw  try/catch/finally

function suma(a, b) {
  if (arguments.length > 2) throw console.error('argumentos no validos solo 2');
  return a + b;
}
// suma(2,3,5);

// funcion debe aceptar 7 a 9 caracteres

function savename(name) {
  let message = '';
  try {
    if (name.length < 6) throw 'short';
    if (name.length > 10) throw 'long';

    message=`el nombre ${name} es correcto`
  } catch (err) {
    if (err === 'short') {
      message = `el nombre ${name} es muy corto`;
    }
    if (err === 'long') {
      message = `el nombre ${name} es muy largo`;
    }
  }finally{
    console.log("nombre: ",message)
  }
}

savename("nana");
savename("sebastian");
savename("jose luis");
savename("eduardo");
