import React from 'react'
import Todo from './todo.component'


const TodoList =({todos,updateTodo,deleteTodo})=>(
          <ul>
          {todos.map(todo => 
            <Todo key={todo.id}
             todo={todo}
             updateTodo={updateTodo}
             deleteTodo={deleteTodo}
            />
            )}
        </ul>
    )

export default TodoList


[2388,2048]


curl -X GET "https://acciona.situm.es/api/v1/geofencing/analytics/search?building_ids=3837&building_ids=3839&building_ids=3840&from=2020-07-10T14:17:37.985Z&to=2020-07-15T14:17:52.985Z&organizationId=7cc5dcbe-94e7-4270-b778-459bf88928f2" -H "accept: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MmI2Mjg5Yi02M2QxLTRkOWItOTlmMS1mNWE0ZmMzM2U0ZTYiLCJlbWFpbCI6ImFjY2lvbmFAc2l0dW0uZXMiLCJvcmdhbml6YXRpb25fdXVpZCI6IjdjYzVkY2JlLTk0ZTctNDI3MC1iNzc4LTQ1OWJmODg5MjhmMiIsImlhdCI6MTU5NDgyMjM1OSwiZXhwIjoxNTk1MTgyMzU5fQ.AVpBj6cdkB7AVbeZvvKHgGFdoDTHWi4SArCFHTLTJEM"