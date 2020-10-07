import React, { Component } from 'react'


class App extends Component {

 state={
   checked:true
 }

 handler= (event) =>{
   console.log(event.target.checked)
   this.setState({checked: event.target.checked})
 }

  render () {

    const { checked } = this.state

    return (
      <div>
        {checked &&(
          <h1>
            Checkbox
          </h1>
        )}
          <form>
            <input type="checkbox" 
            checked={this.state.checked} 
            onChange={this.handler}></input>
          </form>
      </div>
    )
  }
}

export default App