import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
