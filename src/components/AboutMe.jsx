import React from 'react';
import './AboutMe.css'; // Asegúrate de importar el archivo CSS

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="container mx-auto py-20 px-4">
      <div className="about-me-card">
        <h2 className="about-me-title">Sobre mí</h2>
        <p className="about-me-text">
          Soy un Analista de Sistemas apasionado por la tecnología y el desarrollo de soluciones innovadoras.
          Me enfoco en la optimización de procesos y el diseño de aplicaciones que resuelvan problemas reales.
        </p>
        <p className="about-me-text">
          Mi experiencia me ha permitido adquirir habilidades en diversas áreas, desde la programación hasta la gestión de proyectos.
          Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer profesionalmente.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
