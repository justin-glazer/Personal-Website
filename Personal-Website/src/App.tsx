import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './Landing'
import About from './About'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
