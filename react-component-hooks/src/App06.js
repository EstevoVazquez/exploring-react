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
        Hook useEffect
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

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

useEffect(()=>{
  window.addEventListener('mousemove', handleMove)

  return(()=>{
    window.removeEventListener('mousemove', handleMove)
    })
  })

const handleMove = (e) =>{
  setMouseX(e.clientX)
  setMouseY(e.clientY)
}

  return (
    <div>
      <Header></Header>
      <h3>MouseX: {mouseX} MouseY: {mouseY}</h3>
    </div>
  )
}



export default App