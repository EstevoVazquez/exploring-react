import { combineReducers } from 'redux'
import user from './user.reducer'
import counter from './counter.reducer'
import fruits from './fruits.reducer'
import todo from './todo.reducer'





//con esto creamos un modulo
export default combineReducers({
    counter: counter,
    user: user,
    fruits: fruits,
    todo:todo
  })