import React, { Component } from 'react'

class App extends Component {
  state = {
    movie: {},
    isLoading: false
  }

  componentDidMount() {
  }

  manejador = (event) => {
    this.setState({isLoading:true})
    event.preventDefault()
    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'
    fetch(url + '&t=' + title)
      .then(response => response.json())
      .then(movie => {
        console.log(movie)
        this.setState({
          movie: movie,
          isLoading: false
        })
      })
  }

  render() {
    const styles = {
      width: "400px"
    }
    const {Title, Plot, Poster} = this.state.movie
    const {isLoading} = this.state
    return (
      <div>
        <h1>Buscador Peliculas</h1>
        <form onSubmit={this.manejador}>
          <input
            style={styles}
            type='text'
            placeholder="Nombre Pelicula"
          />
          <button>buscar</button>
        </form>
        { isLoading && (<h2>Cargando..</h2>)}

        {Title && !isLoading &&(<div>
          <h1>{Title}</h1>
          <p>{Plot}</p>
          <img src={Poster} alt="cartel"></img>

        </div>)}
      </div>
    )
  }
}

export default App