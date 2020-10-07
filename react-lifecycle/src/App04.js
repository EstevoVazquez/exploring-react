import React, { Component } from 'react'


class UserDetails extends Component{

 state ={
   user:{}
 }

 componentDidMount(){
  this.fetchData()
 }

 fetchData = () => {
  const URL ='https://jsonplaceholder.typicode.com/users/' + this.props.userId
  fetch(URL)
  .then(res => res.json())
  .then(user => this.setState({user:user}))
 }

 componentDidUpdate(prevProps){
  if(prevProps.userId !== this.props.userId){
    this.fetchData()
  }
 }

  render(){

    return(
      <div>
        <h2>User Details</h2>
        <pre>
          {JSON.stringify(this.state.user, null, 4)}
        </pre>
      </div>

    )
  }
}


class App extends Component {

  state = {
    id:1
  }

  aumentar = () =>{
    console.log("aumentar")
      this.setState({
        id : this.state.id + 1
      })
  }

  render () {
    const {id} = this.state
    return (
      <div>
        <h1>Metodo ComponentDidUpdate</h1>
        <h2>{id}</h2>
        <button onClick={this.aumentar}>Aumentar</button>
        <UserDetails userId={id} />
      </div>
    )
  }
}

export default App