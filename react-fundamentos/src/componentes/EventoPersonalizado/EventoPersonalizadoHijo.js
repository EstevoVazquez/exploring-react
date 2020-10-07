import React from 'react'


class EventoPersonalizado extends React.Component {

    state = {
        color: 'blue'
    }

    manejador = () =>{
        this.props.onSaluda("ESTEVO")
    }

    render(){
        return (
            <div className='box blue'> 
            <h1>
                Hijo
            </h1>
            <button onClick ={this.manejador}>Saluda Padre</button>
            </div>
   )}
}

export default EventoPersonalizado