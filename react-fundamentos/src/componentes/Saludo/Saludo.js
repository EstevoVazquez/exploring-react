import React from 'react'
    
const Saludo = (props) =>{
    if(props.saluda){
      return (
        <h1> Hola, que tal ? :)</h1>
      )
    }
    return(
      <h1>A ti no te saludo :(</h1>
    )
  }

export default Saludo