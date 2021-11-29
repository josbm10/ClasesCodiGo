import React from 'react'; //importando libreria react
import ReactDOM from 'react-dom'; //importando funcionalidad para renderizar lemntos en el virtual dome
import './index.css';

function Header(props) {
  const { children } = props;
  return <header>{children}</header>;
}

function Main(props) {
  const { children } = props;
  return <main className="main">{children}</main>;
}
function Nav(props) {
  const { children } = props;
  return <nav className="nav">{children}</nav>;
}

function Footer(props) {
  const { children } = props;
  return <footer>{children}</footer>;
}
function BtnCard(props) {
  return (
    <div className="btn_card">
      <button className="btn_cardRest">-</button>
      <h4>0</h4>
      <button className="btn_cardAdd">+</button>
    </div>
  );
}
function BtnNav(props) {
  return <button className="btn_nav">AGREGAR PRODUCTO</button>;
}
function Card(props) {
  const { name, price, photo } = props;
  return (
    <article className="article">
      <img src={photo} alt={`{name}`} />
      <h3>Nombre : {name}</h3>
      <h3>Precio : S/{price}</h3>
      <BtnCard />
    </article>
  );
}

function App() {
  const fruits = [
    {id:1,
      name: 'Mandarina',
      price: 2.5,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Belle_de_Boskoop_apple.jpg/300px-Belle_de_Boskoop_apple.jpg',
    },
    {id:2,
      name: 'Manzana',
      price: 4,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Belle_de_Boskoop_apple.jpg/300px-Belle_de_Boskoop_apple.jpg',
    },
    {id:3,
      name: 'Papaya',
      price: 5,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Belle_de_Boskoop_apple.jpg/300px-Belle_de_Boskoop_apple.jpg',
    },
    {
      id:4,
      name: 'Durazno',
      price: 9,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Belle_de_Boskoop_apple.jpg/300px-Belle_de_Boskoop_apple.jpg',
    },
  ];
  //main se abre y cierrra porque se configuro para recibir hijos
  return (
    <div>
      <Header>
        <h2>Shoping Car</h2>
        <Nav>
          <BtnNav />
          <img src="./img/Vector.png" alt='car' />
        </Nav>
      </Header>
      <Main>
        <h3>Productos</h3>
        <div className='main_grip'>
          {fruits.map((fruit) => (

              <Card key={fruit.id} name={fruit.name} price={fruit.price} photo={fruit.photo} />

          ))}
        </div>
      </Main>
      <Footer>
        <h3>Todos los Derechos reservados | 2020</h3>
        <h3>creado por codiGO</h3>
      </Footer>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
