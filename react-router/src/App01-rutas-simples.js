import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'


const Hola = () =>(
  <h1>hola</h1>
  )
const Productos = () =>(
  <h1>Productos</h1>
  )


const App = () => {
  return (
    <BrowserRouter >
      <Route path='/hola' component={Hola}/>
      <Route path='/productos' component={Productos}/>
    </BrowserRouter>
  );
}

export default App;
