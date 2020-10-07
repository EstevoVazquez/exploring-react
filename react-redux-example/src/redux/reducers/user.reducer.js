
import { UPDATE_NAME } from '../actions/user.actions'


const initialState ={
  name: 'Estevo',
  country: 'Galicia'
}

const user =  (state = initialState, action) =>{
    
    switch(action.type) {

      case UPDATE_NAME:
        return{
          ...state,
          name : action.payload.name
        }

        default:
         return state
    }
  }

export default user