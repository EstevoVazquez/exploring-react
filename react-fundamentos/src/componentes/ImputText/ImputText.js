import React from 'react'
class ImputText extends React.Component {

    state = {
        text: ''
    }
    manejador = (event) =>{
        this.setState(
            {
                text: event.target.value
            }
        )
    }

    render(){
        return (
            <div>
                <input onChange={this.manejador}
                />
            <h1>
                {this.state.text}
            </h1>

            </div>
        
        )
    }
}

export default ImputText