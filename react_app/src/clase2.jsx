import React, { Children } from 'react'; //importando libreria react
import ReactDOM from 'react-dom'; //importando funcionalidad para renderizar lemntos en el virtual dome
import './index.css'; //importando css en js

function Header() {
  return <header>Header</header>;
}

function Main(props) {
  const { children }=props;
  return <main>{children}</main>;
}

function Footer() {
  return <footer>footer</footer>;
}

function Card(props) {
  const {name,lastname,age}=props;
  return (
  <article>
    <h2>nombre:{name}{lastname}</h2>
    <h2>edad:{age}</h2>
    </article>);
}

function SayHello(props){
  const{name='leonel',sex='m'}=props;
  return (
    <div>
      {name==='leonel'? <h2>bienvenido</h2> : <h2>no bienvenido</h2> }
      {sex=='f' && <h2>eres mujer</h2>}
    </div>
  )
}
function App() {

  const users=[{
    name:'leonel',
    lastname:'briceño',
    age:'25'
  },{
    name:'jose',
    lastname:'briceño',
    age:'25'
  },{
    name:'luis',
    lastname:'briceño',
    age:'25'
  }];

//main se abre y cierrra porque se configuro para recibir hijos
  return (
    <div>
      <Header />
      <Main>
        {/* <Card name='jose' lastname='briceño' age='25'/>
        <Card name='jose' lastname='briceño' age='25'/>
        <Card name='jose' lastname='briceño' age='25'/> */}
        {users.map((user)=>{
           <Card name={user.name} lastname={user.lastname} age={user.age}/>
        })}
        <SayHello name='jose' sex='f'/>
        <SayHello sex='f'/>
      </Main>
      <Footer />
    </div>
  )


}
ReactDOM.render(<App />, document.getElementById('root'));
