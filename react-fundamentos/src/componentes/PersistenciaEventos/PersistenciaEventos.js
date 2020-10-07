import React from 'react'
class PersistenciaEventos extends React.Component {

    state = {
        color: 'blue'
    }
    manejador = (event) =>{
      const color = event.target.value;
      this.setState({color : color})
    }

    render(){
        return (
            <div>
               <input type="text" 
                onChange={this.manejador}/>
            <h1 style={{ color: this.state.color}}>
                {this.state.color}
            </h1>
            </div>
   )}
}

export default PersistenciaEventos