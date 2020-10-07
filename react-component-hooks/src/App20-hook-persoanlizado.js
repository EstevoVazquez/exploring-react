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
        Hooks personalizado y  useDebugValue()
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

const useSizes = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useDebugValue("Primer Hook")

  useEffect(() => {
   window.addEventListener('resize',handleResize)

   return(()=>{
    window.removeEventListener('resize')
   })

  },[])

  const handleResize = (e)=>{
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  //retornamos las props procesadas por el hook
  return {
    width:width,
    height:height
  }

}


const App = () =>{

  const {width, height} = useSizes();
  
  return (
    <div>
      <Header />
  <h1>W:{width} H:{height}</h1>
    </div>
  )
}



export default App