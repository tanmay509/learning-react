
import { Link, NavLink, Outlet } from 'react-router-dom'
import './App.css'
import User from './components/Username'

function App() {
  

  return (
    <>
   <nav className='relative w-full h-fit flex gap-30 bg-gray-300'>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vB5JLyHyM6P9TQhXfkXjZfQ9z6BJWYi4haOK1cMsM27_M7ZaTOzNOr0&s=10" alt="Naruto" className='h-40 w-50 top-0 left-100' />
  
  <div className='absolute top-0 right-100 flex gap-30 '>
   
    <NavLink to='/about' className={({isActive})=>`${isActive?'text-black':'text-orange-700'} text-3xl  mt-16 `}>About</NavLink>
    <NavLink to='/login' className={({isActive})=>`${isActive?'text-black':'text-orange-700'} text-3xl  mt-16 `}>Login</NavLink>
  </div>
  
</nav>

    <Outlet/>
    </>
  )
}

export default App
