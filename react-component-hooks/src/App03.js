import React, { Component, useState } from 'react'

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
        Hook useState
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

const App = () =>{

  const[state, setState] = useState({
    clicks: 0,
    title: ""
  })

  const addClicks = () =>{
    mergeState({
      clicks: state.clicks +1
    });
  }

  const mergeState = (nextState) => {
    setState({
      ...state,
      ...nextState
    })
  }

  const handleImput = (e) => {
    const title = e.target.value
    mergeState({
      title
    });
  }

  return (
    <div>
      <Header></Header>
      <input type='text'
       onChange ={handleImput}
       value = {state.title}/>
      <button
      onClick={addClicks}
      >Clicks ({state.clicks})</button>
      <h3>{state.title}</h3>
    </div>
  )
}



export default App