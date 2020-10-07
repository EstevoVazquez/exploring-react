import React, { Component } from 'react'

class InpuntNoContolado extends Component {
  manejadorEnvioForm = (event) => {
    event.preventDefault()
    const nombre = event.target[0].value
    const email = event.target[1].value
    this.props.onSend({ nombre, email })
  }

  render() {
    return (
      <form onSubmit={this.manejadorEnvioForm}>
        <p>
          <label htmlFor='name'> Nombre </label>
        </p>
        <input id='name' type='text' placeholder="nombre"></input>
        <p>
          <label htmlFor='email'> Email </label>
        </p>
        <input id='email' type='text' placeholder="email"></input><br />
        <button >enviar</button>
      </form>
    )
  }
}

class App extends Component {

  send = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div>
        <h1>
          Inputs No controlados mediante forms
        </h1>
        <InpuntNoContolado onSend={this.send}></InpuntNoContolado>
      </div>
    )
  }
}

export default App