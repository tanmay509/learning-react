import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let submitHandler=(e)=>{
    e.preventDefault();
    console.log('Form submitted');
  }

  return <div>
    <form onSubmit={(e)=>{
      
      submitHandler(e);
    }}>
      <input type="text" placeholder='Name' />
     
      <button type='submit'>Submit</button>
    </form>
    </div>
    
}

export default App
