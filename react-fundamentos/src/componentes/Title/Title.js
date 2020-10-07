import React from 'react'
    
const Title = (props) =>{
  
  const styles = {
    background: props.uiColor
  }

      return (
        <h1 style = {styles}> {props.children}</h1>
      )
    }
   

export default Title