import React from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import './App.css'

const Hola = () => (
  <h1>Hola</h1>
)

const Productos = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Productos</h1>
      <Link to='/productos/gamers'>Gamers</Link>
      <Link to='/productos/hogar'> Hogar</Link>
    </div>
  )
}


const ProductosCategoria = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h1>Categoria: {match.params.categoria}</h1>
    </div>
  )
}

const Home = (props) => {
  console.log(props)
  return (
    <h1>Home</h1>
  )
}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const NavActive = {
  color: 'orangered'
}


const Ropa = ({location}) => {
  console.log(location)
  const query = new URLSearchParams(location.search);

  const color = query.get('color')
  const talla = query.get('talla')

  return (
    <div>
      <h1>Ropa</h1>
      <h1>color: {color}</h1>
      <h1>talla: {talla}</h1>
    </div>
  )
}

const Navegation = () => (
  <nav style={navStyles}>
    <NavLink
      to='/'
      exact
      activeStyle={NavActive}
    >
      Home
    </NavLink>
    <NavLink
      to='/hola'
      activeClassName='navActive'
    >
      Hola
    </NavLink>
    <NavLink
      to='/productos'
      activeStyle={NavActive}
      isActive={(match, location) => {
        console.log(match)
        if (!match) return false
        return !match.isExact
      }}
    >
      Productos
    </NavLink>
    <NavLink
      to='/ropa'
      activeClassName='navActive'
    >Ropa</NavLink>
  </nav>
)

const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route path='/' exact render={Home} />
      <Route path='/hola' render={Hola} />
      <Route path='/productos' render={Productos} />
      <Route path='/productos/:categoria/:id?' render={ProductosCategoria} />
      <Route path='/ropa' render={Ropa} />
    </BrowserRouter>
  )
}

export default App