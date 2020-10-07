import React,{Component} from 'react';
import './App.css';
import './global.css';




const Parent = ({children})=>{
  
//retornas los childrens renderizables 
 const  redearableChildren = React.Children.toArray(children).map((child,index)=>{
 return (<li key={index}>{child}</li>)
 })

  return(
    <div className = 'box'>
        <div className = 'box blue'>
          {redearableChildren}
      </div>
      
    </div>
  )

}



class App extends Component{
  render (){
    return(
      <div>
        <Parent>
          <span>Fresa</span>
          <span>Manzana</span>
          <span>Cereza</span>
        </Parent>
      </div>
    )
  }
}

export default App;
