import React, { useState, useRef, forwardRef,useImperativeHandle } from 'react'

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
        useImperativeHandle
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
// envolvemos el componente en la funcion forwarref para 
//hacerle llegar la referencia desde el padre
const FancyImput = forwardRef((props,ref) => {
  const [text, setText] = useState("***")
  const entrada = useRef()

  //define los metodos que se pueden invocar desde fuera a traves de la referencia pasada
  //al componente
useImperativeHandle(
  ref,
  () => ({
    dispatchAlert: ()=>{alert('hola')},
    setParagraph: (mensaje) =>{
      setText(mensaje)
    },
    focusInput: ()=>{entrada.current.focus()}
  }))

 return(
  <div>
    <p>{text}</p>
    <input ref={entrada} type='text' placeholder='ingresa texto'/> 
     </div>
 )
})


const App = () => {
  
  const fancyImput = useRef()

  const handleClick = () =>{
   // fancyImput.current.setParagraph("hola mundo")
   fancyImput.current.focusInput()
  }

  return (
    <div>
      <Header />
      <FancyImput ref={fancyImput}></FancyImput>
      <button onClick={handleClick}>Dispatch</button>
    </div>
  )
}



export default App