import React, { Component } from 'react'
import './App.css'


class App extends Component {

  state = {
    fruits: [
      { name: 'Fresa', price: 5.4 },
      { name: 'Manzana', price: 2.3 },
      { name: 'Sandia', price: 1.2 },
      { name: 'Guayaba', price: 5 },
      { name: 'Pera', price: 4.12 },
      { name: 'Kiwi', price: 3.87 },
      { name: 'Limon', price: 7.21 },
      { name: 'Melon', price: 6.21 },
      { name: 'Cereza', price: 4.98 }
    ],
    frutaSeleccionada:{}
  }

  select = (frutaSeleccionada, event) =>{
   this.setState({
     frutaSeleccionada:frutaSeleccionada
   })
  }

  render () {
    return (
      <div>
       <h3>Pasar datos en iteraciones</h3>
       <ul>
       {this.state.fruits.map(
         (fruit) =>(
           <li onClick = {this.select.bind(this,fruit)}
               style={{color: this.state.frutaSeleccionada.name === fruit.name? 'red':'black'}}>
             {fruit.name} - ${fruit.price}
           </li>
         )
       )}
       </ul>
       <h3>{JSON.stringify(this.state.frutaSeleccionada)}</h3>
      </div>
    )
  }
}

export default App