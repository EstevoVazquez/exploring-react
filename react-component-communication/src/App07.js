import React, { Component } from 'react'
import propTypes from 'prop-types'

const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px'
  }

  return (
    <header style={headerStyles}>
      <div>
      ( Hijo ←→ Padre )
      </div>
      <div style={subtitleStyles}>
      HOC
      High Order Component 

        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}
const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}


const blueStyles = {
  ...boxStyles,
  border: '1px solid blue',
}

const redStyles = {
  ...boxStyles,
  border: '1px solid red',
}

const withCounter = (Comp, config) =>{

  return class extends Component{
    state = {
      num: config.clicks
    }
    add = () => {
      this.setState(state =>({num: state.num + config.sumClicks}))
    }
    render(){
      return(
        <Comp num={this.state.num}
          add = {this.add}
        />
      )
    }
  }


}

class App extends Component {

  render () {
    console.log(this.props)
    return (
      <div 
      style={boxStyles}>
        <Header  />
        <h1>{this.props.num}</h1>
        <button onClick = {this.props.add}>+</button>
      </div>
    )
  }
}

export default withCounter(App,{clicks:100, sumClicks:3})