import React from 'react';
import './App.css';
import {Counter, Title,Button} from './Components/Counter'



//COMPOSICION IMPLICITA
const App = () =>{

  return(
    <div>
      <Counter>
      <Title>
        {(click)=>(
          <h1>clicks:{click}</h1>
        )}
      </Title>
      <Button type='increment'></Button>
      <Button type='decrement'></Button>

      </Counter>
      
    </div>
  )
}

export default App;
