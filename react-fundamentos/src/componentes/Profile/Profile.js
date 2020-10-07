import React, { Component } from 'react'
import propTypes from 'prop-types'

const nop = () =>{}

class Profile extends Component {
  static propTypes = {
    name: propTypes.string.isRequired,
    bio: propTypes.string,
    email: propTypes.string,
    age: propTypes.number
  }

  static defaultProps = {
    name:"Estevo",
    onHello: nop
  }

  saluda = ()=> {
      this.props.onHello()
  }
  render () {
    const { name, bio, email } = this.props
    return (
      <div>
        <h1>{ name }</h1>
        <p>
          { bio }
        </p>
        <a href={`mailto:${email}`}>
          { email }
        </a>
        <button onClick ={this.saluda}> saluda </button>
      </div>
    )
  }
}
export default Profile