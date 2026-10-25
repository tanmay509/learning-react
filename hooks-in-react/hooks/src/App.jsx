import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter,setCounte]=useState(0);
  function add(){
    if(counter<20){

      setCounte(counter+1);
    }else{
      setCounte("Can not increase anymore")
      setTimeout(()=>{setCounte(0)},5000)
    }
  }
  function sub(){
    if(counter==0){

      setCounte("Can not be negative");
      setTimeout(()=>{setCounte(0)},5000)
    }else{

      setCounte(counter-1);
    }
  }
  return<>
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-tr from-indigo-900 via-purple-900 to-accent/80 rounded-3xl shadow-2xl p-8 border-4 border-accent-border animate-gradient-x max-w-lg mx-auto">
      <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wider mb-9 text-white drop-shadow-glow bg-gradient-to-r from-accent via-purple-400 to-accent-bg bg-clip-text text-transparent">
        Counter Game
      </h1>
      <div className="mb-8 text-4xl md:text-5xl font-semibold text-center text-white bg-accent-bg/20 px-6 py-3 rounded-xl border-2 border-accent-border shadow-md transition-all duration-300">
        <span className="block text-lg text-accent font-bold mb-2 uppercase tracking-wide">
          The count is
        </span>
        <span className={`inline-block px-9 py-3 rounded-full border-4 font-mono text-5xl transition-all duration-300
          ${typeof counter === 'number'
            ? 'bg-accent text-white border-accent shadow-lg'
            : 'bg-red-600/70 text-white border-white animate-pulse shadow-xl'}
        `}>
          {counter}
        </span>
      </div>
      <div className="flex justify-center gap-8 w-full mt-2">
        <button
          onClick={add}
          className="relative group flex-1 py-3 text-2xl font-bold rounded-xl shadow-xl transition-all
            bg-gradient-to-r from-accent to-purple-600 hover:from-purple-400 hover:to-accent text-white
            border-4 border-accent-border hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-border
            overflow-hidden
          "
        >
          <span className="z-10 relative">
            <svg className="inline-block mr-2 -mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Increase
          </span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 blur-sm transition duration-300"></span>
        </button>
        <button
          onClick={sub}
          className="relative group flex-1 py-3 text-2xl font-bold rounded-xl shadow-xl transition-all
            bg-gradient-to-r from-fuchsia-700 via-accent-bg to-indigo-600 hover:bg-red-700 text-accent
            border-4 border-accent-border hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-border
            overflow-hidden
          "
        >
          <span className="z-10 relative">
            <svg className="inline-block mr-2 -mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
            Decrease
          </span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-accent/10 blur-sm transition duration-300"></span>
        </button>
      </div>
      <div className="mt-12 text-sm opacity-70 text-white flex items-center gap-1 font-mono">
        Aim for <span className="inline-block px-3 py-0.5 rounded-full bg-accent text-white font-black">20</span> — Can you max it out?
      </div>
    </div>
</>  
}

export default App
