// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, { Children } from 'react'; //importando libreria react
import ReactDOM from 'react-dom'; //importando funcionalidad para renderizar lemntos en el virtual dome
import './index.css'; //importando css en js

function Header() {
  return <header>Header</header>;
}

function Main(props) {
  const { children } = props;
  return <main>{children}</main>;
}

function Footer() {
  return <footer>Header</footer>;
}

function Card() {
  return <article>Card</article>;
}
function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        {new Date().toLocaleTimeString()}
        <Card />
      </Main>
      <Footer />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

function appjs() {
  const header = document.createElement('header');
  header.innerHTML = 'header';
  const main = document.createElement('main');
  main.innerHTML = `main
  ${new Date().toLocaleTimeString}`;
  const footer = document.createElement('footer');
  footer.innerHTML = 'footer';

  const ren = document.createElement('div');
  ren.innerHTML = `${header.outerHTML}
  ${footer.outerHTML}`;

  ren.appendChild(main)

  document.querySelector('#root').innerHTML='';
  document.querySelector('#root').appendChild(ren);
}

setInterval(App, 1000);
