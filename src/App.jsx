import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router";
import HomePage from './pages/home.jsx'
import Box from './components/box.jsx'
import Navbar from './components/navbar.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div>
        <Routes>
          {/* <Route element={<Layout />}> */}
            <Route path="/" element={<HomePage />}/>
            <Route path="/publications" element={<HomePage />}/>
            <Route path="/students" element={<HomePage />}/>
            <Route path="/projects" element={<HomePage />}/>
            <Route path="/courses" element={<HomePage />}/>
            <Route path="/talks" element={<HomePage />}/>
          {/* </Route> */}
        </Routes>
      </div>

      {/* <HomePage/> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
