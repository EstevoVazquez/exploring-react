import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'


const Hola = () =>(
  <h1>hola</h1>
  )

const HolaNinja = () =>(
    <h1>hola Ninja</h1>
    ) 
const Productos = () =>(
  <h1>Productos</h1>
  )
const Home = () =>(
  <h1>Home</h1>
  )

// Como Renderizar componestes con Route

//component -> usa react create element (crea una funcion/compoente en cada renderizado)
//render -> recomendado cuando se utilizan componentes
// renderizado como hijo -> siempre se renderiza pero puede hacerse un condicional
const App = () => {
  return (
    <BrowserRouter >
      <Route path='/' exact component={Home}/>
      <Route path='/hola' exact strict render={Hola}/>
      <Route path='/productos' strict component={Productos}/>
      <Route path='/hola/ninja' exact>
        {({match})=>{
          if(!match) return null
          return( <HolaNinja></HolaNinja>)
        }}
      </Route>
    </BrowserRouter>
  );
}

export default App;
