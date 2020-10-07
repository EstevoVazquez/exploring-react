import React, { Component } from 'react'

class InpuntNoContolado extends Component {

  state={
    tech:'React'
  }

  manejadorEnvioForm = (event) =>{
    const tech = event.target.value
    console.log(event.target.value)
    this.setState({tech})
    this.props.onSend({tech})
  }

  render(){
    return(
      <form>
        <select value={this.state.tech} onChange={this.manejadorEnvioForm}>
          <option value='Angular'>Angular</option>
          <option value='React'>React</option>
          <option value='Vue'>Vue</option>

        </select>
        <button >enviar</button>
      </form>
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
          Etiqueta Select
        </h1>
        <InpuntNoContolado onSend ={this.send}></InpuntNoContolado>
      </div>
    )
  }
}

export default App