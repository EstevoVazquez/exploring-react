import React, { Component } from 'react'

class InpuntNoContolado extends Component {
  nombre  = React.createRef();
  email = React.createRef();

  manejadorEnvioForm = () =>{
    const nombre = this.nombre.current.value
    const email = this.email.current.value
    this.props.onSend({nombre,email})
  }

  render(){
    return(
      <div>
        <input type='text' ref={this.nombre} placeholder= "nombre"></input> <br/>
        <input type='text' ref={this.email} placeholder= "email"></input><br/>
        <button onClick={this.manejadorEnvioForm}>enviar</button>
      </div>
    )
  }
}

class App extends Component {

  send = (data) => {
    console.log(data)
  }

  render () {
    return (
      <div>
        <h1>
          Inputs No controlados mediante Refs
        </h1>
        <InpuntNoContolado onSend ={this.send}></InpuntNoContolado>
      </div>
    )
  }
}

export default App