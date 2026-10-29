import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx';
import Login from './components/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/Username.jsx';

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
 children:[
  {
    path:'about',
    element:<About/>
  },{
    path:'login',
    element:<Login/>
  },{
    path:'/username/:id',
    element:<User/>
  }
 ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
