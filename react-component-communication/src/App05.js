import React, { Component } from 'react'
import PubSub from 'pubsub-js'

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
        Comunicacion entre componentes
      </div>
      <div style={subtitleStyles}>
      Comunicacion mediante Patron Render Prop

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


class List extends Component{
  render(){
    
    const {list, render} = this.props;
    return(

      <div style={boxStyles}>
        {list.map((item,index) => {
          if(render){
            return render(item,index)
          }
          return(
            <li key={item.name}>{item.name}</li>
          )
        })}
      </div>
    )
  }
}


class App extends Component {

  state = {
    fruits: [
      { name: 'Fresa', price: 22 },
      { name: 'Mango', price: 18 },
      { name: 'Sandia', price: 24 },
      { name: 'Manzana', price: 12 },
    ]
  }

  render () {
    const { fruits } = this.state
    return (
      <div 
      style={boxStyles}>
        <Header  />
       <List list={fruits} 
       render={(data, index)=>(
       <div>{data.name} - ${data.price}</div>
       )}/>
      </div>
    )
  }
}

export default App