import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Films from './Pages/Films';
import Works from './Pages/Works';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
  )
}

export default App

