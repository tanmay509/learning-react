import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [bg, setBg] = useState("bg-black");
 function setWhite(){
  setBg("bg-white")
 }
 function setRed(){
  setBg("bg-red-500")
 }
 function setYellow(){
  setBg("bg-yellow-500")
 }
 function setGrey(){
  setBg("bg-gray-500")
 }
 function setPink(){
  setBg("bg-pink-500")
 }
 function setBlue(){
  setBg("bg-blue-500")
 }

  return (
  

  <>
  
  <div className={`${bg} min-h-screen w-full `}>
  <div className="bg-white absolute bottom-10 left-0 w-full h-10 flex text-gray gap-45 justify-center items-center rounded-full">
  <button className='bg-white h-10 w-10 rounded-full' onClick={setWhite}>White</button>
  <button className='bg-red-500 h-10 w-10 rounded-full' onClick={setRed}>Red</button>
  <button className='bg-yellow-500 h-10 w-15 rounded-full' onClick={setYellow}>Yellow</button>
  <button className='bg-gray-500 h-10 w-10 rounded-full' onClick={setGrey}>Grey</button>
  <button className='bg-pink-500 h-10 w-10 rounded-full' onClick={setPink}>Pink</button>
  <button className='bg-blue-500 h-10 w-10 rounded-full' onClick={setBlue}>Blue</button>
</div>
  </div>
  </>
)}

export default App
