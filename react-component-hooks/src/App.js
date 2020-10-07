import React, { useDebugValue,useState, useEffect } from 'react'

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
        Hooks useDebugValue()
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

const useFetch = (url,initialState=[]) => {

const [data, setData] = useState(initialState)
const [isFetching, setFetching] = useState(true)

useEffect(() => {
  setFetching(true)
  fetch(url)
  .then(response => response.json())
  .then(data => { 
    setData(data)
    setFetching(false)
  })

}, [url])

return [
  data,
  isFetching
]

}


const App = () =>{

  const [ clicks, setClicks ] = useState(1);
  const [ users, isLoading ] = useFetch('https://jsonplaceholder.typicode.com/users/' + clicks,{})



  const add = ()=>{ 
    setClicks(clicks +1 )
  }

  return (
    <div>
      <Header />
      { isLoading && <h1>Cargando...</h1> }
      {users.name} {users.phone}
      <br></br>
    <button onClick = {add}>
      Clicks ({clicks})
    </button>
    </div>

  )
}



export default App