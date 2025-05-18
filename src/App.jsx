import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota principal (Home) */}
        <Route path="/" element={<Home />} />

        {/* Rota About */}
        <Route path="/about" element={<AboutMe />} />

        {/* Rota Projects */}
        <Route path="/projects" element={<Projects />} />

        {/* Rota Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;
