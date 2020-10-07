import React from 'react'
import { connect } from 'react-redux'
import {increment, decrement} from '../redux/actions/counter.action'



const Counter = (props) =>{
    console.log(props)

    return(
        <div>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
              <h1>{props.count}</h1>
        </div>
    )
}


//mapea el estado devuelto por el store a las props de compoente
const maptStateToProps = (state) =>{
  return {
    count: state.counter,
    name: state.user.name
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
     increment : () => dispatch(increment()),
     decrement : () => dispatch(decrement()) 
    }
}


export default connect(maptStateToProps,mapDispatchToProps)(Counter)