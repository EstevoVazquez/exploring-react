import React, { Component } from 'react'

class Http extends Component {

  state={
    photos: []
  }


  componentDidMount(){
    //solicitudes HTTP 
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(photos => {
      console.log(photos)
      this.setState({ photos })})

    //Agregar event listeners
  }



  render(){
   const {photos} = this.state
   
    return(
      <div>
        {photos.map(photo => (
          <img key={photo.id}
               src={photo.thumbnailUrl}
               alt={photo.title}
          />
        ))}
      </div>
    )
  }
  
}
class Events extends Component {
  state = {
    width: window.innerWidth
  }

  componentDidMount () {
    window.addEventListener('resize', this.handlerResize)
  }

  handlerResize = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  render () {
    return (
      <div>
        <h2>Events { this.state.width }</h2>
      </div>
    )
  }
}



class App extends Component {


  render () {
    return (
      <div>
        <Events/>
        <h1>Metodo ComponentDidMount</h1>
        <Http/>
      </div>
    )
  }
}

export default App