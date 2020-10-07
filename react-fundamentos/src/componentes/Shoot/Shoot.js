import React from 'react'
class Shoot extends React.Component {

    manejador = () =>{
        alert("SHOOT")
    }

    render(){
        return (
            <div>
                <button onMouseOver={this.manejador}>
                    Shoot
                </button>
            </div>
        )
    }
}

export default Shoot