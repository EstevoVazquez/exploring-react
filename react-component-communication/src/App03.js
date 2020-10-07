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
        Observer Component (CualquierA - Libreria pubsub)
        <span role='img' aria-label='flame' >
          🔥
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


class Bisnieto extends Component{


  componentDidMount(){
    PubSub.subscribe("otro-evento", (event,data)=>{
        alert(data.title)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe("otro-evento")
  }


  handleClick = (event) => {
    console.log( "handleClick")
      PubSub.publish("saludo", "hola desde el bisnieto")
  }

  render(){
    return(
      <div style={redStyles}>Bisnieto
       <button onClick={this.handleClick}>Mandar Saludo</button>
      </div>
    )
  }
}

class App extends Component {

  componentDidMount(){
    PubSub.subscribe("saludo", (event,data)=>{
        alert(data)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe("saludo")
  }


  handleClick = () =>{
    PubSub.publish("otro-evento", {title:"hola desde el padre"})
  }

  render () {
    return (
      <div 
      style={boxStyles}>
        <button onClick={this.handleClick}>PADRE</button>
        <Header  />
       <Hijo />
      </div>
    )
  }
}

export default App