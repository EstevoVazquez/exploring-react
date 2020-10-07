import React, { useState, useCallback } from 'react'

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
        Hook useCallback con dependencias
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

const getRandoColor = () => '#' + Math.random().toString(16).slice(2,8)

const Button = React.memo(({callback,children}) => {

  const styles = {
    padding: '1em',
    fontSize: '20px',
    background: getRandoColor()
  }

  return (
    <button style={styles}  onClick={callback}>
          {children}
    </button>
  )
})


const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const incrementA = useCallback(() => {
    setA((a) =>{
      //como argumento se recibe el a previo
      // si se hace 
      return a + 1 
    })
  },[])

  const incrementB = useCallback(() => {
    setB((b) =>{
      //como brgumento se recibe el a previo
      // si se hace 
      return b + a
    })
  },[a])

  return (
    <div>
      <Header />
      <Button callback={incrementA}>
        Increment A
      </Button>   
      <Button callback={incrementB}>
        Increment B
      </Button>
    <h1>A: {a}</h1>
    <h1>B: {b}</h1>
    </div>
  )
}

export default App