import React, { Component } from 'react'


const users = [
  { id: 1, name: 'Gerado Gallegos', country: 'Mexico'},
  { id: 2, name: 'Leanne Graham', country: 'USA'},
  { id: 3, name: 'Ervin Howell', country: 'Colombia'},
  { id: 4, name: 'Rodrigo Fernandez', country: 'Peru'},
  { id: 5, name: 'Alfredo Bauch', country: 'Guatemala'},
  { id: 6, name: 'Fernanda Valencia', country: 'España'}
]
class App extends Component {

  render() {
    return (
      <div>
        <h3>Añadiendo keys a las listas ⭐️</h3>
        <ul>
          {users.map(
            (user)=>(
              <li key= {user.id}>
                {user.name}
                </li>
            )
          )}
        </ul>
      </div>
    )
  }
}

export default App