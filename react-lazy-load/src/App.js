import React,{useState, lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {MoonLoader} from 'react-spinners'

//code spliting
const Image = lazy(()=>import('./components/Image'))


const App = () =>{
  const [show, setShow] = useState(false)

  const toogle = () =>{
    setShow(!show)
  }


  return (
    <div>
      <button onClick={toogle}>
        { show? 'Ocultar' : 'Mostrar'}
      </button>
      {show && 
      <Suspense fallback={<MoonLoader color='orangeRed'/>}>
        <Image/>
      </Suspense>
      }
    </div>
  )
}

export default App;
