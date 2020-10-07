import React, { Component, useState } from 'react'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }

  return (
    <header style={styles}>
      <h1>
        Hook useState
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span> 
      </h1>
    </header>
  )
}

const App = () =>{
//controlar la Asignación desestructurante  use state es un array!!
//clicks -> variable estado
//setclicliks setter del estado
//useState recibe como parametro el valor de estado
const [clicks, setClicks]= useState(0)


const addClicks = ()=>{
  setClicks(clicks +1)
}

//ojo addClicks es interno a la funcion no se refencia con this como en las clases
  return (
    <div>
      <Header />
      <button onClick={addClicks}>
        Clicks ({ clicks })
      </button>
    </div>
  )
}


// class App extends Component {
//   state = {
//     clicks: 0
//   }

//   addClicks = () => {
//     this.setState(state => ({
//       clicks: state.clicks + 1
//     }))
//   }

//   render () {
//     const { clicks } = this.state
//     return (
//       <div>
//         <Header />
//         <button onClick={this.addClicks}>
//           Clicks ({ clicks })
//         </button>
//       </div>
//     )
//   }
// }

export default App