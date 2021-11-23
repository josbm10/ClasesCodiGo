// asincronismo=========

function createPeople(people){
  console.log('people',people);
  console.log('%o',JSON.parse(people).results)
  JSON.parse(people).results.map((person)=>{
    const card=document.createElement('article');
    card.innerHTML=`
    <p>Nombre ${person.name}</p>
    <p>Altura ${person.height} cm</p>
    <button>Films</button>`;

    card.querySelector('button').onclick=function(){
      console.log('person',person);
      let xhrfill=new XMLHttpRequest();
      xhrfill.open('GET','https://swapi.dev/api/films' )
      xhrfill.send(null)
      xhrfill.onload=()=>{
        console.log(xhrfill.response);
      }
    }
    document.querySelector('.container').appendChild(card)
  })
}
function getResponse(){
  createPeople(xhr.response);
}
function getError(){
  alert('intente mas tarde')
}

let xhr=new XMLHttpRequest();
xhr.open('GET','https://swapi.dev/api/people');
xhr.send(null);
xhr.onload=getResponse;
xhr.onerror=getError;
