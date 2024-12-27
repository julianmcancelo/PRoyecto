import React from 'react';
import './Header.css'; // Asegúrate de que la ruta sea correcta según la ubicación del archivo CSS

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-40 relative">
      <div className="container mx-auto header-content mt-40"> {/* Margen superior para evitar superposición con navbar */}
        <div className="flex justify-center items-center flex-col relative"> {/* Flexbox para centrar el contenido */}
          <div className="profile-container mb-4">
            <div className="relative">
              <img
                src="/foto.jpg"
                alt="Foto de perfil"
                className="profile-img rounded-full w-48 h-48 object-cover mx-auto mb-6 transition-transform duration-300 ease-in-out hover:rotate-y-180 hover:blur-sm" // Aumenté el tamaño de la foto
              />
              <a
                href="/CV_Julian_Cancelo.pdf" // Ruta del archivo CV
                download="CV_Julian_Cancelo.pdf" // Nombre con el que se descargará el archivo
                className="cv-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold opacity-0 transition-opacity duration-300 hover:opacity-100"
              >
                Mi CV
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Julián Cancelo</h1>
            <p className="text-xl font-light opacity-80">Analista de Sistemas | Desarrollador de Aplicaciones</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
