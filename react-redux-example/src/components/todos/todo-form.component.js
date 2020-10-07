import React from 'react'

const TodoForm =({onSubmit})=>(
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='TODO ITEM'></input>
            <button>Agregar</button>
          </form>
    )

export default TodoForm