/*
 getAlumnos
 Funcion que invoca endpoint alumnos
*/
function getAlumns() {
  fetch('http://localhost:3000/alumnos')
    .then((response) => response.json())
    .then((alumnos) => {
      alumnos.map((alumno) => {
        addElementDom(makeCard(alumno));
      });
    });
}
// deleteAlumn :funcion que elimina al alumno
function deleteAlumn(id){
fetch(`http://localhost:3000/alumnos/${id}`,{
  method:'DELETE'
})
}

/*
 makeCard
 Funcion construyo nodo con valores de alumno
*/
function makeCard(alumno) {
  const { name, lastname, age, id } = alumno;

  const article = document.createElement('article');
  article.classList.add('article');
  article.innerHTML = `
    <h2><span>Nombre</span> ${name} ${lastname}</h2>
    <h2><span>Edad</span> ${age}</h2>
    <button class="js_edit edit">Edit</button>
    <button class="js_delete delete">Delete</button>
  `;

  article.querySelector('.js_delete').onclick = () => {
    if(confirm('DESEA ELIMINAR AL ALUMNO')){
    deleteAlumn(id)
    }
  };

  article.querySelector('.js_edit').onclick = () => {
    console.log('edit');
    location.replace(`./edit.html?id=${id}`);
  };

  return article;
}

/*
 addElementDom
 Funcion que agrega elemento al dom #container
*/
function addElementDom(element) {
  const container = document.querySelector('#container');
  container.appendChild(element);
}

getAlumns();
