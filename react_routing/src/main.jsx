import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx';
import Login from './components/Login.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Username from './components/Username.jsx';
import Home from './components/Home.jsx';
import Github, { githubLoader } from './components/Github.jsx';
import  GitPloader from './components/GitPloader.jsx';

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>

    <Route path='Home' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='/username/:id' element={<Username/>}/>
    <Route path='github' element={<Github/>}
    loader={githubLoader}/>
    <Route path='/github/:username' element={<Github/>}
    loader={GitPloader}/>




  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
