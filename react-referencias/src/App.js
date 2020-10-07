import React, { Component } from 'react'
import Chart from 'chart.js'


const FancyImput = React.forwardRef((props,ref) => (
  <div>
      <input type='text' ref={ref}/>
  </div>
  ))


class App extends Component {
  referencia = React.createRef()

  componentDidMount(){
    console.log(this.referencia)
  }

  render () {

    return (
      <div>
        <h1>Envio de referencias</h1>
        <FancyImput  ref={this.referencia} />
      </div>
    )
  }
}

export default App