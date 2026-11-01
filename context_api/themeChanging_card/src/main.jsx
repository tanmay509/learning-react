import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import  GithubCard  from './components/GithubCard.jsx'
import GithubScraper from './components/GithubScraper.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
    
      {
        path: 'github/:username',
        element: <GithubCard />,
        loader: GithubScraper,   // 👈 separate function, not the component
      },
    
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
