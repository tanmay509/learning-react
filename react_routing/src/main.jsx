import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About_us.jsx'
const router=createBrowserRouter([{
  path:"/",
  element:<Home/>,
 children:[
  {
    path:'about',
    element:<About/>
  },{
    





    
  }
 ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
