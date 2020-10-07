import React from 'react'
import {connect } from 'react-redux'
import { addFruit } from '../redux/actions/fuits.actions'


const Fruits = ({ fruits, addFruit }) =>{

    const handlerSubmit = (e) => {
        e.preventDefault()
        const name = e.target[0].value
        console.log(fruits)
        addFruit(name)
    }

    return (
        <div>
          <h1>Fruits</h1>
          <form onSubmit={handlerSubmit}>
            <input
              type='text'
              placeholder='Agrega tu Fruta'
            />
            <button>
              Agregar
            </button>
          </form>
          <ul>
            {fruits.map((fruit, index) => (
              <li >
                { fruit }
              </li>
            ))}
          </ul>
        </div>
      )
}

//mapea el estado devuelto por el store a las props de compoente
const mapStateToProps = (state) => {
    console.log(state)
    return {
      fruits: state.fruits
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addFruit: (fruit) => dispatch(addFruit(fruit))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Fruits)
