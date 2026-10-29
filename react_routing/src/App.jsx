
import { Link, NavLink, Outlet } from 'react-router-dom'
import './App.css'
import User from './components/Username'

function App() {
  

  return (
    <>
    <nav>

    <Link to='/about'>About</Link>
    <Link to='/login'>Login</Link>
    <Link to={`/username/${User.id}`}>  </Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default App
