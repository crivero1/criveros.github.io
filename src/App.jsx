import './App.css';
import { Routes, Route } from "react-router";
import Navbar from './components/navbar.jsx';
import HomePage from './pages/home.jsx';
import StudentsPage from './pages/students.jsx';

function App() {
  return (
    <>
    <Navbar/>
      <div>
        <Routes>
          {/* <Route element={<Layout />}> */}
            <Route path="/" element={<HomePage />}/>
            <Route path="/publications" element={<HomePage />}/>
            <Route path="/students" element={<StudentsPage />}/>
            <Route path="/projects" element={<HomePage />}/>
            <Route path="/courses" element={<HomePage />}/>
            <Route path="/talks" element={<HomePage />}/>
          {/* </Route> */}
        </Routes>
      </div>
    </>
  )
}

export default App
