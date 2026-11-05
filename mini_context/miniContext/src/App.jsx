import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>Hey There I am going to be the next richest man in the world.</h1>
    <Login/>
    <User/>
    
    </UserContextProvider>
  )
}

export default App
