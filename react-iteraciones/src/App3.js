import React, { Component } from 'react'

class App extends Component {
  state = {
    user: {
      name: 'Esteban vazquez',
      country: 'Galicia',
      twitter: '@Estevo_'
    }

  }

  render() {
    const { user } = this.state;
    const keys = Object.keys(user);
    return (
      <div>
        <h3>Iterando Propiedades de un objeto ⭐️</h3>
        <ul>
          {keys.map((key) => {
            return (
              <li>
                <strong>{key}</strong>: {user[key]}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App