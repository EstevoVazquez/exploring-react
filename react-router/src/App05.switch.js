import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'




const Home = (props) => {
  console.log(props)
  return (
    <h1>Home</h1>
  )
}


const Videos = () => (
  <h1>Videos</h1>
)

const PlayList = () => (
  <h1>PlayList</h1>
)

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
    <Switch>
      <Route path='/' exact render={Home} />
      <Route path='/videos' exact render={Videos} />
      <Route path='/videos' exact render={PlayList} />
      </Switch>
      
    </BrowserRouter>
  )
}

export default App