import React, { Component,useState, useMemo } from 'react'

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
        Hook useMemo
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


const SuperList = ({list, log}) =>{
  console.log("Render Superlist " + log)
  return(
    <ul>
    {list.map((item)=><li key={item}>{item}</li>)}
    </ul>
  )
}

const App = () =>{

  const [clicks, setClicks] = useState(0)
  const [list,setList] = useState(["orange","pink", "blue", "yellow"])
  const memoList = useMemo(()=>{
    return(
      <SuperList
        list = {list}
        log ="Memorizado"
      ></SuperList>
    )
  },[list])

  const updateList = ()=>{
    setList(["1","2", "3", "4"])
  }

  const add = () =>{setClicks(clicks +1)}
  return (
    <div>
      <Header />
      <button onClick={add}>
        Clicks ({clicks})
      </button>

      <SuperList
        list = {list}
        log ="Normal"
      ></SuperList>
      <button onClick={updateList}>
        UpdateList 
      </button>

      {memoList}
    </div>
  )
}



export default App