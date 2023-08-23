import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white text-center py-5">
      <h1>Pagina Prueba</h1>
      <nav className="mt-4">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link text-white" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#quienes-somos">Quienes Somos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#vision">Visión</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


