import React, { Component } from 'react'


class App extends Component {

  state = {
   text: "hola"
  }

   title = React.createRef()


  dispatch = () => {
    this.setState({
      text: "Adios Bye!!"
    })
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log(this.title.current.innerText)
    return "Hola desde getSnaptShotBeforeUpdate"
  }

  
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("componentDidUpdate")
    console.log(this.title.current.innerText)

  }

  render () {
    return (
      <div>
        <h1>Metodo getSnapShotBeforeUpdate</h1>
        <h2 ref={this.title}>{this.state.text}</h2>
        <button
          onClick={this.dispatch}>Dispatch</button>
      </div>
    )
  }
}

export default App