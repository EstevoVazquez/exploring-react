import React from 'react'
import {connect } from 'react-redux'
import { addTodo, updateTodo, deleteTodo } from '../../redux/actions/todo.actions'
import {getId} from '../../utils'
import TodoForm from './todo-form.component'
import TodoList from './todo-list.component'

const Todos = ({todo, addTodo, updateTodo,deleteTodo}) =>{
  console.log(todo)

  const handleSubmit = (event) =>{
    event.preventDefault()
    const todoItem = event.target[0].value
    addTodo({
      text:todoItem,
      checked: false,
      id: getId()
    })
    event.target[0].value =''
  }

  const handleClick  = (todo) =>{
    updateTodo(todo)
  }

    return (
        <div>   
          <h1>TODOS</h1>
          <TodoForm onSubmit={handleSubmit}/>
          <TodoList 
              todos={todo.todos} 
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              />
        </div>

    )
}

//mapea el estado devuelto por el store a las props de compoente
const maptStateToProps = (state) =>{
    return {
      todo: state.todo
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
      return {
        addTodo: (todo) => dispatch(addTodo(todo)),
        updateTodo: (todo) => dispatch(updateTodo(todo)),
        deleteTodo: (todo) => dispatch(deleteTodo(todo))
      }
  }
  
  
  export default connect(maptStateToProps,mapDispatchToProps)(Todos)
  