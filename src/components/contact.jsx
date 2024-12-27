import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importar iconos
import './Contact.css'; // Importar el archivo CSS

const Contact = () => {
  return (
    <section id="contacto" className="contact-section">
      <div className="container mx-auto text-center">
        <p className="contact-title">Conéctate conmigo:</p>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/juliancancelo"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="icon" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:juliancancelo@example.com"
            className="contact-link"
          >
            <FaEnvelope className="icon" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/julianmcancelo"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub className="icon" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
