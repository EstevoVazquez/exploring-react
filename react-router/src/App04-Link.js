import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'


const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}


//replace -> sobreescibre la ultima ruta del historial
//state para mandar informacion a traves de las props
const Navigation = () => {

  return (
    <nav style={navStyles}>
      <Link to={
        {
          pathname: '/',
          search:'?ordenar=nombre',
          hash: '#un-hash',
          state:{
            name: 'Ninja pro',
            age:34
          }
        }
      }>Home</Link>
      <Link to="/hola">Hola</Link>
      <Link to="/productos" replace>Productos</Link>
    </nav>
  )

}


const Hola = () => (
  <h1>hola</h1>
)

const HolaNinja = () => (
  <h1>hola Ninja</h1>
)
const Productos = () => (
  <h1>Productos</h1>
)
const Home = (props) => {
 console.log(props.location.state)
return(
  <div>
    <h1>Home</h1>
  </div>
)
}

const App = () => {
  return (
    <BrowserRouter >
      <Navigation/>
      <Route path='/' exact component={Home} />
      <Route path='/hola' exact strict render={Hola} />
      <Route path='/productos' strict component={Productos} />
    </BrowserRouter>
  );
}

export default App;
