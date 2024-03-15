import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Animation from './Pages/Animation';
import AnimatioNDetailsPage from './Pages/Details/AnimationDetailsPage';
import VisualDetailsPage from './Pages/Details/VisualDetailsPage';
import Drawing from './Pages/Drawing';
import Contact from './Pages/Contact';
import DemoReel from './Pages/DemoReel';
import Visual from './Pages/Visual';
import ComingSoon from './Pages/ComingSoon';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ComingSoon />} />
        {/* <Route path="/demo-reel" element={<DemoReel />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/visual-development" element={<Visual />} />
        <Route path="/animation-details/:id" element={<AnimatioNDetailsPage />} />
        <Route path="/visual-details/:id" element={<VisualDetailsPage />} />
        <Route path="/drawing/:category" element={<Drawing />} />
        <Route path="/contact-me" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default App

