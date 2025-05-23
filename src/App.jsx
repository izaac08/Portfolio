import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import ExperienceAndEducation from './components/Experience';
import Contact from './components/Contact';
// import background from './assets/purplebackground.jpg';

function App() {
  return (
    <div
      style={{
        // backgroundImage: `url(${background})`,
        backgroundImage: "url('/Portfolio/purplebackground2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <div className="container">
        <Navbar />
         <Home />
         <About />
         <ExperienceAndEducation />
         <Projects />
         <Contact />
      </div>
    </div>
  );
}


export default App;
