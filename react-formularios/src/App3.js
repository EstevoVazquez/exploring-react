import React, { Component } from 'react'

class InpuntContolado extends Component {
  state = {
    text: '',
    tieneError: false
  }

  actulizar = (event) =>{
    const text = event.target.value;
    const tieneError = this.hasError(text)
    this.setState({text,tieneError})
    this.props.onChange(this.props.name, text);

  }

  hasError = (text) =>  {
    return (text !== '' && text.length < 5)
  }

  render(){
    const styles ={
      border: this.state.tieneError? '1px solid red' : '1px solid blue',
      outline: 'none'
    }

    return(
        <input type='text'
               placeholder= {this.props.placeHolder}
               value ={this.state.text}
               onChange = {this.actulizar}
               style={styles}>
        </input>
    )
  }
}

class App extends Component {
  state = {
    name: '',
    email: ''
  }
  actualizar = (nombre,valor) => {
    console.log(nombre  + ' ' + valor)
    this.setState({
      [nombre]: valor
    })
  }

  render () {
    return (
      <div>
        <h1>
          Inputs Controlados
        </h1>
        <InpuntContolado
          onChange={this.actualizar}
          name ='name'
          placeHolder="Nombre Completo"/>
        <InpuntContolado
          onChange={this.actualizar}
          name ='email'
          placeHolder="Email"/>
          <h2>
            nombre: {this.state.name}
          </h2>
          <h2>
            email: {this.state.email}
          </h2>
      </div>
    )
  }
}

export default App