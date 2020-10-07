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

  const[clicks, setClicks] = useState(0)
  const[title, setTitle] = useState("")

useEffect(()=>{
  //ComponentDidMount
  console.log("Dentro de useEffect")
  //ComponetDidUpdate
  console.log("Dentro de useEffect", clicks,title)
  console.log("_____________________")

  return(()=>{
  //componentWillUmmount
  console.log("return de useEffect", clicks,title)

  })
})

  const addClicks = () =>{
    setClicks(clicks +1);
  }

  const handleImput = (e) => {
    const title = e.target.value
    setTitle(title);
  }

  return (
    <div>
      <Header></Header>
      <input type='text'
       onChange ={handleImput}
       value = {title}/>
      <button
      onClick={addClicks}
      >Clicks ({clicks})</button>
      <h3>{title}</h3>
    </div>
  )
}



export default App