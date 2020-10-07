import React, { useState } from 'react'

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
        React.memo
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


const Counter = React.memo((props) =>{
  console.log( "Render <Counter>")
  return(
  <h1>{props.clicks}</h1>
  )
})

const Title = React.memo((props) =>{
  console.log( "Render <Title>")
  return(
  <h1>{props.title}</h1>
  )
})



const App = () => {
  const [ clicks, setClicks ] = useState(0)
  const [ title, setTitle ] = useState('Hook useState')

  const addClicks = () => {
    setClicks(clicks + 1)
  }

  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div>
      <Header />
      <input
        type="text"
        value={title}
        onChange={handleInput}  
      />
      <button onClick={addClicks}>
        ADD
      </button>
      <Counter clicks={clicks}></Counter>
      <Title title={title}></Title>
    </div>
  )
}

export default App