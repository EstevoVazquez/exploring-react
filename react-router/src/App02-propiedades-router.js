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

  // propiedades del componente Route

 // exact -> renderiza la url solo si coincide exatamente
 //strict -> tiene en cuenta lo "/" a la hora de evaluar la ruta
 //sensitive -> tiene en cuenta mayusculas a la hora de evaluar la ruta
const App = () => {
  return (
    <BrowserRouter >
      <Route path='/' exact component={Home}/>
      <Route path='/hola/' strict component={Hola}/>
      <Route path='/Hola/ninja' sensitive component={HolaNinja}/>
      <Route path='/productos' strict component={Productos}/>
    </BrowserRouter>
  );
}

export default App;
