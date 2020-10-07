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
        Hook useCallback
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

  const incrementA = useCallback(() => {
    console.log("incrementA")
    //setA(a +1) //-> esto devolvera siempre 1
    setA((a) =>{
      //como argumento se recibe el a previo
      // si se hace 
      return a + 1 
    })
  },[])

  return (
    <div>
      <Header />
      <Button callback={incrementA}>
        Increment A
      </Button>
    <h1>A: {a}</h1>
    </div>
  )
}

export default App