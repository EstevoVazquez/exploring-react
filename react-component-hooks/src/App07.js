import React, { Component, useState,useEffect } from 'react'

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
        Hook useEffect - como dispararlo
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

  const[clicks, setClicks] = useState(0)
  const[emoji, setEmoji] = useState(":)")

 useEffect(()=>{
  alert("useEffect")
 },[clicks])


  const addClicks = () =>{
    setClicks(clicks +1);
  }

  const toogleEmoji = () =>{
    const nextEmoji = emoji === ':)' ? ':(': ':)'
    setEmoji(nextEmoji)
  }

  return (
    <div>
      <Header></Header>
      <button
      onClick={addClicks}
      >Clicks ({clicks})</button>
       <button
      onClick={toogleEmoji}
      >{emoji}</button>
    </div>
  )
}



export default App