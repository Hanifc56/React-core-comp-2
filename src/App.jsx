import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {

  //Normal Function 

  function handleClick(){
    alert('btn clciked');
  }
  // Arrow Function
  const handleClick2 = () =>{
    alert('btn 2 clciked')
  }

  const addToFive =(num)=>{
    alert(num+5);
  }

  return (
    <>
      <h3>React Core Consepts 2</h3>

      <Friends></Friends>

      <Users></Users>
    
      <Team></Team>

      <Counter></Counter>
      {/* Normal Html=> <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me 1</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=>{alert('thired clicked')}}>Click Me 3</button>
      <button onClick={()=>addToFive(3)}>Click Me 4</button>

      
    </>
  )
}

export default App
