import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Homepage from "./pages/Homepage";
import Pancakes from './pages/Pancakes';
import Eggtoast from './pages/Eggtoast';
import Granola from './pages/Granola';
import Smoothie from './pages/Smoothie';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
        </Route>
        <Route path="/pancakes" element={<Pancakes />}>
        </Route>
        <Route path="/eggtoast" element={<Eggtoast />}>
        </Route>
        <Route path="/granola" element={<Granola />}>
        </Route>
        <Route path="/smoothie" element={<Smoothie />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
