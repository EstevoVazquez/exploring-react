import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import logguer from 'redux-logger'
//Midelware

const confirmDeleteTodo =  (store) => (next) => (action) =>{
   
    if(action.type === 'DELETE_TODO'){

        let confirmacion = window.confirm('Seguro que deseas eliminar')

        if(confirmacion === true){
            next(action)
        }
    }else{
        next(action)
    }
}


const store = createStore(rootReducer,applyMiddleware(confirmDeleteTodo,logguer))

export default store