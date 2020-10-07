import React from 'react'
class PreventDefault extends React.Component {

    state = {
        text: ''
    }
    manejador = (event) =>{
        console.log(event.target)
        event.preventDefault();
    }

    render(){
        return (
            <div>
               <a href="https://www.google.es" onClick={this.manejador}>GOOGLE</a>
            </div>
        
        )
    }
}

export default PreventDefault