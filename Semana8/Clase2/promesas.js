// const promesa=new Promise(function(resolve,reject){
//   setTimeout(() => {
// resolve([0,1,1,2,3])
// //   }, 3000);
// // // })
// promesa.then((response)=>{
// console.log('response',response)
// })
// .catch((err)=>{
//   console.log('error',err)
// })

// fetch('https://swapi.dev/api/people')
// .then((resolve)=>{
//   return resolve.json();
// })
// .then((people)=>{
//   console.log('people',people)
// })
// .catch((err)=>{
//   console.log('error en promesa',err)
// })

async function main() {
  function createPokemons(pokemons) {
    pokemons.results.map(async (pokemon) => {
      console.log('pokemon', pokemon);
      const response = await fetch(pokemon.url);
      const pokemonDetail = await response.json();
      const container = document.querySelector('.container');

      let article = document.createElement('article');
      article.innerHTML = `
      <figure>
      <img src="${pokemonDetail.sprites.front_default}" alt="">
      </figure>
      ${pokemonDetail.name}`;

      article.onclick = function () {
        container.innerHTML = `
        <p>${pokemonDetail.abilities[0].ability.name}</p>
        <p>${pokemonDetail.abilities[1].ability.name}</p>
        `;

        console.log('pokemonDetalles', pokemonDetail);
      };
      container.appendChild(article);
    });
  }

  const responseJsonPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const responsePokemon = await responseJsonPokemon.json();
  createPokemons(responsePokemon);
  // fetch('https://pokeapi.co/api/v2/pokemon/')
  //   .then((resolve) => {
  //     return resolve.json();
  //   })
  //   .then((pokemons) => {
  //     createPokemons(pokemons);
  //   })
  //   .catch((err) => {
  //     console.log('error en promesa', err);
  //   });
}

async function prueba(){
  const promesa= new Promise(function(resolve,reject){
    setTimeout(() => {
      resolve([1,2,3,4])
    }, 3000);
  })

  try{
    const response=await promesa;
    console.log('response',response)
  } catch(e){
console.log('error',e)
  }
}
prueba()
