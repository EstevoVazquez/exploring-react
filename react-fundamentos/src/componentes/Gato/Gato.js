import React from 'react'

const Gato = (props) => {
  return(  <div>
              <h1>Gato 🐱 :3</h1>
              <pre> 
                {JSON.stringify(props,null,4)}
              </pre>
            </div>
  )
}

export default Gato