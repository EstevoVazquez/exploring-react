import React, { useState, useReducer } from 'react'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }

  return (
    <header style={styles}>
      <h1>
        Use reducer
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span> 
      </h1>
    </header>
  )
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }

    case 'SET_TITLE':
      return {
        ...state,
        title: action.title
      }

    default:
      return state
  }
}


const App = () => {
  
  const [ state, dispatch ] = useReducer(reducer,{
    count:0,
    title:'hola'
  })

  const increment = () => {
    dispatch({type:'INCREMENT'})
  }
  const decrement = () => {
    dispatch({type:'DECREMENT'})
  }
  const handleTitle = (e) => {
    console.log(e.target.value)
    dispatch({
      type:'SET_TITLE',
       title: e.target.value})
  }
  return (
    <div>
      <Header />
      <input
        type='text'
        onChange={handleTitle}
        value={state.title}
      />
      <button onClick={increment}>
        Add ({ state.count })
      </button>
      <button onClick={decrement}>
        Add ({ state.count })
      </button>
  <h1>{state.count}-{state.title}</h1>
    </div>
  )
}



export default App