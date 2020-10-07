import React, { Component } from 'react'
import PubSub from 'pubsub-js'

const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px'
  }

  return (
    <header style={headerStyles}>
      <div>
        Comunicacion entre componentes
      </div>
      <div style={subtitleStyles}>
         Comunicacion mediante Contexto de React
        <span role='img' aria-label='flame' >
        </span>
      </div>
    </header>
  )
}
const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}


const blueStyles = {
  ...boxStyles,
  border: '1px solid blue',
}

const redStyles = {
  ...boxStyles,
  border: '1px solid red',
}


class Hijo extends Component{
  render(){
    return(
      <div style={boxStyles}>
       Hijo
       <Nieto/>
      </div>
    )
  }
}


class Nieto extends Component{
  render(){
    return(
      <div style={blueStyles}>
       Nieto
       <Bisnieto/>
      </div>
    )
  }
}


const Bisnieto = () =>(
      <Consumer>
        {(context)=>(
           <div style={redStyles}>Bisnieto
           <p>{context.clicks}</p>
           <button onClick={context.addClicks}>Mandar Saludo</button>
          </div>
        )
        }
     
      </Consumer>
    )

const {Provider,Consumer} = React.createContext()


class App extends Component {

  state ={
    clicks: 0
  }

  handleClick = () =>{
    console.log("state")
    this.setState(state => ({clicks: state.clicks + 1}))
  }

  render () {
    return (
      <Provider value ={{
        clicks: this.state.clicks,
        addClicks: this.handleClick
      }}>
      <div 
      style={boxStyles}>
        <button onClick={this.handleClick}>PADRE</button>
        <Header  />
       <Hijo />
      </div>
      </Provider>
    )
  }
}

export default App