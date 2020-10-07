import React from 'react'

const Todo =({todo,updateTodo,deleteTodo})=>(
            <li>
              <input type='checkbox' onChange={()=>updateTodo(todo)}
                    checked = {todo.checked}/>
              {todo.text}
              <button onClick={()=>deleteTodo(todo)}> X </button>
            </li>
    )

export default Todo