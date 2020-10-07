import React from 'react'
import {connect } from 'react-redux'
import { updateName } from '../redux/actions/user.actions'


const Info = (props) =>{

    const handlerChange = (e) => {
        console.log(e.target.value)
        const name = e.target.value

        props.updateName(name)

    }



    return(
        <div>   
            <h1>{props.name} - {props.country}</h1>
        
        <button onClick={props.updateName}>Acutualizar Name</button>
        <input type='text' onChange={handlerChange} placeholder='introducenombre'></input>
        </div>

    )
}

//mapea el estado devuelto por el store a las props de compoente
const maptStateToProps = (state) =>{
    return {
      count: state.counter,
      name: state.user.name,
      country: state.user.country
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
      return {
        updateName: (name) => dispatch(updateName(name))
      }
  }
  
  
  export default connect(maptStateToProps,mapDispatchToProps)(Info)
