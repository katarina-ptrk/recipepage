import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Homepage from "./pages/Homepage";
import Pancakes from './pages/Pancakes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
        </Route>
        <Route path="/pancakes" element={<Pancakes />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
