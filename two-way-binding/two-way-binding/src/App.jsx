import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [count,setCount] = useState(false)
  let c=count;
  let nameHandler=(e)=>{
    e.preventDefault();
    setCount(true);
    console.log("The name is ", name);
    setName("");
    
   
}
let countHandler=()=>{
  
  setCount(count + 1);
}

  return <div>
    <form onSubmit={(e)=>{
      nameHandler(e);

    }}>

    <input 
    type="text"
    placeholder='Name'
    value={name}
    onChange={(e)=>{
      
      setName(e.target.value)
    }}/>
    {!!name.length>0 && count === true && <h1>The name is {name}</h1>}

    <button >Submit</button>
    </form>
  </div>
}

export default App
