import React, { useState } from 'react';
import './Navbar.css'; // Importa el archivo CSS

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="nav-links">
          <a href="#sobre-mi" className="nav-link">Sobre mí</a>
          <a href="#proyectos" className="nav-link">Proyectos</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </div>
        <div className="nav-actions flex items-center space-x-4">
          <button onClick={toggleTheme} className="theme-toggle-btn">Cambiar tema</button>
          <a href="https://www.linkedin.com/in/juliancancelo" target="_blank" className="nav-link">LinkedIn</a>
          <a href="https://github.com/julianmcancelo" target="_blank" className="nav-link">GitHub</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
