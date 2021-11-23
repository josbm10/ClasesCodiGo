// string==================================
function contarOcurrencias(a, b) {
  let c = 0;
  for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) == b) {
      c = c + 1;
    }
  }
  console.log(c);
}
contarOcurrencias('abuuso', 'u');

function agregarIndice(a) {
  let c = '';
  for (let i = 0; i < a.length; i++) {
    c = c + a.charAt(i) + i;
  }
  console.log(c);
}
agregarIndice('sapoo');

// array=======================================================
function concatenar(a) {
  let c = '';
  for (let i = 0; i < a.length; i++) {
    c = c + a[i];
  }
  console.log(c);
}
concatenar(['h', 'o', 'l', 'a', 'y']);

function transformarATipos(a) {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    c[i] = typeof a[i];
  }
  console.log(c);
}
transformarATipos([1, 'casa', {}, function () {}, true]);

// objetos==========================================================

function aArrayDeValores(a) {
  let c = Object.values(a);
  console.log(c);
}
aArrayDeValores({ h: 1, d: 'z', c: 3, a: 'f', b: true });

function concatenarObj(a) {
  let d = '';
  let c = Object.values(a);
  for (let i = 0; i < c.length; i++) {
    d = d + c[i];
  }
  console.log(d);
}

concatenarObj({ a: 'h', b: 'o', c: 'l', d: 'a' });
