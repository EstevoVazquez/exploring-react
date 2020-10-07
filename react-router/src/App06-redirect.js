import React from 'react'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import './App.css'

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
    <NavLink to='/perfil' activeClassName='active'>Perfil</NavLink>
    <NavLink to='/login' activeClassName='active'>Login</NavLink>
  </nav>
)


const Home = (props) => {
  console.log(props)
  return (
    <h1>Home</h1>
  )
}


const isAuth = false;

const Login = (props) => (
  <div>
    <h1>Login</h1>
    {props.location.state != null && <h1>{props.location.state.message}</h1> }
  </div>
)

const Perfil = () => { 
  
  return isAuth? (<h1>Bienvenido a tu Perfil</h1>) : <Redirect to ={{
    pathname: '/login',
    state:{
      message: 'Debes hacer login para acceder a tu perfil'
    }
  }}></Redirect>

}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const NavActive = {
  color: 'orangered'
}



const App = () => {
  return (
    <BrowserRouter>
    <Navegation></Navegation>
      <Route path='/' exact render={Home} />
      <Route path='/login' exact render={Login} />
      <Route path='/perfil' exact render={Perfil} />
      <Redirect from='/p' to='/perfil'></Redirect>
    </BrowserRouter>
  )
}

export default App