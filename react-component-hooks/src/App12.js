import React, { useState, useEffect, useRef } from 'react'
import { useDebounce } from 'use-debounce'
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
        Hooks de terceros
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

//ejecutar npm install use-debounce

const App = () => {

  const [name, setName] = useState("")
  const [products, setProducts] = useState([])
  const [search] = useDebounce (name, 1000)

  const handleImput = (e) =>{
    setName(e.target.value)
  }

  useEffect(()=>{
    fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name=' + name)
    .then(res => res.json())
    .then(data => setProducts(data.products))
  },[search])


  return (
    <div>
      <Header />
      <input 
            type ='text' 
            placeholder ='ingresa tu texto de busqueda'
            onChange = {handleImput}/>
      
      <ul>
        {products.map((product)=>(
          <li key={product.id}>{product.name}</li>))}
      </ul>
    </div>
    
  )
}

export default App