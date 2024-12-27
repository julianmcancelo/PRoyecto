import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';  // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
