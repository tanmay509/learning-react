import { useState } from 'react'
import './App.css'
import GithubScraper from './components/GithubCard'
import { Link, Outlet} from 'react-router-dom'

function App() {
  const [username, setUsername] = useState('')

  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center px-4">
      <form className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-black/40 backdrop-blur" onSubmit={(e) => e.preventDefault()}>
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
          GitHub lookup
        </p>
        <h1 className="mb-6 text-2xl font-semibold text-white">
          Find a profile
        </h1>

        <label htmlFor="u" className="mb-2 block text-sm font-medium text-slate-300">
          Give me a valid GitHub username
        </label>

        <input
          type="text"
          id="u"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="octocat"
          className="mb-5 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 shadow-inner outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40"
        />

        <Link to={`/github/${username}`}>
        <button
          type="submit"
          className="w-full rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-slate-900" 
          >
          Submit
        </button>
          </Link>
      </form>
      <Outlet /> 
    </div>
    
  )
}

export default App
