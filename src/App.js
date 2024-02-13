import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Films from './Pages/Films';
import Works from './Pages/Works';
import Drawing from './Pages/Drawing';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/works" element={<Works />} />
        <Route path="/drawing/:category" element={<Drawing />} />
      </Routes>
    </Router>
  )
}

export default App

