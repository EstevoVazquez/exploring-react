import {ADD_TODO,UPDATE_TODO, DELETE_TODO} from '../actions/todo.actions'

const initialState = {
    todos:[
        {
            text:'Crear Componente',
            id:'1a234f5',
            checked: false
        },
        {
            text:'Subir videso de lecciones',
            id:'1a23s46',
            checked: true
        }
    ]
}

const todo = (state = initialState, action) =>{

    switch (action.type) {

        case ADD_TODO:
            return {
                ...state,
                todos:[
                    action.payload,
                    ...state.todos
                ]
            }

        case DELETE_TODO:
        return {
                ...state,
                todos: state.todos.filter(todo=>todo.id !== action.payload.id)
            }


        case UPDATE_TODO:
           
            const updateTodos = state.todos.map((todo) => {
                if(action.payload.id === todo.id){
                    return {
                        ...todo,
                        checked: !todo.checked
                    }
                }
                return todo
            })
            return {
                ...state,
                todos:updateTodos
            }

        default:
            return state;
    }
}

export default todo