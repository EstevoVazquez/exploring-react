import React from 'react'
import EventoPersonalizadoHijo from './EventoPersonalizadoHijo'

class EventoPersonalizado extends React.Component {

   
    manejador = (name) =>{
        alert(`HEY ${name} !!!!`)
    }

    render(){
        return (
            <div className='box red'> 
            <EventoPersonalizadoHijo onSaluda={this.manejador}></EventoPersonalizadoHijo>
            </div>
   )}
}

export default EventoPersonalizado