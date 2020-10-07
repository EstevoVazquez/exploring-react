import React, { Component } from 'react'

const frutas = [
  'fresa',
  'manzana',
  'sandia',
  'kiwi',
  'durazno',
  'mango',
  'piña',
  'mango'
]

class App extends Component {
  render () {
    return (
      <div>
        <h1>Lista String</h1>
        <ul>
          {frutas.map((fruta) =>{
            return(
              <li>{fruta}</li>
            )
          })}
        </ul>
        <h1>Lista String</h1>
      </div>
    )
  }
}

export default App