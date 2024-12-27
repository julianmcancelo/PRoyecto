import React, { useEffect, useState } from 'react';
import './Projects.css'; // Importa el archivo de CSS

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);  // Estado para controlar la carga
  const [error, setError] = useState(null);      // Estado para manejar errores

  useEffect(() => {
    fetch('https://api.github.com/users/julianmcancelo/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);  // Desactivar el estado de carga
      })
      .catch((error) => {
        setError('Hubo un problema al cargar los repositorios.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-message">
        Cargando repositorios...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        {error}
      </div>
    );
  }

  return (
    <section id="proyectos" className="projects-section">
      <div className="container mx-auto text-center">
        <h2 className="projects-title">Mis Repositorios en GitHub</h2>
        <div className="projects-grid">
          {repos.map((repo) => (
            <div
              className="repo-card"
              key={repo.id}
            >
              <h3 className="repo-title">{repo.name}</h3>
              <p className="repo-description">{repo.description || 'Sin descripción'}</p>
              <a
                href={repo.html_url}
                className="repo-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver repositorio de ${repo.name}`}
              >
                Ver Repositorio
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
